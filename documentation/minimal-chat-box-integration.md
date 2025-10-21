# Minimal Chat Box Integration

## ✅ Integration Complete

Komponen **MinimalChatBox** telah berhasil diintegrasikan ke dalam project SMK Bina Mandiri.

## 📁 File Structure

```
components/ui/
  └── minimal-chat-box.tsx    # Komponen chat box minimal
app/(public)/
  └── demo-chat/
      └── page.tsx             # Demo page
```

## 🎯 Features

- ✅ Floating chat button di bottom-right
- ✅ Smooth animation dengan framer-motion
- ✅ Dark mode support
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Keyboard support (Enter to send)

## 🚀 Usage

### Basic Usage

```tsx
import MinimalChatBox from "@/components/ui/minimal-chat-box"

export default function Page() {
  return (
    <div>
      {/* Your page content */}
      <MinimalChatBox />
    </div>
  )
}
```

### Demo Page

Akses demo page di: `http://localhost:3000/demo-chat`

## 🔧 Customization

### Mengubah Posisi

Edit di `minimal-chat-box.tsx`:

```tsx
// Dari bottom-right ke bottom-left
<div className="fixed bottom-6 left-6 z-50">
```

### Mengubah Ukuran

```tsx
animate={{
  height: isOpen ? "500px" : "60px",  // Ubah tinggi
  width: isOpen ? "400px" : "60px",   // Ubah lebar
}}
```

### Mengubah Warna

```tsx
// Header background
<div className="... bg-blue-100 dark:bg-blue-800">

// Send button
<div className="... bg-blue-600 hover:bg-blue-700">
```

## 🔗 Integration dengan Existing Chatbot

Untuk mengintegrasikan dengan chatbot Gemini yang sudah ada:

1. Import API route:
```tsx
const handleSend = async () => {
  if (input.trim()) {
    const userMessage = input.trim()
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setInput("")
    
    // Call API
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    })
    
    const data = await response.json()
    setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
  }
}
```

2. Update message type:
```tsx
const [messages, setMessages] = React.useState<Array<{role: string, content: string}>>([])
```

3. Update message rendering:
```tsx
messages.map((msg, idx) => (
  <div
    key={idx}
    className={cn(
      "px-3 py-2 rounded text-sm max-w-[85%]",
      msg.role === "user" 
        ? "self-end bg-blue-600 text-white" 
        : "self-start bg-gray-100 dark:bg-gray-800"
    )}
  >
    {msg.content}
  </div>
))
```

## 📦 Dependencies

- ✅ `framer-motion` - Already installed
- ✅ `lucide-react` - Already installed
- ✅ `@/components/ui/input` - Already exists

## 🎨 Styling

Komponen menggunakan:
- Tailwind CSS classes
- Dark mode support via `dark:` prefix
- Responsive design
- Smooth animations

## 🧪 Testing

1. Start dev server:
```bash
npm run dev
```

2. Visit demo page:
```
http://localhost:3000/demo-chat
```

3. Test features:
   - Click chat icon to open/close
   - Type message and press Enter
   - Click Send button
   - Test dark mode toggle

## 📝 Notes

- Komponen ini adalah versi minimal untuk demo
- Untuk production, integrasikan dengan `/api/chat` route yang sudah ada
- Messages saat ini hanya disimpan di state (tidak persisten)
- Untuk persistent chat, gunakan localStorage atau database

## 🔄 Next Steps

1. Integrate dengan Gemini API (`/api/chat`)
2. Add loading state saat menunggu response
3. Add error handling
4. Add message persistence (localStorage/database)
5. Add typing indicator
6. Add message timestamps
7. Add file upload support (optional)

---

**Created**: October 21, 2025
**Status**: ✅ Ready to use
