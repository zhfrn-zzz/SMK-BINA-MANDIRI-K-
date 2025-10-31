# 📚 Dashboard Guide - SMK Bina Mandiri

## 🚀 Getting Started

### 1. Setup Database dengan Data Awal

Sebelum menggunakan dashboard, Anda perlu mengisi database dengan data awal:

```bash
# Run the seeder script
npx tsx db/seed-initial-data.ts
```

Script ini akan mengisi database dengan:
- ✅ 3 halaman statis (Sambutan Kepala Sekolah, Tentang, HUBIN)
- ✅ 3 jurusan (TKJ, TSM, TKR)
- ✅ 5 staff/guru sample
- ✅ 3 aplikasi sample

### 2. Akses Dashboard

1. Buka browser dan navigasi ke: `http://localhost:3000/dashboard`
2. Login dengan akun admin Anda
3. Dashboard akan menampilkan overview dan statistik

---

## 📄 Mengelola Halaman Statis

### Halaman yang Tersedia:

1. **Sambutan Kepala Sekolah** (`/about/headmaster`)
2. **Tentang SMK Bina Mandiri** (`/about`)
3. **Hubungan Industri** (`/about/hubin`)

### Cara Edit Halaman:

1. Klik menu **"Halaman"** di sidebar
2. Pilih halaman yang ingin diedit
3. Klik tombol **"Edit"**
4. Update konten di textarea
5. Klik **"Simpan Perubahan"**

### Tips Editing:
- Gunakan line breaks untuk paragraf baru
- Format teks akan dipertahankan
- Preview halaman dengan klik "Lihat"

---

## 🎓 Mengelola Jurusan

### Jurusan yang Tersedia:

1. **TKJ** - Teknik Komputer dan Jaringan
2. **TSM** - Teknik Sepeda Motor
3. **TKR** - Teknik Kendaraan Ringan

### Cara Edit Jurusan:

1. Klik menu **"Jurusan"** di sidebar
2. Pilih jurusan yang ingin diedit
3. Update informasi:
   - Nama jurusan
   - Deskripsi
   - Upload gambar (optional)
4. Simpan perubahan

### Informasi yang Bisa Diedit:
- Nama jurusan
- Deskripsi singkat
- Gambar header jurusan
- Fasilitas
- Kompetensi yang dipelajari

---

## 👥 Mengelola Staff & Guru

### Kategori Staff:

- **Leadership** - Kepala Sekolah, Wakil Kepala Sekolah
- **Teacher** - Guru mata pelajaran
- **Staff** - Tenaga kependidikan

### Cara Mengelola Staff:

1. Klik menu **"Staff"** di sidebar
2. Lihat daftar staff yang ada
3. Untuk menambah staff baru:
   - Klik "Tambah Staff"
   - Isi form (nama, posisi, kategori)
   - Upload foto (optional)
   - Simpan
4. Untuk edit/hapus:
   - Klik tombol edit/hapus pada card staff

---

## 📱 Mengelola Aplikasi

### Aplikasi yang Tersedia:

- Portal Siswa
- E-Learning
- Perpustakaan Digital

### Cara Mengelola Aplikasi:

1. Klik menu **"Aplikasi"** di sidebar
2. Tambah aplikasi baru atau edit yang ada
3. Isi informasi:
   - Nama aplikasi
   - Deskripsi
   - URL/Link
   - Icon (optional)

---

## 💬 Mengelola Pesan Kontak

### Fitur Pesan Kontak:

- Lihat semua pesan dari form kontak
- Filter pesan (baru/sudah dibaca)
- Tandai sebagai sudah dibaca
- Hapus pesan

### Cara Menggunakan:

1. Klik menu **"Pesan Kontak"** di sidebar
2. Lihat daftar pesan masuk
3. Pesan baru ditandai dengan badge "Baru"
4. Klik pesan untuk melihat detail
5. Tandai sebagai sudah dibaca

---

## 🎨 Struktur Dashboard

### Menu Sidebar:

```
📊 Dashboard          - Overview & statistik
👥 Staff              - Kelola guru & staff
🎓 Jurusan            - Kelola informasi jurusan
📄 Halaman            - Edit halaman statis
📱 Aplikasi           - Kelola aplikasi sekolah
💬 Pesan Kontak       - Lihat pesan dari website
🌐 Lihat Website      - Preview website public
```

---

## 🔧 Troubleshooting

### Dashboard Kosong / Tidak Ada Data

**Solusi:**
```bash
# Run seeder untuk mengisi data awal
npx tsx db/seed-initial-data.ts
```

### Sidebar Tidak Bisa Diklik

**Kemungkinan Penyebab:**
1. Session belum login
2. Database belum terkoneksi
3. Route tidak ditemukan

**Solusi:**
1. Pastikan sudah login
2. Cek koneksi database di `.env`
3. Restart development server

### Error Saat Menyimpan

**Solusi:**
1. Cek koneksi database
2. Pastikan semua field required terisi
3. Lihat console untuk error detail

---

## 📊 Database Schema

### Tables:

1. **pages** - Halaman statis
   - id, slug, title, content, updatedAt

2. **departments** - Jurusan
   - id, slug, name, description, imageUrl

3. **staff** - Guru & Staff
   - id, name, position, category, imageUrl, displayOrder

4. **applications** - Aplikasi
   - id, name, description, url, iconUrl

5. **contact_submissions** - Pesan Kontak
   - id, name, email, message, isRead, createdAt

---

## 🚀 Next Steps

### Setelah Setup Awal:

1. ✅ Edit konten halaman statis
2. ✅ Upload foto kepala sekolah
3. ✅ Update informasi jurusan
4. ✅ Tambah data guru & staff
5. ✅ Upload gambar untuk setiap jurusan
6. ✅ Test form kontak dari website
7. ✅ Customize aplikasi sesuai kebutuhan

### Fitur yang Bisa Ditambahkan:

- [ ] Upload multiple images untuk gallery
- [ ] Rich text editor untuk konten
- [ ] Drag & drop untuk reorder staff
- [ ] Export data ke Excel/PDF
- [ ] Backup & restore database
- [ ] User management (multiple admin)
- [ ] Activity log
- [ ] Analytics dashboard

---

## 📝 Tips & Best Practices

### Content Management:

1. **Backup Regularly** - Backup database sebelum edit besar
2. **Preview Before Save** - Selalu preview perubahan
3. **Use Descriptive Titles** - Judul yang jelas dan deskriptif
4. **Optimize Images** - Compress gambar sebelum upload
5. **Keep Content Updated** - Update konten secara berkala

### Security:

1. **Strong Passwords** - Gunakan password yang kuat
2. **Limit Access** - Berikan akses hanya ke admin terpercaya
3. **Regular Updates** - Update dependencies secara berkala
4. **Monitor Activity** - Pantau aktivitas admin

---

## 🆘 Need Help?

### Resources:

- **Documentation:** `/documentation` folder
- **API Docs:** Check `/app/api` folder
- **Schema:** Check `/db/schema` folder

### Common Issues:

1. **Database Connection Error**
   - Check `.env` file
   - Verify Supabase credentials
   - Test connection with `npm run db:studio`

2. **Build Errors**
   - Run `npm run build` to check
   - Fix TypeScript errors
   - Clear `.next` folder and rebuild

3. **Styling Issues**
   - Check Tailwind config
   - Verify component imports
   - Clear browser cache

---

## ✅ Checklist Setup Dashboard

- [ ] Run database seeder
- [ ] Login ke dashboard
- [ ] Edit halaman "Sambutan Kepala Sekolah"
- [ ] Edit halaman "Tentang"
- [ ] Edit halaman "HUBIN"
- [ ] Update informasi 3 jurusan
- [ ] Tambah/edit data staff
- [ ] Test form kontak
- [ ] Upload gambar-gambar
- [ ] Preview website public
- [ ] Backup database

---

**Last Updated:** 2024
**Version:** 1.0.0
