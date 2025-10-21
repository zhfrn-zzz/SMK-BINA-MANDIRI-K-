# 📄 Pages Overview - SMK Bina Mandiri Website

## 🌐 Public Pages (Frontend)

Website publik yang dapat diakses oleh semua pengunjung.

### 1. Homepage
**URL**: `/`  
**File**: `app/(public)/page.tsx`

**Content:**
- Hero section dengan animasi
- Sambutan Kepala Sekolah
- Jurusan/Kompetensi Keahlian (3 cards)
- Fasilitas sekolah
- Testimonial siswa
- Call-to-action PPDB

**Features:**
- Modern design dengan Relivator style
- Smooth animations
- Responsive layout
- Custom color palette (blue & orange)

---

### 2. About (Tentang Kami)
**URL**: `/about`  
**File**: `app/(public)/about/page.tsx`

**Content:**
- Profil sekolah
- Visi & Misi
- Sejarah singkat
- Nilai-nilai sekolah
- Struktur organisasi

**Features:**
- Clean layout
- Easy to read
- Professional presentation
- Dropdown navigation to sub-pages

---

### 2a. Sambutan Kepala Sekolah
**URL**: `/about/headmaster`  
**File**: `app/(public)/about/headmaster/page.tsx`

**Content:**
- Foto Kepala Sekolah
- Sambutan dan pesan
- Visi & Misi Kepala Sekolah
- Profil singkat

**Features:**
- Professional layout
- Photo with bio
- Inspirational message
- Vision & mission cards

---

### 2b. HUBIN (Hubungan Industri)
**URL**: `/about/hubin`  
**File**: `app/(public)/about/hubin/page.tsx`

**Content:**
- Program HUBIN:
  - PRAKERIN (Praktik Kerja Industri)
  - Kunjungan Industri
  - Teaching Factory
  - Sertifikasi Kompetensi
  - Job Fair & Recruitment
  - Bursa Kerja Khusus (BKK)
- Daftar mitra industri
- Statistik penyerapan lulusan
- Kontak koordinator HUBIN

**Features:**
- Icon-based program cards
- Industry partners list
- Statistics display
- Contact information

---

### 3. Departments (Jurusan)
**URL**: `/departments`  
**File**: `app/(public)/departments/page.tsx`

**Content:**
- List semua jurusan (3 jurusan):
  1. **TKJ** - Teknik Komputer dan Jaringan
  2. **TSM** - Teknik Sepeda Motor
  3. **TKR** - Teknik Kendaraan Ringan
- Card untuk setiap jurusan
- Link ke detail page

**Features:**
- Grid layout
- Hover effects
- Image untuk setiap jurusan

---

### 4. Department Detail
**URL**: `/departments/[slug]`  
**File**: `app/(public)/departments/[slug]/page.tsx`

**Dynamic Routes:**
- `/departments/tkj` - Teknik Komputer dan Jaringan
- `/departments/tsm` - Teknik Sepeda Motor
- `/departments/tkr` - Teknik Kendaraan Ringan

**Content:**
- Deskripsi lengkap jurusan
- Kurikulum
- Fasilitas
- Prospek karir
- Kompetensi yang dipelajari

**Features:**
- Dynamic routing
- Detailed information
- Images & icons

---

### 5. SPMB (Penerimaan Siswa Baru)
**URL**: `/spmb`  
**File**: `app/(public)/spmb/page.tsx`

**Content:**
- Informasi pendaftaran
- Syarat pendaftaran
- Jadwal pendaftaran
- Biaya pendaftaran
- Cara mendaftar
- Kontak untuk informasi lebih lanjut

**Features:**
- Clear information
- Step-by-step guide
- Call-to-action buttons

---

### 6. Contact (Kontak)
**URL**: `/contact`  
**File**: `app/(public)/contact/page.tsx`

**Content:**
- Contact form (Name, Email, Message)
- Alamat sekolah
- Nomor telepon
- Email sekolah
- Google Maps embed (optional)
- Social media links

**Features:**
- Working contact form
- Form validation
- Toast notifications
- Submits to `/api/contact`
- Data saved to database

---

### 7. Demo Chat (Testing)
**URL**: `/demo-chat`  
**File**: `app/(public)/demo-chat/page.tsx`

**Purpose:** Demo page untuk testing MinimalChatBox component

**Content:**
- Simple page dengan chatbot
- Instructions untuk testing

**Note:** Ini adalah testing page, bisa dihapus di production

---

### 8. Test Chat (Testing)
**URL**: `/test-chat`  
**File**: `app/(public)/test-chat/page.tsx`

**Purpose:** Testing page untuk chatbot tanpa framer-motion

**Content:**
- Simplified chatbot
- Debug information

**Note:** Ini adalah testing page, bisa dihapus di production

---

## 🔐 Authentication Pages

### 9. Sign In (Login)
**URL**: `/sign-in`  
**File**: `app/sign-in/page.tsx`

**Content:**
- Login form (Email, Password)
- "Forgot password" link
- "Sign up" link
- Better Auth integration

**Features:**
- Form validation
- Error handling
- Redirect to dashboard after login
- Session management

---

### 10. Sign Up (Register)
**URL**: `/sign-up`  
**File**: `app/sign-up/page.tsx`

**Content:**
- Registration form (Name, Email, Password)
- Terms & conditions checkbox
- "Sign in" link
- Better Auth integration

**Features:**
- Form validation
- Password strength indicator
- Error handling
- Auto-login after registration

---

## 🎛️ Dashboard Pages (Admin)

Protected routes - requires authentication.

### 11. Dashboard Home
**URL**: `/dashboard`  
**File**: `app/dashboard/page.tsx`

**Content:**
- Overview statistics
- Quick stats cards:
  - Total staff
  - Total departments
  - Total applications
  - Unread contacts
- Recent activities
- Quick links

**Features:**
- Protected route
- Sidebar navigation
- Responsive layout

---

### 12. Staff Management
**URL**: `/dashboard/staff`  
**File**: `app/dashboard/staff/page.tsx`

**Content:**
- List of all teachers and staff
- Categories:
  - Teachers (Guru)
  - Educational staff (Tendik)
- Staff information:
  - Name
  - Position
  - Photo
  - Display order

**Features:**
- View all staff
- Search & filter
- Sortable list
- CRUD operations (future)

---

### 13. Departments Management
**URL**: `/dashboard/departments`  
**File**: `app/dashboard/departments/page.tsx`

**Content:**
- List of all departments/jurusan
- Department information:
  - Name
  - Slug
  - Description
  - Image

**Features:**
- View all departments
- Edit department info (future)
- Manage curriculum (future)

---

### 14. Pages Management
**URL**: `/dashboard/pages`  
**File**: `app/dashboard/pages/page.tsx`

**Content:**
- List of static pages:
  - Headmaster's Welcome
  - About Us
  - HUBIN
- Edit page content

**Features:**
- View all pages
- Edit content (future)
- Rich text editor (future)

---

### 15. Applications Management
**URL**: `/dashboard/applications`  
**File**: `app/dashboard/applications/page.tsx`

**Content:**
- List of school applications
- Application information:
  - Name
  - Description
  - URL
  - Icon

**Features:**
- View all applications
- Add new application (future)
- Edit/Delete (future)

---

### 16. Contacts Management
**URL**: `/dashboard/contacts`  
**File**: `app/dashboard/contacts/page.tsx`

**Content:**
- List of all contact form submissions
- Contact information:
  - Name
  - Email
  - Message
  - Date
  - Read/Unread status
- Unread count badge

**Features:**
- View all messages
- Mark as read/unread
- Delete messages (future)
- Filter by status (future)

---

## 🔌 API Routes

### 17. Chat API
**URL**: `/api/chat`  
**File**: `app/api/chat/route.ts`

**Method:** POST

**Purpose:** Handle chatbot messages with Google Gemini AI

**Request:**
```json
{
  "message": "User's question"
}
```

**Response:**
```json
{
  "response": "AI's answer"
}
```

**Features:**
- RAG (Retrieval-Augmented Generation)
- Uses `lib/school-context.md` for context
- Gemini 2.5 Flash model
- Bahasa Indonesia responses

---

### 18. Contact API
**URL**: `/api/contact`  
**File**: `app/api/contact/route.ts`

**Method:** POST

**Purpose:** Handle contact form submissions

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Features:**
- Form validation
- Save to database
- Email notification (future)

---

### 19. Auth API
**URL**: `/api/auth/[...all]`  
**File**: `app/api/auth/[...all]/route.ts`

**Purpose:** Better Auth endpoints

**Endpoints:**
- `/api/auth/sign-in` - Login
- `/api/auth/sign-up` - Register
- `/api/auth/sign-out` - Logout
- `/api/auth/session` - Get session
- And more...

**Features:**
- Session management
- Password hashing
- CSRF protection
- Cookie-based auth

---

## 📊 Page Summary

### Public Pages (10)
1. Homepage - `/`
2. About - `/about`
3. Headmaster - `/about/headmaster`
4. HUBIN - `/about/hubin`
5. Departments - `/departments`
6. Department Detail - `/departments/[slug]` (TKJ, TSM, TKR)
7. SPMB - `/spmb`
8. Contact - `/contact`
9. Demo Chat - `/demo-chat` (testing)
10. Test Chat - `/test-chat` (testing)

### Auth Pages (2)
9. Sign In - `/sign-in`
10. Sign Up - `/sign-up`

### Dashboard Pages (6)
11. Dashboard Home - `/dashboard`
12. Staff - `/dashboard/staff`
13. Departments - `/dashboard/departments`
14. Pages - `/dashboard/pages`
15. Applications - `/dashboard/applications`
16. Contacts - `/dashboard/contacts`

### API Routes (3)
17. Chat API - `/api/chat`
18. Contact API - `/api/contact`
19. Auth API - `/api/auth/[...all]`

**Total: 21 routes**

---

## 🎨 Shared Components

### Layout Components
- `app/(public)/layout.tsx` - Public layout with header, footer, chatbot
- `app/dashboard/layout.tsx` - Dashboard layout with sidebar
- `app/layout.tsx` - Root layout

### UI Components
- `components/ui/minimal-chat-box.tsx` - AI Chatbot
- `components/ui/header-2.tsx` - Modern animated header
- `components/app-sidebar.tsx` - Dashboard sidebar
- And many more shadcn/ui components

---

## 🚀 Navigation Structure

```
SMK Bina Mandiri Website
│
├── 🏠 Home (/)
│
├── 📖 About (/about)
│
├── 🎓 Jurusan (/departments)
│   ├── TKJ (/departments/tkj)
│   ├── TSM (/departments/tsm)
│   └── TKR (/departments/tkr)
│
├── 📝 PPDB (/spmb)
│
├── 📞 Kontak (/contact)
│
├── 🔐 Login (/sign-in)
│
├── 📝 Register (/sign-up)
│
└── 🎛️ Dashboard (/dashboard)
    ├── Staff (/dashboard/staff)
    ├── Jurusan (/dashboard/departments)
    ├── Halaman (/dashboard/pages)
    ├── Aplikasi (/dashboard/applications)
    └── Pesan (/dashboard/contacts)
```

---

## 📝 Notes

### Testing Pages
- `/demo-chat` dan `/test-chat` adalah testing pages
- Bisa dihapus sebelum production deployment
- Atau bisa di-protect dengan authentication

### Future Enhancements
- Rich text editor untuk pages management
- Image upload functionality
- CRUD forms untuk staff, departments, applications
- Email notifications untuk contact form
- Online PPDB system
- News/announcements system
- Photo gallery
- Events calendar

---

**Last Updated:** October 21, 2025  
**Total Pages:** 19 routes  
**Status:** ✅ Complete
