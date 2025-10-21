# Chat Box Troubleshooting Guide

## 🔍 Jika Chat Box Tidak Muncul

### 1. Cek Browser Console
Buka Developer Tools (F12) dan lihat Console untuk error messages.

### 2. Test Pages yang Tersedia

Ada 3 halaman untuk testing:

#### A. Demo Chat (dengan framer-motion)
```
http://localhost:3001/demo-chat
```
- Menggunakan komponen `MinimalChatBox` dengan animasi
- Jika tidak muncul, kemungkinan issue dengan framer-motion

#### B. Test Chat (tanpa framer-motion)
```
http://localhost:3001/test-chat
```
- Versi sederhana tanpa animasi
- Jika ini bekerja tapi demo-chat tidak, berarti issue di framer-motion
- Jika ini juga tidak bekerja, berarti issue di styling/z-index

### 3. Cek Z-Index Issues

Chat box menggunakan `z-50`. Jika ada elemen lain dengan z-index lebih tinggi, chat box akan tertutup.

**Solusi:**
```tsx
// Ubah z-index di components/ui/minimal-chat-box.tsx
<div className="fixed bottom-6 right-6 z-[9999]">
```

### 4. Cek Viewport/Screen Size

Chat box mungkin keluar dari viewport di layar kecil.

**Test:**
- Scroll ke bawah halaman
- Zoom out browser (Ctrl + -)
- Resize browser window

### 5. Cek Dark Mode

Jika menggunakan dark mode, warna mungkin blend dengan background.

**Solusi:** Komponen sudah diupdate dengan warna biru yang lebih visible:
- Header: Blue (bg-blue-500)
- Border: Blue (border-blue-500)
- Messages: Blue background

### 6. Hard Refresh Browser

```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### 7. Clear Next.js Cache

```bash
# Stop dev server (Ctrl+C)
rm -rf .next
npm run dev
```

### 8. Verify Component Import

Pastikan import path benar:

```tsx
// ✅ Correct
import MinimalChatBox from "@/components/ui/minimal-chat-box"

// ❌ Wrong
import MinimalChatBox from "components/ui/minimal-chat-box"
import MinimalChatBox from "@/components/minimal-chat-box"
```

### 9. Check File Exists

```bash
# Verify file exists
ls components/ui/minimal-chat-box.tsx
```

### 10. Inspect Element

1. Buka Developer Tools (F12)
2. Klik "Elements" tab
3. Cari element dengan class `fixed bottom-6 right-6`
4. Cek apakah element ada di DOM
5. Cek computed styles (width, height, display, visibility)

## 🎨 Visual Debugging

Tambahkan style debug sementara:

```tsx
<div className="fixed bottom-6 right-6 z-[9999] bg-red-500 p-4">
  <p className="text-white">DEBUG: Chat box is here!</p>
  <MinimalChatBox />
</div>
```

Jika kotak merah muncul tapi chat box tidak, berarti issue di komponen.

## 🔧 Quick Fixes

### Fix 1: Increase Visibility

Update di `components/ui/minimal-chat-box.tsx`:

```tsx
// Ubah ukuran button lebih besar
animate={{
  height: isOpen ? "400px" : "80px",  // dari 60px ke 80px
  width: isOpen ? "350px" : "80px",   // dari 60px ke 80px
}}

// Tambah background color yang jelas
className="... bg-blue-500 border-4 border-white shadow-2xl"
```

### Fix 2: Force Position

```tsx
<div 
  className="fixed z-[9999]" 
  style={{
    bottom: "24px",
    right: "24px",
    position: "fixed"
  }}
>
```

### Fix 3: Remove Animation

Jika framer-motion bermasalah, gunakan CSS transition:

```tsx
<div
  style={{
    height: isOpen ? "400px" : "60px",
    width: isOpen ? "350px" : "60px",
    transition: "all 0.3s ease-in-out"
  }}
  className="..."
>
```

## 📱 Mobile Testing

Jika testing di mobile:

1. Chat button mungkin terlalu kecil untuk di-tap
2. Posisi `bottom-6 right-6` mungkin tertutup browser UI
3. Viewport height berbeda

**Solusi:**
```tsx
// Responsive sizing
<div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
  <motion.div
    animate={{
      height: isOpen ? "400px" : "64px",  // Lebih besar di mobile
      width: isOpen ? "calc(100vw - 32px)" : "64px",  // Full width di mobile
    }}
    className="..."
  >
```

## 🐛 Common Issues

### Issue: "Cannot find module 'framer-motion'"

```bash
npm install framer-motion
# atau
npm install framer-motion --legacy-peer-deps
```

### Issue: "Module not found: Can't resolve '@/components/ui/input'"

Input component belum ada. Install via shadcn:

```bash
npx shadcn@latest add input
```

### Issue: Chat box muncul tapi tidak bisa diklik

Z-index issue atau ada overlay di atasnya.

```tsx
// Tambah pointer-events
<div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
```

### Issue: Animation tidak smooth

```tsx
// Ubah transition config
const transition = {
  type: "spring",
  bounce: 0.1,      // Kurangi bounce
  duration: 0.4,    // Perpanjang duration
  stiffness: 300,   // Tambah stiffness
  damping: 30       // Tambah damping
}
```

## ✅ Verification Checklist

- [ ] File `components/ui/minimal-chat-box.tsx` exists
- [ ] framer-motion installed (`npm list framer-motion`)
- [ ] lucide-react installed (`npm list lucide-react`)
- [ ] Input component exists (`components/ui/input.tsx`)
- [ ] No TypeScript errors (`npm run build`)
- [ ] No console errors in browser (F12)
- [ ] Dev server running (`npm run dev`)
- [ ] Correct URL (`http://localhost:3001/demo-chat`)
- [ ] Browser cache cleared (Ctrl+Shift+R)
- [ ] Element visible in DOM (Inspect Element)

## 🆘 Still Not Working?

1. **Try test-chat page first:**
   ```
   http://localhost:3001/test-chat
   ```
   Ini versi tanpa framer-motion yang lebih simple.

2. **Check browser compatibility:**
   - Chrome/Edge: ✅ Fully supported
   - Firefox: ✅ Fully supported
   - Safari: ⚠️ Might need polyfills

3. **Restart everything:**
   ```bash
   # Stop dev server
   Ctrl+C
   
   # Clear cache
   rm -rf .next
   rm -rf node_modules/.cache
   
   # Restart
   npm run dev
   ```

4. **Check package.json:**
   ```json
   {
     "dependencies": {
       "framer-motion": "^12.23.24",
       "lucide-react": "^0.541.0"
     }
   }
   ```

---

**Last Updated:** October 21, 2025
