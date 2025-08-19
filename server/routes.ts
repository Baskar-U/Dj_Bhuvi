import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking request endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      const bookingData = insertBookingRequestSchema.parse(req.body);
      const booking = await storage.createBookingRequest(bookingData);
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
