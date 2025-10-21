# 🗺️ Sitemap - SMK Bina Mandiri Website

## 🌐 Public Website

```
┌─────────────────────────────────────────────────────────────┐
│                    SMK BINA MANDIRI                         │
│                   www.smkbinamandiri.sch.id                 │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    ┌───▼───┐           ┌─────▼─────┐        ┌─────▼─────┐
    │ HOME  │           │   ABOUT   │        │  JURUSAN  │
    │   /   │           │  /about   │        │/departments│
    └───────┘           └─────┬─────┘        └─────┬─────┘
                              │
                    ┌─────────┼─────────┐
                    │         │         │
              ┌─────▼─────┐ ┌─▼─────┐ ┌─▼─────┐
              │  TENTANG  │ │KEPALA │ │ HUBIN │
              │  /about   │ │SEKOLAH│ │/hubin │
              └───────────┘ │/head..│ └───────┘
                            └───────┘
                                                    │
                                    ┌───────────────┼───────────────┐
                                    │               │               │
                              ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
                              │    TKJ    │  │    TSM    │  │    TKR    │
                              │/depts/tkj │  │/depts/tsm │  │/depts/tkr │
                              └───────────┘  └───────────┘  └───────────┘

        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    ┌───▼───┐           ┌─────▼─────┐        ┌─────▼─────┐
    │  PPDB │           │  KONTAK   │        │   LOGIN   │
    │ /spmb │           │ /contact  │        │ /sign-in  │
    └───────┘           └───────────┘        └─────┬─────┘
                                                    │
                                              ┌─────▼─────┐
                                              │ REGISTER  │
                                              │ /sign-up  │
                                              └───────────┘
```

## 🎛️ Admin Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│                      DASHBOARD                              │
│                     /dashboard                              │
│                  (Protected - Login Required)               │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    ┌───▼───┐           ┌─────▼─────┐        ┌─────▼─────┐
    │ STAFF │           │  JURUSAN  │        │  HALAMAN  │
    │/staff │           │/departments│       │  /pages   │
    └───────┘           └───────────┘        └───────────┘

        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
    ┌───▼───┐           ┌─────▼─────┐
    │ APPS  │           │  PESAN    │
    │/apps  │           │ /contacts │
    └───────┘           └───────────┘
```

## 📱 Quick Access

### For Visitors (Public)

| Page | URL | Purpose |
|------|-----|---------|
| 🏠 **Homepage** | `/` | Landing page, overview sekolah |
| 📖 **Tentang** | `/about` | Profil, visi, misi sekolah |
| 👔 **Kepala Sekolah** | `/about/headmaster` | Sambutan Kepala Sekolah |
| 🏭 **HUBIN** | `/about/hubin` | Hubungan Industri |
| 🎓 **Jurusan** | `/departments` | List semua jurusan |
| 🔧 **TKJ** | `/departments/tkj` | Detail Teknik Komputer Jaringan |
| 🏍️ **TSM** | `/departments/tsm` | Detail Teknik Sepeda Motor |
| 🚗 **TKR** | `/departments/tkr` | Detail Teknik Kendaraan Ringan |
| 📝 **PPDB** | `/spmb` | Info pendaftaran siswa baru |
| 📞 **Kontak** | `/contact` | Form kontak & info sekolah |

### For Admin (Protected)

| Page | URL | Purpose |
|------|-----|---------|
| 🔐 **Login** | `/sign-in` | Login untuk admin |
| 📝 **Register** | `/sign-up` | Daftar akun admin baru |
| 🎛️ **Dashboard** | `/dashboard` | Overview & statistik |
| 👥 **Staff** | `/dashboard/staff` | Kelola data guru & staff |
| 🎓 **Jurusan** | `/dashboard/departments` | Kelola data jurusan |
| 📄 **Halaman** | `/dashboard/pages` | Edit konten halaman |
| 📱 **Aplikasi** | `/dashboard/applications` | Kelola aplikasi sekolah |
| 💬 **Pesan** | `/dashboard/contacts` | Lihat pesan dari form kontak |

## 🤖 Special Features

### AI Chatbot
- **Location**: Bottom-right corner (all public pages)
- **Component**: `MinimalChatBox`
- **API**: `/api/chat`
- **Features**: 
  - AI-powered dengan Google Gemini
  - Menjawab pertanyaan tentang sekolah
  - Bahasa Indonesia
  - Real-time responses

### Contact Form
- **Location**: `/contact` page
- **API**: `/api/contact`
- **Features**:
  - Form validation
  - Toast notifications
  - Save to database
  - Admin dapat lihat di `/dashboard/contacts`

## 🔒 Access Control

### Public Access (No Login Required)
✅ Homepage  
✅ About  
✅ Departments (all)  
✅ SPMB  
✅ Contact  
✅ Chatbot  

### Protected Access (Login Required)
🔐 Dashboard (all pages)  
🔐 Staff management  
🔐 Content management  
🔐 Contact messages  

### Authentication
- **Login**: `/sign-in`
- **Register**: `/sign-up`
- **Logout**: Via dashboard sidebar
- **Session**: Cookie-based (Better Auth)

## 📊 Page Count

| Category | Count | Pages |
|----------|-------|-------|
| **Public** | 8 | Home, About (3 pages), Departments (4 pages), SPMB, Contact |
| **Auth** | 2 | Sign In, Sign Up |
| **Dashboard** | 6 | Home, Staff, Departments, Pages, Applications, Contacts |
| **API** | 3 | Chat, Contact, Auth |
| **Testing** | 2 | Demo Chat, Test Chat |
| **TOTAL** | **21** | All routes |

## 🎯 User Journeys

### Journey 1: Calon Siswa
```
1. Visit Homepage (/)
2. Lihat jurusan (/departments)
3. Klik detail jurusan (/departments/tkj)
4. Tanya chatbot tentang pendaftaran
5. Buka halaman PPDB (/spmb)
6. Isi form kontak (/contact)
```

### Journey 2: Admin
```
1. Login (/sign-in)
2. Dashboard overview (/dashboard)
3. Cek pesan baru (/dashboard/contacts)
4. Update data staff (/dashboard/staff)
5. Edit konten halaman (/dashboard/pages)
6. Logout
```

### Journey 3: Orang Tua
```
1. Visit Homepage (/)
2. Baca tentang sekolah (/about)
3. Lihat fasilitas & jurusan
4. Tanya chatbot tentang biaya
5. Hubungi via form (/contact)
```

## 🔗 External Links

### Social Media (Future)
- Facebook: [Link]
- Instagram: [Link]
- YouTube: [Link]
- Twitter: [Link]

### Related Sites
- Kemendikbud
- Dinas Pendidikan
- PPDB Online (if applicable)

## 📱 Mobile Navigation

### Public Menu
```
☰ Menu
├── 🏠 Beranda
├── 📖 Tentang
│   ├── Tentang Kami
│   ├── Sambutan Kepala Sekolah
│   └── HUBIN
├── 🎓 Jurusan
│   ├── Semua Jurusan
│   ├── TKJ
│   ├── TSM
│   └── TKR
├── 📝 PPDB
├── 📞 Kontak
└── 🔐 Login
```

### Dashboard Menu
```
☰ Dashboard
├── 🏠 Overview
├── 👥 Staff
├── 🎓 Jurusan
├── 📄 Halaman
├── 📱 Aplikasi
├── 💬 Pesan
└── 🚪 Logout
```

## 🎨 Design Notes

- **Header**: Fixed top navigation with logo
- **Footer**: Contact info, social media, copyright
- **Chatbot**: Fixed bottom-right, always accessible
- **Sidebar**: Collapsible on mobile (dashboard)
- **Theme**: Light/Dark mode toggle
- **Colors**: Blue (#002147, #0a4d9e) & Orange (#fe8e22)

---

**Last Updated:** October 21, 2025  
**Total Routes:** 21  
**Public Pages:** 10  
**Protected Pages:** 6  
**API Endpoints:** 3
