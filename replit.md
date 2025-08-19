# DJ Ananya - Pittsburgh's Premier Indian & Western Music DJ

## Overview

This is a professional DJ website for DJ Ananya, a Pittsburgh-based DJ specializing in Indian and Western music fusion. The application is built as a single-page React application with a Node.js/Express backend, featuring a modern dark theme with vibrant brand colors. The site showcases DJ services, event types, music styles, client testimonials, and includes a booking request system for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom CSS variables for brand colors (DJ Ananya theme)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Custom toast system using Radix UI Toast primitive

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for booking management
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Data Storage**: In-memory storage implementation with interface for future database integration

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Tables**: 
  - `users` - User authentication (prepared for future admin features)
  - `booking_requests` - Client booking inquiries with contact details and event information
- **Validation**: Zod schemas for type-safe data validation and API contracts

### Development Tools
- **Build System**: Vite with React plugin and development optimizations
- **TypeScript**: Strict configuration with path aliases for clean imports
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Development Server**: Vite dev server with HMR and Express API integration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver (Neon Database integration)
- **drizzle-orm & drizzle-zod**: Database ORM and schema validation
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **react-hook-form & @hookform/resolvers**: Form state management and validation

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives including:
  - Dialog, Dropdown, Toast, Select, Navigation components
  - Form controls (Checkbox, Radio, Switch, Slider)
  - Layout components (Accordion, Tabs, Collapsible)
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **cmdk**: Command palette/search functionality
- **embla-carousel-react**: Carousel/slider components

### Development & Build Tools
- **vite & @vitejs/plugin-react**: Build tooling and React integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development debugging tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### Additional Utilities
- **date-fns**: Date manipulation and formatting
- **lucide-react**: Icon library with consistent design
- **nanoid**: Unique ID generation
- **zod**: Runtime type validation and schema definition