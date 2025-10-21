# 📘 Panduan Singkat - Website SMK Bina Mandiri

Panduan cepat dalam Bahasa Indonesia untuk memulai website SMK Bina Mandiri.

## 🎯 Apa yang Sudah Dibuat?

Website lengkap untuk SMK Bina Mandiri dengan fitur:
- ✅ Website publik (Homepage, Jurusan, PPDB, Kontak, dll)
- ✅ Chatbot AI (menjawab pertanyaan tentang sekolah)
- ✅ Dashboard Admin (kelola konten website)
- ✅ Sistem Login (untuk admin)

## 🚀 Cara Memulai

### 1. Persiapan

Yang Anda butuhkan:
- Komputer dengan Node.js terinstall
- Database PostgreSQL
- API Key dari Google Gemini (gratis)

### 2. Install

```bash
# Download dependencies
npm install
```

### 3. Setup Database

```bash
# Jalankan PostgreSQL (pakai Docker)
npm run db:up

# Buat tabel database
npm run db:generate
npm run db:push

# Isi data awal
npm run db:seed
```

### 4. Konfigurasi

Copy file `.env.example` jadi `.env`, lalu isi:

```env
# Database (sudah benar jika pakai Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres

# Secret untuk keamanan (isi apa saja, minimal 32 karakter)
BETTER_AUTH_SECRET=masukkan_string_random_panjang_disini

# URL website (untuk development)
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# API Key Gemini (untuk chatbot)
GOOGLE_AI_API_KEY=masukkan_api_key_gemini_disini
```

**Cara dapat API Key Gemini:**
1. Buka https://makersuite.google.com/app/apikey
2. Login dengan akun Google
3. Klik "Create API Key"
4. Copy dan paste ke file `.env`

### 5. Jalankan Website

```bash
npm run dev
```

Buka browser ke: http://localhost:3000

## 📱 Cara Menggunakan

### Website Publik

1. **Homepage** - http://localhost:3000
   - Informasi umum sekolah
   - Preview jurusan
   - Call to action

2. **Tentang** - http://localhost:3000/about
   - Profil sekolah
   - Visi & Misi
   - Fasilitas

3. **Jurusan** - http://localhost:3000/departments
   - TKJ (Teknik Komputer dan Jaringan)
   - TSM (Teknik Sepeda Motor)
   - TKR (Teknik Kendaraan Ringan)

4. **PPDB** - http://localhost:3000/spmb
   - Informasi pendaftaran siswa baru
   - Persyaratan
   - Jadwal & biaya

5. **Kontak** - http://localhost:3000/contact
   - Form untuk menghubungi sekolah
   - Informasi kontak

6. **Chatbot** (icon di kanan bawah)
   - Klik icon chat
   - Tanya apa saja tentang sekolah
   - AI akan jawab otomatis

### Dashboard Admin

1. **Daftar Admin** - http://localhost:3000/sign-up
   - Buat akun admin pertama
   - Isi email dan password

2. **Login** - http://localhost:3000/sign-in
   - Login dengan akun yang sudah dibuat

3. **Dashboard** - http://localhost:3000/dashboard
   - Lihat statistik
   - Kelola konten

4. **Menu Dashboard:**
   - **Staff** - Kelola data guru dan karyawan
   - **Jurusan** - Edit informasi jurusan
   - **Halaman** - Edit halaman statis (Sambutan Kepala Sekolah, dll)
   - **Aplikasi** - Kelola daftar aplikasi sekolah
   - **Pesan Kontak** - Lihat pesan dari form kontak

## 🎨 Cara Mengubah Konten

### 1. Update Informasi Chatbot

Edit file: `lib/school-context.md`

Isi dengan informasi lengkap tentang sekolah. Chatbot akan menggunakan informasi ini untuk menjawab pertanyaan.

### 2. Update Konten via Dashboard

Setelah login ke dashboard:
- Tambah/edit data staff
- Update informasi jurusan
- Edit halaman statis
- Tambah aplikasi sekolah

### 3. Ubah Warna Tema

Edit file: `app/globals.css`

Cari bagian `:root` dan ubah warna sesuai keinginan.

## 🌐 Cara Deploy ke Internet

### Opsi 1: Vercel (Paling Mudah)

1. Push code ke GitHub
2. Buka https://vercel.com
3. Import project dari GitHub
4. Tambahkan environment variables
5. Deploy!

### Opsi 2: Platform Lain

- Railway: https://railway.app
- Netlify: https://netlify.com
- Hosting sendiri (VPS)

Lihat file `DEPLOYMENT.md` untuk panduan lengkap.

## 📊 Struktur Folder

```
SMK-BINA-MANDIRI-K-/
├── app/                    # Halaman website
│   ├── (public)/          # Halaman publik
│   ├── dashboard/         # Dashboard admin
│   └── api/              # API backend
├── components/            # Komponen UI
├── db/                   # Database
│   ├── schema/           # Struktur database
│   └── seed.ts           # Data awal
├── lib/                  # Utilities
│   └── school-context.md # Pengetahuan chatbot
└── .env                  # Konfigurasi (buat sendiri)
```

## ❓ Troubleshooting

### Website tidak bisa dibuka?

```bash
# Cek apakah ada error di terminal
# Pastikan port 3000 tidak dipakai aplikasi lain
```

### Database error?

```bash
# Pastikan PostgreSQL jalan
npm run db:up

# Cek file .env, pastikan DATABASE_URL benar
```

### Chatbot tidak merespon?

- Pastikan `GOOGLE_AI_API_KEY` sudah diisi di `.env`
- Restart server: Ctrl+C lalu `npm run dev` lagi

### Tidak bisa login?

- Pastikan sudah daftar di `/sign-up` dulu
- Cek email dan password benar
- Cek database sudah di-setup

## 📞 Butuh Bantuan?

1. Baca dokumentasi lengkap:
   - `README_SMK.md` - Dokumentasi utama
   - `SETUP_GUIDE.md` - Panduan setup detail
   - `FEATURES.md` - Daftar fitur

2. Cek error message di:
   - Terminal (tempat jalankan `npm run dev`)
   - Browser Console (F12 → Console)

3. Lihat checklist: `CHECKLIST.md`

## 🎯 Langkah Selanjutnya

Setelah website jalan:

1. **Isi Konten**
   - Update `school-context.md` dengan info sekolah lengkap
   - Tambah data staff via dashboard
   - Update info jurusan
   - Tambah aplikasi sekolah

2. **Customisasi**
   - Ganti logo sekolah
   - Ubah warna tema
   - Tambah foto-foto

3. **Deploy**
   - Push ke GitHub
   - Deploy ke Vercel
   - Setup domain custom

4. **Maintenance**
   - Update konten berkala
   - Cek pesan kontak
   - Monitor chatbot

## ✅ Checklist Cepat

- [ ] Install dependencies (`npm install`)
- [ ] Setup database (`npm run db:up`, `npm run db:push`, `npm run db:seed`)
- [ ] Buat file `.env` dan isi konfigurasi
- [ ] Jalankan website (`npm run dev`)
- [ ] Buka http://localhost:3000
- [ ] Test semua halaman
- [ ] Test chatbot
- [ ] Daftar admin di `/sign-up`
- [ ] Login dan test dashboard
- [ ] Update konten sesuai kebutuhan
- [ ] Deploy ke internet

## 🎉 Selamat!

Website SMK Bina Mandiri Anda sudah siap digunakan!

Untuk pertanyaan lebih lanjut, lihat dokumentasi lengkap atau hubungi developer.

---

**Dibuat dengan**: Next.js, TypeScript, Tailwind CSS, Shadcn/ui
**AI Chatbot**: Google Gemini
**Database**: PostgreSQL + Drizzle ORM
**Auth**: Better Auth
