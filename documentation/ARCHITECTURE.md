# 🏗️ Architecture - SMK Bina Mandiri Website

Dokumentasi arsitektur teknis website SMK Bina Mandiri.

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
├─────────────────────────────────────────────────────────────┤
│  Browser (Desktop/Mobile/Tablet)                            │
│  - React Components                                          │
│  - Tailwind CSS                                              │
│  - Dark/Light Mode                                           │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTPS
┌─────────────────────────────────────────────────────────────┐
│                      Next.js 15 App Router                   │
├─────────────────────────────────────────────────────────────┤
│  Public Routes          │  Protected Routes                  │
│  - Homepage             │  - Dashboard                       │
│  - Departments          │  - Staff Management                │
│  - PPDB                 │  - Content Management              │
│  - Contact              │  - Contact Monitor                 │
│  - About                │                                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      API Layer (Next.js)                     │
├─────────────────────────────────────────────────────────────┤
│  /api/chat              │  AI Chatbot Endpoint               │
│  /api/contact           │  Contact Form Submission           │
│  /api/auth/[...all]     │  Better Auth Endpoints             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────┬──────────────────────────────────────┐
│   External Services  │         Database Layer               │
├──────────────────────┼──────────────────────────────────────┤
│  Google Gemini API   │  PostgreSQL                          │
│  - AI Responses      │  - User Data                         │
│  - Context-aware     │  - School Content                    │
│                      │  - Contact Submissions               │
└──────────────────────┴──────────────────────────────────────┘
```

## 🎯 Application Layers

### 1. Presentation Layer (Frontend)

**Technology**: React 19, Next.js 15 App Router

**Components**:
- **Public Components**: Homepage, Departments, Contact, etc.
- **Admin Components**: Dashboard, CRUD interfaces
- **Shared Components**: Header, Footer, Chatbot, UI components

**State Management**:
- React Hooks (useState, useEffect)
- Server Components (default)
- Client Components (when needed)

**Styling**:
- Tailwind CSS
- Shadcn/ui components
- CSS Variables for theming

### 2. Application Layer (Backend)

**Technology**: Next.js API Routes, Server Actions

**API Routes**:
```
/api/chat          → POST  → Chatbot interaction
/api/contact       → POST  → Contact form submission
/api/auth/[...all] → *     → Authentication endpoints
```

**Server Components**:
- Data fetching from database
- Server-side rendering
- Static generation

### 3. Business Logic Layer

**Authentication**:
- Better Auth
- Email/Password strategy
- Session management
- Middleware protection

**AI Integration**:
- Google Gemini API
- RAG (Retrieval-Augmented Generation)
- Context from `school-context.md`
- Server-side processing

**Data Management**:
- Drizzle ORM
- Type-safe queries
- Migrations
- Seeding

### 4. Data Layer

**Database**: PostgreSQL

**Schema Design**:

```sql
-- Authentication Tables (Better Auth)
user
  ├── id (PK)
  ├── email (unique)
  ├── name
  └── ...

session
  ├── id (PK)
  ├── userId (FK → user)
  └── ...

-- School Data Tables
departments
  ├── id (PK)
  ├── slug (unique)
  ├── name
  └── description

staff
  ├── id (PK)
  ├── name
  ├── position
  ├── category
  └── displayOrder

pages
  ├── id (PK)
  ├── slug (unique)
  ├── title
  └── content

applications
  ├── id (PK)
  ├── name
  ├── url
  └── description

contact_submissions
  ├── id (PK)
  ├── name
  ├── email
  ├── message
  ├── isRead
  └── createdAt
```

## 🔄 Data Flow

### Public Website Flow

```
User Request
    ↓
Next.js Router
    ↓
Server Component (SSG/ISR)
    ↓
Database Query (Drizzle)
    ↓
PostgreSQL
    ↓
Data Response
    ↓
React Component Render
    ↓
HTML to Browser
```

### Chatbot Flow

```
User Message
    ↓
Chatbot Component (Client)
    ↓
POST /api/chat
    ↓
Read school-context.md
    ↓
Build Prompt with Context
    ↓
Google Gemini API
    ↓
AI Response
    ↓
JSON Response
    ↓
Display in Chat UI
```

### Contact Form Flow

```
User Fills Form
    ↓
Form Validation (Client)
    ↓
POST /api/contact
    ↓
Server Validation
    ↓
Insert to Database (Drizzle)
    ↓
PostgreSQL
    ↓
Success Response
    ↓
Toast Notification
```

### Authentication Flow

```
User Login
    ↓
POST /api/auth/sign-in
    ↓
Better Auth Validation
    ↓
Check Database
    ↓
Create Session
    ↓
Set Cookie
    ↓
Redirect to Dashboard
    ↓
Middleware Check
    ↓
Allow Access
```

## 🔐 Security Architecture

### Authentication & Authorization

```
Request to /dashboard/*
    ↓
Middleware (middleware.ts)
    ↓
Check Session Cookie
    ↓
Valid? → Allow Access
    ↓
Invalid? → Redirect to /sign-in
```

**Security Measures**:
- ✅ Session-based authentication
- ✅ HTTP-only cookies
- ✅ CSRF protection (Better Auth)
- ✅ Password hashing (Better Auth)
- ✅ Protected API routes
- ✅ Environment variable protection

### API Security

```
API Request
    ↓
Rate Limiting (optional)
    ↓
Authentication Check
    ↓
Input Validation
    ↓
Sanitization
    ↓
Database Query (Parameterized)
    ↓
Response
```

**Protection Against**:
- ✅ SQL Injection (Drizzle ORM)
- ✅ XSS (React escaping)
- ✅ CSRF (Better Auth)
- ✅ Exposed secrets (env vars)

## 🚀 Performance Architecture

### Rendering Strategy

**Static Generation (SSG)**:
- Homepage
- About page
- Department list
- Department details (3 pages)

**Server-Side Rendering (SSR)**:
- Dashboard pages (dynamic data)
- Contact submissions

**Client-Side Rendering (CSR)**:
- Chatbot (interactive)
- Forms (validation)
- Theme toggle

### Caching Strategy

```
Request
    ↓
CDN Cache (Vercel Edge)
    ↓
Hit? → Return Cached
    ↓
Miss? → Next.js Cache
    ↓
Hit? → Return Cached
    ↓
Miss? → Generate & Cache
```

**Cache Levels**:
1. CDN (Vercel Edge Network)
2. Next.js Static Cache
3. Database Query Cache (optional)

### Optimization Techniques

- ✅ Code splitting (automatic)
- ✅ Image optimization (next/image)
- ✅ Font optimization (next/font)
- ✅ Tree shaking
- ✅ Minification
- ✅ Compression (gzip/brotli)

## 📦 Deployment Architecture

### Development

```
Local Machine
    ↓
npm run dev
    ↓
Next.js Dev Server (Turbopack)
    ↓
Hot Module Replacement
    ↓
Local PostgreSQL (Docker)
```

### Production (Vercel)

```
GitHub Repository
    ↓
Push to main branch
    ↓
Vercel Build
    ↓
Next.js Build (Turbopack)
    ↓
Deploy to Edge Network
    ↓
Connect to Database
    ↓
Live Website
```

**Infrastructure**:
- **Frontend**: Vercel Edge Network (Global CDN)
- **Backend**: Vercel Serverless Functions
- **Database**: PostgreSQL (Vercel/Supabase/Neon)
- **AI**: Google Gemini API (External)

## 🔌 Integration Architecture

### External Services

**Google Gemini API**:
```
Website → API Route → Gemini API → Response
```

**Better Auth**:
```
Website → Better Auth → Database → Session
```

**Database (Drizzle ORM)**:
```
Application → Drizzle → PostgreSQL → Data
```

## 📊 Monitoring & Logging

### Error Tracking

```
Error Occurs
    ↓
Catch in try/catch
    ↓
Log to Console (dev)
    ↓
Send to Sentry (prod)
    ↓
Alert Developer
```

### Analytics

```
User Action
    ↓
Track Event
    ↓
Send to Analytics Service
    ↓
Dashboard Visualization
```

## 🔄 CI/CD Pipeline

```
Code Change
    ↓
Git Commit
    ↓
Push to GitHub
    ↓
GitHub Actions (optional)
    ├── Run Tests
    ├── Lint Code
    └── Type Check
    ↓
Vercel Webhook
    ↓
Build & Deploy
    ↓
Preview URL (PR)
    ↓
Merge to main
    ↓
Production Deploy
```

## 🎯 Scalability Considerations

### Horizontal Scaling

- ✅ Stateless serverless functions
- ✅ CDN for static assets
- ✅ Database connection pooling
- ✅ API rate limiting

### Vertical Scaling

- ✅ Database optimization
- ✅ Query indexing
- ✅ Caching strategies
- ✅ Code optimization

### Future Scaling

- Add Redis for caching
- Implement queue system
- Microservices architecture
- Load balancing

## 📝 Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 19 | UI Components |
| Framework | Next.js 15 | Full-stack framework |
| Styling | Tailwind CSS | Utility-first CSS |
| UI Components | Shadcn/ui | Pre-built components |
| Database | PostgreSQL | Relational database |
| ORM | Drizzle | Type-safe queries |
| Auth | Better Auth | Authentication |
| AI | Google Gemini | Chatbot responses |
| Language | TypeScript | Type safety |
| Deployment | Vercel | Hosting & CDN |

## 🔮 Future Architecture Enhancements

### Phase 2
- Redis caching layer
- Image upload service (S3/Cloudinary)
- Email service (SendGrid/Resend)
- Search engine (Algolia/Meilisearch)

### Phase 3
- Microservices architecture
- GraphQL API
- Real-time features (WebSocket)
- Mobile app (React Native)

### Phase 4
- Multi-tenant architecture
- Advanced analytics
- Machine learning integration
- Blockchain integration (certificates)

---

**Architecture Version**: 1.0
**Last Updated**: October 21, 2025
**Next Review**: After Phase 2 implementation
