# Replace Old Chatbot with New MinimalChatBox

## 📍 Current Situation

Sekarang ada **2 chatbot**:
1. **Old Chatbot** (kanan bawah) - `components/chatbot.tsx`
2. **New MinimalChatBox** (kiri bawah) - `components/ui/minimal-chat-box.tsx`

Keduanya memiliki fungsi AI yang sama (Gemini API).

## ✅ New MinimalChatBox Features

- ✅ Smooth animations dengan framer-motion
- ✅ Modern design dengan warna biru
- ✅ AI integration dengan Gemini API
- ✅ Loading state dengan spinner
- ✅ Auto-scroll ke message terbaru
- ✅ Greeting message otomatis
- ✅ Dark mode support
- ✅ Responsive design

## 🔄 Option 1: Keep Both (Current)

**Posisi:**
- Old Chatbot: Bottom-right (`right-6`)
- New MinimalChatBox: Bottom-left (`left-6`)

**Kapan digunakan:**
- Jika ingin A/B testing
- Jika ingin user memilih style yang disukai

## 🔄 Option 2: Replace Old with New

### Step 1: Find where old chatbot is used

```bash
# Search for Chatbot usage
grep -r "import.*Chatbot" app/
grep -r "<Chatbot" app/
```

### Step 2: Replace imports

**Before:**
```tsx
import { Chatbot } from "@/components/chatbot"

export default function Layout() {
  return (
    <>
      {children}
      <Chatbot />
    </>
  )
}
```

**After:**
```tsx
import MinimalChatBox from "@/components/ui/minimal-chat-box"

export default function Layout() {
  return (
    <>
      {children}
      <MinimalChatBox />
    </>
  )
}
```

### Step 3: Update position to right

Jika ingin di kanan seperti yang lama:

```tsx
// components/ui/minimal-chat-box.tsx
// Ubah dari:
<div className="fixed bottom-6 left-6 z-50">

// Ke:
<div className="fixed bottom-6 right-6 z-50">
```

### Step 4: Remove old chatbot (optional)

```bash
# Backup dulu
cp components/chatbot.tsx components/chatbot.tsx.backup

# Hapus file lama
rm components/chatbot.tsx
```

## 🔄 Option 3: Use New as Default, Keep Old as Backup

1. Rename old chatbot:
```bash
mv components/chatbot.tsx components/chatbot-old.tsx
```

2. Use new chatbot everywhere:
```tsx
import MinimalChatBox from "@/components/ui/minimal-chat-box"
```

3. Keep old file for reference

## 📝 Files to Update

Cari file yang menggunakan old chatbot:

### Likely locations:
- `app/(public)/layout.tsx`
- `app/layout.tsx`
- `components/public-header.tsx`
- Any page that imports `Chatbot`

### Example: Update layout

```tsx
// app/(public)/layout.tsx
import MinimalChatBox from "@/components/ui/minimal-chat-box"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <MinimalChatBox />
    </>
  )
}
```

## 🎨 Customization

### Change Position

```tsx
// Bottom-right
<div className="fixed bottom-6 right-6 z-50">

// Bottom-left
<div className="fixed bottom-6 left-6 z-50">

// Top-right
<div className="fixed top-6 right-6 z-50">

// Top-left
<div className="fixed top-6 left-6 z-50">
```

### Change Colors

```tsx
// Header - ubah dari blue ke green
<div className="... bg-green-500 dark:bg-green-700">

// Border - ubah dari blue ke green
className="... border-green-500 dark:border-green-700"

// User messages - ubah dari blue ke green
msg.role === "user"
  ? "bg-green-500 text-white"
  : "..."
```

### Change Size

```tsx
animate={{
  height: isOpen ? "500px" : "60px",  // Lebih tinggi
  width: isOpen ? "400px" : "60px",   // Lebih lebar
}}
```

### Change Greeting Message

```tsx
const [messages, setMessages] = React.useState<Message[]>([
  {
    role: "assistant",
    content: "Selamat datang di SMK Bina Mandiri! Ada yang bisa saya bantu?",
  },
])
```

## 🧪 Testing After Replacement

1. **Test opening/closing:**
   - Click button to open
   - Click X to close
   - Check animation smooth

2. **Test messaging:**
   - Type message
   - Press Enter
   - Check loading spinner appears
   - Check AI response appears

3. **Test AI functionality:**
   - Ask: "Apa saja jurusan di SMK Bina Mandiri?"
   - Ask: "Kapan pendaftaran siswa baru?"
   - Ask: "Berapa biaya sekolah?"

4. **Test edge cases:**
   - Send empty message (should not send)
   - Send while loading (should be disabled)
   - Long messages (should wrap)
   - Multiple messages (should scroll)

5. **Test responsive:**
   - Desktop view
   - Tablet view
   - Mobile view

6. **Test dark mode:**
   - Toggle dark mode
   - Check colors readable
   - Check contrast sufficient

## 🔍 Comparison

| Feature | Old Chatbot | New MinimalChatBox |
|---------|-------------|-------------------|
| Animation | Basic | Smooth (framer-motion) |
| Design | Card-based | Minimal floating |
| Colors | Primary theme | Blue accent |
| Size | 384px x 500px | 350px x 400px |
| Position | Right-bottom | Left-bottom (customizable) |
| AI Integration | ✅ | ✅ |
| Loading State | ✅ | ✅ |
| Auto-scroll | ✅ | ✅ |
| Dark Mode | ✅ | ✅ |
| Dependencies | Shadcn only | Shadcn + framer-motion |

## 💡 Recommendation

**Untuk production:**
1. Pilih salah satu (jangan keep both)
2. Test thoroughly sebelum deploy
3. Update documentation
4. Train admin cara menggunakan

**Saya recommend:**
- Use **New MinimalChatBox** karena:
  - Lebih modern
  - Smooth animations
  - Lebih compact
  - Easier to customize

**Tapi keep old chatbot jika:**
- Sudah familiar dengan users
- Tidak ingin breaking changes
- Prefer card-based design

## 🚀 Quick Replace Command

```bash
# 1. Find all usage
grep -r "Chatbot" app/ components/

# 2. Replace in all files (Linux/Mac)
find app/ -type f -name "*.tsx" -exec sed -i 's/import { Chatbot } from "@\/components\/chatbot"/import MinimalChatBox from "@\/components\/ui\/minimal-chat-box"/g' {} +
find app/ -type f -name "*.tsx" -exec sed -i 's/<Chatbot \/>/<MinimalChatBox \/>/g' {} +

# 3. Windows (PowerShell)
Get-ChildItem -Path app\ -Filter *.tsx -Recurse | ForEach-Object {
  (Get-Content $_.FullName) -replace 'import { Chatbot } from "@/components/chatbot"', 'import MinimalChatBox from "@/components/ui/minimal-chat-box"' | Set-Content $_.FullName
}
```

---

**Decision:** Pilih option yang sesuai dengan kebutuhan project Anda!
