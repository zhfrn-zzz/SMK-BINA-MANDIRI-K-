import { pgTable, text, varchar, timestamp, serial, boolean } from 'drizzle-orm/pg-core';

/**
 * Table for static pages with editable content.
 * (e.g., Headmaster's Welcome, About Us, HUBIN)
 */
export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 50 }).unique().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
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
  category: varchar('category', { length: 50 }).notNull().default('teacher'),
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
