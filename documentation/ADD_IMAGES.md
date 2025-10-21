# 📸 Cara Menambahkan Gambar

## 📁 Lokasi Gambar

Semua gambar disimpan di folder: `public/images/`

## 🖼️ Gambar yang Dibutuhkan

### 1. Foto Kepala Sekolah
**File:** `public/images/headmaster.jpg`  
**Ukuran:** 300x400px (atau rasio 3:4)  
**Format:** JPG atau PNG  
**Kualitas:** High resolution

**Cara Upload:**
1. Siapkan foto Kepala Sekolah
2. Rename menjadi `headmaster.jpg`
3. Copy ke folder `public/images/`
4. Refresh browser

**Jika tidak ada foto:**
- Placeholder otomatis muncul dengan text "Kepala Sekolah"
- Background biru tua (primary color)

---

### 2. Logo Sekolah (Optional)
**File:** `public/images/logo.png`  
**Ukuran:** 512x512px (square)  
**Format:** PNG dengan transparent background  
**Kualitas:** High resolution

**Penggunaan:**
- Header website
- Favicon
- Social media sharing

---

### 3. Gambar Jurusan (Optional)
**Files:**
- `public/images/departments/tkj.jpg`
- `public/images/departments/tsm.jpg`
- `public/images/departments/tkr.jpg`

**Ukuran:** 800x600px (atau rasio 4:3)  
**Format:** JPG atau PNG  
**Kualitas:** High resolution

**Konten:**
- Foto fasilitas jurusan
- Foto siswa praktik
- Foto peralatan

---

### 4. Gambar Fasilitas (Optional)
**Folder:** `public/images/facilities/`

**Files:**
- `lab-komputer.jpg`
- `bengkel-otomotif.jpg`
- `perpustakaan.jpg`
- `ruang-kelas.jpg`
- dll.

**Ukuran:** 1200x800px (atau rasio 3:2)  
**Format:** JPG  
**Kualitas:** High resolution

---

### 5. Banner/Hero Images (Optional)
**Files:**
- `public/images/hero-1.jpg`
- `public/images/hero-2.jpg`
- `public/images/hero-3.jpg`

**Ukuran:** 1920x1080px (Full HD)  
**Format:** JPG  
**Kualitas:** High resolution, optimized for web

---

## 📝 Cara Upload Gambar

### Method 1: Manual Copy
1. Buka folder project: `SMK-BINA-MANDIRI-K-`
2. Navigate ke: `public/images/`
3. Copy paste file gambar
4. Refresh browser

### Method 2: Via File Manager
1. Buka Windows Explorer
2. Navigate ke project folder
3. Masuk ke `public/images/`
4. Drag & drop file gambar

### Method 3: Via VS Code
1. Buka VS Code
2. Klik kanan pada folder `public/images/`
3. Pilih "Reveal in File Explorer"
4. Copy paste file gambar

---

## 🎨 Optimasi Gambar

### Recommended Tools
- **TinyPNG** - https://tinypng.com/ (compress PNG/JPG)
- **Squoosh** - https://squoosh.app/ (Google's image optimizer)
- **ImageOptim** - https://imageoptim.com/ (Mac)

### Best Practices
1. **Compress images** sebelum upload
2. **Use appropriate format**:
   - JPG untuk foto
   - PNG untuk logo/icon dengan transparency
   - WebP untuk modern browsers (optional)
3. **Resize to appropriate dimensions**
4. **Use descriptive filenames**: `kepala-sekolah.jpg` bukan `IMG_1234.jpg`

---

## 🔧 Technical Details

### Next.js Image Component
Website menggunakan `next/image` component yang otomatis:
- Lazy loading
- Responsive images
- Automatic format optimization
- Blur placeholder

### Image Configuration
**File:** `next.config.ts`

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
    },
  ],
}
```

### Placeholder System
Jika gambar tidak ditemukan, otomatis menampilkan placeholder:
- SVG dengan background primary color
- Text "Kepala Sekolah"
- Tidak perlu external service

---

## 📋 Checklist Upload Gambar

### Before Launch
- [ ] Upload foto Kepala Sekolah (`headmaster.jpg`)
- [ ] Upload logo sekolah (`logo.png`)
- [ ] Upload gambar jurusan (TKJ, TSM, TKR)
- [ ] Upload gambar fasilitas
- [ ] Upload hero/banner images
- [ ] Compress semua gambar
- [ ] Test di browser (refresh)
- [ ] Check responsive di mobile

### After Upload
- [ ] Verify semua gambar muncul
- [ ] Check loading speed
- [ ] Test di different browsers
- [ ] Check di mobile devices
- [ ] Verify alt text for accessibility

---

## 🆘 Troubleshooting

### Gambar Tidak Muncul
1. **Check file path**: Pastikan di `public/images/`
2. **Check filename**: Case-sensitive! `Headmaster.jpg` ≠ `headmaster.jpg`
3. **Check file format**: JPG, PNG, WebP supported
4. **Refresh browser**: Hard refresh (Ctrl+Shift+R)
5. **Check console**: F12 → Console untuk error messages

### Gambar Terlalu Besar
1. Compress dengan TinyPNG
2. Resize ke ukuran yang sesuai
3. Convert ke WebP (optional)
4. Use image optimization tools

### Placeholder Muncul Terus
1. Check file exists: `public/images/headmaster.jpg`
2. Check filename spelling
3. Check file permissions
4. Restart dev server: `npm run dev`

---

## 📸 Contoh Struktur Folder

```
public/
└── images/
    ├── .gitkeep
    ├── headmaster.jpg          ← Foto Kepala Sekolah
    ├── logo.png                ← Logo sekolah
    ├── hero-1.jpg              ← Banner homepage
    ├── hero-2.jpg
    ├── hero-3.jpg
    ├── departments/
    │   ├── tkj.jpg             ← Gambar jurusan TKJ
    │   ├── tsm.jpg             ← Gambar jurusan TSM
    │   └── tkr.jpg             ← Gambar jurusan TKR
    ├── facilities/
    │   ├── lab-komputer.jpg
    │   ├── bengkel-otomotif.jpg
    │   ├── perpustakaan.jpg
    │   └── ruang-kelas.jpg
    └── staff/
        ├── guru-1.jpg
        ├── guru-2.jpg
        └── ...
```

---

## 🎯 Priority Upload

### High Priority (Must Have)
1. ✅ Foto Kepala Sekolah
2. ✅ Logo Sekolah
3. ✅ Hero/Banner images

### Medium Priority (Should Have)
4. Gambar jurusan (TKJ, TSM, TKR)
5. Gambar fasilitas utama
6. Foto staff/guru

### Low Priority (Nice to Have)
7. Gallery photos
8. Event photos
9. Achievement photos

---

**Created:** October 22, 2025  
**Status:** ✅ Ready  
**Folder:** `public/images/`  
**Placeholder:** Automatic (SVG)
