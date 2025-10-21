````markdown
# Technical Specification: SMK Bina Mandiri Website

**Version 1.0**  
**Date**: October 21, 2025

## 1. Project Overview

This document outlines the technical plan for building a modern, lightweight, and informative website for the vocational high school, SMK Bina Mandiri. The website will serve as a public information portal and an interactive platform via an AI Chatbot. The project also includes a secure Admin Dashboard for managing dynamic content and monitoring user interactions from the contact page.

## 2. Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Shadcn/ui, Tailwind CSS, MCP Server (21st.dev) for styling utilities
- **Database**: Postgres
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **AI**: Google AI (Gemini API) via the @google/generative-ai SDK
- **Deployment (Recommendation)**: Vercel (Frontend/Backend) & Vercel Postgres / Supabase / Neon (Database)

## 3. Theming & Color Palette

The theme will be configured in `tailwind.config.js` and `globals.css` using CSS Variables, following the Shadcn/ui best practices.

- **Primary / Dark Background**: `#11235A`
- **Primary Action / Accent**: `#596FB7`
- **Muted / Secondary Background**: `#C6CF9B`
- **Highlight / Accent Light**: `#F6ECA9`

## 4. Core Features

### 4.1. Public Website (Frontend)

- **Static & Incremental Rendering (SSG/ISR)**: Most content-heavy pages (Profile, Departments, Staff) will be statically generated for maximum performance. The Homepage may use Incremental Static Regeneration (ISR) to display recent news or announcements.
- **Complete Navigation**: Implementation of all pages according to the requested navigation structure.
- **Modern & Responsive UI**: A clean, accessible design built with Shadcn/ui components and enhanced with utilities from MCP Server. The layout will be fully responsive for all devices.
- **Contact Form**: The "Contact" page will feature a form (Name, Email, Message) that submits data to the backend using a Next.js Server Action.

### 4.2. AI Chatbot (Gemini Integration)

- **Chat Interface**: A floating action button (FAB) or bubble in the bottom-right corner that opens a chat modal/pop-over interface.
- **School-Specific Context (Simple RAG)**:  
  The chatbot will be strictly instructed to only answer questions related to SMK Bina Mandiri.

- **Implementation Strategy**:  
  We will employ a simple Retrieval-Augmented Generation (RAG) approach.  
  Create a dedicated context file (`src/lib/school-context.md`) containing all essential school information: "About Us," details of all departments, admission info, staff lists, etc.  
  When a user sends a message, the frontend calls an internal API Route (e.g., `app/api/chat/route.ts`).  
  The backend API Route will:
  1. Receive the user's message.
  2. Read the contents of `school-context.md`.
  3. Construct a highly specific prompt for the Gemini model:
     ```
     You are an AI assistant for SMK Bina Mandiri. Your sole purpose is to answer questions from students or prospective students based ONLY on the context provided below. Do not answer any questions outside of this context. If a question cannot be answered with this information, politely say so.
     Context: [Entire content of school-context.md]...
     User's Question: [User's message]
     ```
  4. Send this prompt to the Gemini API, using the API key from server-side environment variables.
  5. Stream the response back to the frontend for a real-time typing effect.
  
- **Security**: The Gemini API Key MUST be stored in server-side environment variables (`.env.local`) and must never be exposed to the client-side.

### 4.3. Admin Dashboard (Backend/Protected Routes)

- **Authentication**: All routes under the `/dashboard` path will be protected by Better Auth. An administrator must log in to gain access.
- **Content Management System (CMS)**:
  - **Staff (GTK/TENDIK)**: Full CRUD (Create, Read, Update, Delete) functionality for teacher and staff data.
  - **Departments**: Admins can edit the description, curriculum, and photos for each department (TKJ, TSM, TKR).
  - **Static Pages**: Admins can edit the content for "Headmaster's Welcome," "About Us," and "HUBIN."
  - **Our Applications**: Full CRUD functionality for the list of school applications.
  - **Contact Monitoring**:  
    A dedicated page within the dashboard to view all messages submitted through the contact form.
    Functionality to mark messages as "Read" or "Unread."

## 5. User Flows

### 5.1. Visitor / Prospective Student

1. Arrives at the website's homepage.
2. Explores Departments: Clicks Departments -> Computer and Network Engineering -> Reads the department's description, facilities, and career prospects.
3. Asks a Question: Clicks the chatbot icon.
4. Types: "When does the new student registration open?"
5. Receives Answer: The AI chatbot provides a direct answer based on its prepared context.
6. Makes Manual Contact: Navigates to the Contact page -> Fills out the form -> Submits a message.

### 5.2. School Administrator

1. Navigates to yourdomain.com/dashboard.
2. Logs In: Is redirected to the login page (handled by Better Auth) -> Enters their credentials.
3. Accesses Dashboard: Upon successful login, is redirected to the main dashboard view.
4. Checks Messages: Clicks Contact Submissions in the sidebar -> Sees a list of all incoming messages -> Reads a new message and marks it as "Read."
5. Updates Staff: Clicks Staff -> Teachers -> Finds a teacher who is no longer working at the school -> Clicks Delete to remove their record.
6. Logs Out: Clicks the Logout button.

## 6. Database Schema (Drizzle ORM)

This is a proposed Drizzle schema for the Postgres database. The schema for users, sessions, etc., is assumed to be handled by the Better Auth package.

**File**: `src/db/schema.ts`

```typescript
import { pgTable, text, varchar, timestamp, serial, boolean, primaryKey } from 'drizzle-orm/pg-core';

/**
 * Table for static pages with editable content.
 * (e.g., Headmaster's Welcome, About Us, HUBIN)
 */
export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 50 }).unique().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

/**
 * Table for Academic Departments (Kompetensi Keahlian).
 */
export const departments = pgTable('departments', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 50 }).unique().notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description').notNull(),
  imageUrl: varchar('image_url', { length: 255 }),
});

/**
 * Table for Teachers and Educational Staff (GTK/TENDIK).
 */
export const staff = pgTable('staff', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  position: varchar('position', { length: 100 }),
  category: varchar('category', { length: 50, enum: ['teacher', 'educator'] }).notNull().default('teacher'),
  imageUrl: varchar('image_url', { length: 255 }),
  displayOrder: serial('display_order'),
});

/**
 * Table for "Our Applications".
 */
export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  url: varchar('url', { length: 255 }).notNull(),
  iconUrl: varchar('icon_url', { length: 255 }),
});

/**
 * Table to store submissions from the contact form.
 */
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
````

## 7. Further Considerations

* **Performance & Optimization**: With Next.js, we must leverage server-side caching and use the `next/image` component for all images to ensure optimal loading times, which is critical for a school website that may be rich with photos.
* **AI Context Maintenance**: The biggest challenge with the chatbot will be keeping its context (`school-context.md`) up-to-date. A future enhancement could be an "Update AI Context" button in the Admin Dashboard that programmatically pulls the latest information from the database and overwrites the context file.
* **SPMB Page (Admissions)**: This specification assumes the SPMB page is for informational purposes. If it needs to be a dynamic online registration system, additional database tables (e.g., `spmb_registrations`) and corresponding logic would be required.

```
