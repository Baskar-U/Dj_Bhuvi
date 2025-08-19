import { type User, type InsertUser, type BookingRequest, type InsertBookingRequest } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createBookingRequest(bookingRequest: InsertBookingRequest): Promise<BookingRequest>;
  getBookingRequests(): Promise<BookingRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private bookingRequests: Map<string, BookingRequest>;

  constructor() {
    this.users = new Map();
    this.bookingRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBookingRequest(insertBookingRequest: InsertBookingRequest): Promise<BookingRequest> {
    const id = randomUUID();
    const bookingRequest: BookingRequest = { 
      ...insertBookingRequest, 
      id,
      createdAt: new Date()
    };
    this.bookingRequests.set(id, bookingRequest);
    return bookingRequest;
  }

  async getBookingRequests(): Promise<BookingRequest[]> {
    return Array.from(this.bookingRequests.values());
  }
}

export const storage = new MemStorage();
