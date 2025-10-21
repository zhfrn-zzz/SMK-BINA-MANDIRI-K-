# 🤖 Chatbot Options - Pilih Salah Satu

## Current Status

✅ **New MinimalChatBox sudah terintegrasi dengan AI Gemini**
- Posisi: Kiri bawah (left-6)
- Fungsi: Sama dengan old chatbot
- Style: Modern dengan animasi smooth

✅ **Old Chatbot masih aktif**
- Posisi: Kanan bawah (right-6)
- Fungsi: AI Gemini
- Style: Card-based

## 🎯 Pilihan Anda

### Option 1: Keep Both (Current) ✅ ACTIVE

**Tidak perlu ubah apa-apa!**

Kedua chatbot akan muncul:
- Old: Kanan bawah
- New: Kiri bawah

**Pros:**
- User bisa pilih style yang disukai
- A/B testing
- Backup jika salah satu error

**Cons:**
- Redundant (2 chatbot dengan fungsi sama)
- Membingungkan user
- Double API calls

---

### Option 2: Replace dengan New MinimalChatBox

**File to edit:** `app/(public)/layout.tsx`

**Before:**
```tsx
import { Header } from '@/components/ui/header-2';
import { Chatbot } from '@/components/chatbot';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Chatbot />
      <footer className="border-t py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SMK Bina Mandiri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

**After:**
```tsx
import { Header } from '@/components/ui/header-2';
import MinimalChatBox from '@/components/ui/minimal-chat-box';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <MinimalChatBox />
      <footer className="border-t py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SMK Bina Mandiri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

**Pros:**
- Hanya 1 chatbot (tidak membingungkan)
- Modern design dengan smooth animation
- Lebih compact

**Cons:**
- Perlu adjust user yang sudah terbiasa dengan old design

---

### Option 3: Keep Old, Remove New

**File to edit:** `app/(public)/layout.tsx`

Tidak perlu ubah apa-apa, tapi hapus MinimalChatBox dari demo pages.

**Pros:**
- User sudah familiar
- Stable (sudah tested)

**Cons:**
- Tidak dapat smooth animation
- Design kurang modern

---

## 🎨 Customization: Ubah Posisi New MinimalChatBox

Jika ingin new chatbot di **kanan** (seperti old chatbot):

**File:** `components/ui/minimal-chat-box.tsx`

**Line 75-76:**
```tsx
// Ubah dari:
<div className="fixed bottom-6 left-6 z-50">

// Ke:
<div className="fixed bottom-6 right-6 z-50">
```

Maka new chatbot akan di kanan, old chatbot juga di kanan (overlap).

---

## 💡 Recommendation

**Saya recommend: Option 2 (Replace dengan New)**

**Alasan:**
1. ✅ Modern design lebih menarik
2. ✅ Smooth animation meningkatkan UX
3. ✅ Tidak redundant
4. ✅ Fungsi AI sama persis
5. ✅ Lebih mudah maintain (1 component)

**Langkah:**
1. Edit `app/(public)/layout.tsx` (lihat Option 2)
2. Ubah posisi ke kanan di `components/ui/minimal-chat-box.tsx`
3. Test di browser
4. Hapus `components/chatbot.tsx` (optional, bisa keep as backup)

---

## 🚀 Quick Implementation

Saya bisa bantu implement option yang Anda pilih. Tinggal bilang:

- **"Pilih Option 1"** - Keep both (sudah aktif)
- **"Pilih Option 2"** - Replace dengan new (recommended)
- **"Pilih Option 3"** - Keep old, remove new

---

**Current Status:** Option 1 (Both Active)
**Recommended:** Option 2 (Replace dengan New)
