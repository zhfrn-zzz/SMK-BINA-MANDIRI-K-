# 🚀 Quick Start Guide - SMK Bina Mandiri

## ⚡ Setup dalam 5 Menit

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Pastikan file `.env` sudah terisi dengan benar:
```env
DATABASE_URL="your-supabase-connection-string"
GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-api-key"
# ... other variables
```

### 3. Setup Database
```bash
# Push schema ke database
npm run db:push

# Isi database dengan data awal
npx tsx db/seed-initial-data.ts
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Akses Website
- **Public Website:** http://localhost:3000
- **Admin Dashboard:** http://localhost:3000/dashboard

---

## 📄 Halaman yang Tersedia

### Public Pages (Sudah Siap! ✅)

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | ✅ Complete |
| Tentang | `/about` | ✅ Complete |
| Kepala Sekolah | `/about/headmaster` | ✅ Complete |
| HUBIN | `/about/hubin` | ✅ Complete |
| Jurusan | `/departments` | ✅ Complete |
| TKJ | `/departments/tkj` | ✅ Complete |
| TSM | `/departments/tsm` | ✅ Complete |
| TKR | `/departments/tkr` | ✅ Complete |
| PPDB | `/spmb` | ✅ Complete |
| Kontak | `/contact` | ✅ Complete |

### Dashboard Pages

| Page | URL | Fungsi |
|------|-----|--------|
| Dashboard | `/dashboard` | Overview & statistik |
| Staff | `/dashboard/staff` | Kelola guru & staff |
| Jurusan | `/dashboard/departments` | Kelola info jurusan |
| Halaman | `/dashboard/pages` | Edit halaman statis |
| Aplikasi | `/dashboard/applications` | Kelola aplikasi |
| Pesan | `/dashboard/contacts` | Lihat pesan kontak |

---

## 🎯 Langkah Selanjutnya

### Untuk Menggunakan Dashboard:

1. **Login ke Dashboard**
   ```
   URL: http://localhost:3000/dashboard
   ```

2. **Isi Data Awal** (Jika belum)
   ```bash
   npx tsx db/seed-initial-data.ts
   ```

3. **Edit Konten Halaman**
   - Klik menu "Halaman" di sidebar
   - Pilih halaman yang ingin diedit
   - Update konten
   - Simpan

4. **Upload Gambar**
   - Edit jurusan untuk upload gambar header
   - Edit staff untuk upload foto
   - Gambar akan ditampilkan di website public

5. **Test Form Kontak**
   - Buka `/contact` di website public
   - Isi dan kirim form
   - Cek pesan di dashboard `/dashboard/contacts`

---

## 🎨 Fitur Utama

### Design Features:
- ✅ Particles background (interactive)
- ✅ Gradient animated cards
- ✅ Smooth scroll animations
- ✅ Dark/Light mode toggle
- ✅ Fully responsive
- ✅ Modern UI components

### Functional Features:
- ✅ Admin dashboard
- ✅ Content management
- ✅ Contact form
- ✅ AI Chatbot (Gemini)
- ✅ Database integration
- ✅ Image upload support

---

## 📚 Dokumentasi Lengkap

Untuk informasi lebih detail, lihat:

- **`documentation/DASHBOARD_GUIDE.md`** - Panduan lengkap dashboard
- **`documentation/PAGES_REDESIGN.md`** - Detail setiap halaman
- **`documentation/IMPLEMENTATION_SUMMARY.md`** - Technical summary
- **`PAGES_COMPLETE.md`** - Quick reference

---

## 🔧 Commands Penting

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Database
npm run db:push          # Push schema to database
npm run db:studio        # Open Drizzle Studio
npx tsx db/seed-initial-data.ts  # Seed initial data

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript
```

---

## ⚠️ Troubleshooting

### Dashboard Kosong?
```bash
# Run seeder untuk isi data awal
npx tsx db/seed-initial-data.ts
```

### Database Error?
```bash
# Cek koneksi database
npm run db:studio

# Push schema lagi
npm run db:push
```

### Build Error?
```bash
# Clear cache dan rebuild
rm -rf .next
npm run build
```

---

## ✅ Checklist

- [ ] Install dependencies
- [ ] Setup `.env` file
- [ ] Push database schema
- [ ] Run seeder script
- [ ] Start dev server
- [ ] Login ke dashboard
- [ ] Edit konten halaman
- [ ] Test form kontak
- [ ] Upload gambar
- [ ] Preview website

---

## 🎉 Selesai!

Website SMK Bina Mandiri siap digunakan! 

**Next Steps:**
1. Customize konten sesuai kebutuhan
2. Upload gambar-gambar asli
3. Update informasi kontak
4. Test semua fitur
5. Deploy ke production

---

**Need Help?** Check `documentation/DASHBOARD_GUIDE.md` untuk panduan lengkap!
