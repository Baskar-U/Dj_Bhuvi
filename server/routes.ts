import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { googleSheetsService } from "./googleSheets";
import { insertBookingRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Google Sheets on server start
  try {
    await googleSheetsService.initializeSheet();
    console.log('Google Sheets initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Google Sheets:', error);
  }

  // Booking request endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const bookingData = insertBookingRequestSchema.parse(req.body);
      const booking = await storage.createBookingRequest(bookingData);
      
      // Save to Google Sheets
      try {
        await googleSheetsService.addBookingRequest(booking);
        console.log('Booking request saved to Google Sheets');
      } catch (sheetsError) {
        console.error('Failed to save to Google Sheets:', sheetsError);
        // Continue with response even if Google Sheets fails
      }
      
      res.json({ success: true, booking });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid booking data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create booking request" 
        });
      }
    }
  });

  // Get all booking requests (for admin purposes)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookingRequests();
      res.json({ success: true, bookings });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve booking requests" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
