import { google } from 'googleapis';
import type { BookingRequest } from '@shared/schema';

export class GoogleSheetsService {
  private sheets;
  private auth;
  private spreadsheetId: string;

  constructor() {
    // Initialize Google Sheets API with service account credentials
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    this.spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID || '';
  }

  async addBookingRequest(bookingRequest: BookingRequest): Promise<void> {
    try {
      // Prepare the row data
      const values = [
        [
          bookingRequest.id,
          bookingRequest.name,
          bookingRequest.contact,
          bookingRequest.eventType || '',
          bookingRequest.details || '',
          bookingRequest.createdAt?.toISOString() || new Date().toISOString(),
        ]
      ];

      // Append the data to the sheet
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:F', // Using default sheet name
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });

      console.log('Booking request added to Google Sheets successfully');
    } catch (error) {
      console.error('Error adding booking request to Google Sheets:', error);
      throw error;
    }
  }

  async createHeaderRow(): Promise<void> {
    try {
      const values = [
        ['ID', 'Name', 'Contact', 'Event Type', 'Details', 'Created At']
      ];

      await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A1:F1',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });

      console.log('Header row created in Google Sheets');
    } catch (error) {
      console.error('Error creating header row in Google Sheets:', error);
      throw error;
    }
  }

  async initializeSheet(): Promise<void> {
    try {
      // Check if the sheet exists and has headers
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A1:F1',
      });

      if (!response.data.values || response.data.values.length === 0) {
        await this.createHeaderRow();
      }
    } catch (error) {
      console.log('Initializing sheet with headers...');
      await this.createHeaderRow();
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();