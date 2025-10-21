# 🚀 Setup Guide - SMK Bina Mandiri Website

Panduan lengkap untuk setup dan menjalankan website SMK Bina Mandiri.

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- Node.js 18 atau lebih baru
- PostgreSQL database
- Git

## 🔧 Step-by-Step Setup

### 1. Clone & Install

```bash
# Clone repository
git clone <repository-url>
cd SMK-BINA-MANDIRI-K-

# Install dependencies
npm install
```

### 2. Setup Database

#### Opsi A: Menggunakan Docker (Recommended)

```bash
# Start PostgreSQL container
npm run db:up

# Database akan berjalan di:
# Host: localhost
# Port: 5433
# Database: postgres
# User: postgres
# Password: postgres
```

#### Opsi B: PostgreSQL Lokal

Jika Anda sudah punya PostgreSQL terinstall, buat database baru:

```sql
CREATE DATABASE smk_bina_mandiri;
```

### 3. Setup Environment Variables

```bash
# Copy file .env.example
cp .env.example .env
```

Edit file `.env` dan sesuaikan dengan konfigurasi Anda:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres

# Better Auth
BETTER_AUTH_SECRET=generate_random_secret_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google AI (Gemini)
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

**Cara mendapatkan Google AI API Key:**
1. Kunjungi https://makersuite.google.com/app/apikey
2. Login dengan Google Account
3. Klik "Create API Key"
4. Copy API key dan paste ke `.env`

**Generate BETTER_AUTH_SECRET:**
```bash
# Di terminal, jalankan:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Setup Database Schema

```bash
# Generate Drizzle schema
npm run db:generate

# Push schema ke database
npm run db:push

# Seed data awal (jurusan, halaman, staff contoh)
npm run db:seed
```

### 5. Buat Admin User

Untuk membuat user admin pertama, Anda bisa:

#### Opsi A: Menggunakan Sign Up Page

1. Jalankan development server: `npm run dev`
2. Buka http://localhost:3000/sign-up
3. Daftar dengan email dan password
4. User akan otomatis dibuat di database

#### Opsi B: Langsung ke Database

```sql
-- Jalankan di PostgreSQL
INSERT INTO "user" (id, name, email, email_verified, created_at, updated_at)
VALUES (
  'admin-1',
  'Admin',
  'admin@smkbinamandiri.sch.id',
  true,
  NOW(),
  NOW()
);

-- Kemudian gunakan sign-in page untuk set password
```

### 6. Run Development Server

```bash
npm run dev
```

Website akan berjalan di:
- Public Website: http://localhost:3000
- Admin Dashboard: http://localhost:3000/dashboard
- Sign In: http://localhost:3000/sign-in

## 🎯 Testing

### Test Public Website

1. Buka http://localhost:3000
2. Navigasi ke halaman Jurusan, PPDB, Kontak
3. Test AI Chatbot (klik icon chat di kanan bawah)
4. Isi form kontak dan submit

### Test Admin Dashboard

1. Login di http://localhost:3000/sign-in
2. Setelah login, akan redirect ke /dashboard
3. Test menu:
   - Staff: Lihat, tambah, edit data staff
   - Jurusan: Edit informasi jurusan
   - Halaman: Edit konten halaman statis
   - Aplikasi: Kelola aplikasi sekolah
   - Pesan Kontak: Lihat pesan dari form kontak

## 🔍 Troubleshooting

### Database Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:5433
```

**Solusi:**
- Pastikan PostgreSQL berjalan: `npm run db:up`
- Cek DATABASE_URL di `.env` sudah benar
- Test koneksi: `psql -h localhost -p 5433 -U postgres`

### Chatbot Tidak Merespon

```
Error: Failed to process chat request
```

**Solusi:**
- Pastikan GOOGLE_AI_API_KEY sudah diisi di `.env`
- Cek API key valid di https://makersuite.google.com
- Restart development server

### Auth Error

```
Error: BETTER_AUTH_SECRET is not defined
```

**Solusi:**
- Generate secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- Paste ke `.env` sebagai BETTER_AUTH_SECRET
- Restart development server

### Port Already in Use

```
Error: Port 3000 is already in use
```

**Solusi:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

## 📊 Database Management

### Drizzle Studio

Untuk melihat dan edit data database dengan GUI:

```bash
npm run db:studio
```

Buka https://local.drizzle.studio

### Reset Database

Jika ingin reset database dari awal:

```bash
# Drop semua table dan push ulang
npm run db:reset

# Seed ulang data
npm run db:seed
```

## 🚀 Production Deployment

### Deploy ke Vercel

1. Push code ke GitHub
2. Import project di https://vercel.com
3. Set Environment Variables di Vercel:
   - DATABASE_URL
   - BETTER_AUTH_SECRET
   - BETTER_AUTH_URL (https://yourdomain.com)
   - NEXT_PUBLIC_BETTER_AUTH_URL (https://yourdomain.com)
   - GOOGLE_AI_API_KEY
4. Deploy!

### Database Production

Gunakan salah satu:
- **Vercel Postgres** (terintegrasi dengan Vercel)
- **Supabase** (free tier available)
- **Neon** (serverless PostgreSQL)
- **Railway** (easy deployment)

## 📝 Next Steps

Setelah setup berhasil:

1. **Update Konten**
   - Edit `lib/school-context.md` untuk update knowledge base chatbot
   - Tambah data staff, jurusan, aplikasi via dashboard

2. **Customization**
   - Update logo dan branding
   - Sesuaikan warna tema di `app/globals.css`
   - Tambah halaman baru sesuai kebutuhan

3. **Production Ready**
   - Setup domain custom
   - Configure SSL/HTTPS
   - Setup backup database
   - Monitor performance

## 🆘 Need Help?

Jika mengalami masalah:
1. Cek dokumentasi di README_SMK.md
2. Lihat error message di terminal
3. Cek browser console untuk error frontend
4. Hubungi developer

---

Happy coding! 🎉
