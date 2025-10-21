# SMK Bina Mandiri Website

Website resmi SMK Bina Mandiri dengan fitur AI Chatbot dan Admin Dashboard.

## 🚀 Fitur Utama

### Public Website
- **Homepage** dengan informasi sekolah
- **Halaman Jurusan** (TKJ, TSM, TKR) dengan detail lengkap
- **Halaman PPDB** untuk informasi pendaftaran siswa baru
- **Form Kontak** untuk komunikasi dengan sekolah
- **AI Chatbot** dengan Gemini API untuk menjawab pertanyaan seputar sekolah
- **Responsive Design** untuk semua perangkat

### Admin Dashboard
- **Manajemen Staff** - CRUD data guru dan tenaga kependidikan
- **Manajemen Jurusan** - Edit informasi kompetensi keahlian
- **Manajemen Halaman** - Edit konten halaman statis (Sambutan Kepala Sekolah, HUBIN, dll)
- **Manajemen Aplikasi** - Kelola daftar aplikasi sekolah
- **Monitor Kontak** - Lihat dan kelola pesan dari form kontak
- **Autentikasi** dengan Better Auth

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: Shadcn/ui + Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **AI**: Google Gemini API
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google AI API Key (untuk chatbot)

## 🔧 Setup & Installation

### 1. Clone Repository

```bash
git clone <repository-url>
cd SMK-BINA-MANDIRI-K-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` ke `.env` dan isi dengan konfigurasi Anda:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/smk_bina_mandiri

# Better Auth
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google AI (Gemini)
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

### 4. Setup Database

```bash
# Start PostgreSQL (jika menggunakan Docker)
npm run db:up

# Generate schema
npm run db:generate

# Push schema ke database
npm run db:push

# Seed data awal
npm run db:seed
```

### 5. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

```
├── app/
│   ├── (public)/          # Public pages (homepage, departments, contact, dll)
│   ├── dashboard/         # Admin dashboard pages
│   ├── api/              # API routes (chat, contact)
│   └── layout.tsx        # Root layout
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── chatbot.tsx       # AI Chatbot component
│   ├── public-header.tsx # Public website header
│   └── app-sidebar.tsx   # Dashboard sidebar
├── db/
│   ├── schema/           # Database schemas
│   │   ├── auth.ts       # Better Auth schema
│   │   └── school.ts     # School data schema
│   ├── index.ts          # Database connection
│   └── seed.ts           # Seed script
├── lib/
│   ├── auth.ts           # Better Auth configuration
│   ├── auth-client.ts    # Auth client utilities
│   └── school-context.md # AI Chatbot knowledge base
└── middleware.ts         # Route protection middleware
```

## 🎨 Theme Colors

Website menggunakan color palette khusus SMK Bina Mandiri:

- **Primary / Dark Background**: `#11235A`
- **Primary Action / Accent**: `#596FB7`
- **Muted / Secondary Background**: `#C6CF9B`
- **Highlight / Accent Light**: `#F6ECA9`

## 🤖 AI Chatbot

Chatbot menggunakan Google Gemini API dengan pendekatan RAG (Retrieval-Augmented Generation):

1. Konteks sekolah disimpan di `lib/school-context.md`
2. Saat user bertanya, konteks dibaca dan dikirim ke Gemini
3. Gemini menjawab HANYA berdasarkan konteks yang diberikan
4. Jawaban ditampilkan secara real-time

### Update Konteks Chatbot

Edit file `lib/school-context.md` untuk mengupdate informasi yang bisa dijawab chatbot.

## 🔐 Authentication

Website menggunakan Better Auth untuk autentikasi admin:

- Email & Password authentication
- Session management
- Protected routes dengan middleware

### Membuat Admin User

Gunakan Better Auth API atau database langsung untuk membuat user admin pertama.

## 📊 Database Schema

### Tables

- **pages** - Halaman statis (Sambutan Kepala Sekolah, HUBIN, dll)
- **departments** - Kompetensi keahlian (TKJ, TSM, TKR)
- **staff** - Data guru dan tenaga kependidikan
- **applications** - Aplikasi sekolah
- **contact_submissions** - Pesan dari form kontak
- **user, session, account, verification** - Better Auth tables

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di Vercel
3. Set environment variables
4. Deploy!

### Database Options

- Vercel Postgres
- Supabase
- Neon
- Railway

## 📝 Scripts

```bash
npm run dev          # Development server
npm run build        # Build production
npm run start        # Start production server
npm run db:generate  # Generate Drizzle schema
npm run db:push      # Push schema to database
npm run db:seed      # Seed initial data
npm run db:studio    # Open Drizzle Studio
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Untuk pertanyaan atau bantuan, silakan hubungi:
- Email: info@smkbinamandiri.sch.id
- Website: www.smkbinamandiri.sch.id
