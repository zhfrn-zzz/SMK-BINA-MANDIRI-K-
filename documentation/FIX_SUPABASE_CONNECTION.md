# 🔧 Fix Supabase Connection Error

## ❌ Error yang Anda Alami

```
error: Tenant or user not found
```

Ini berarti **connection string tidak tepat**.

## ✅ Cara Mendapatkan Connection String yang Benar

### Step 1: Buka Supabase Dashboard

1. Buka: https://supabase.com/dashboard
2. Login dengan akun Anda
3. Pilih project: **tpbawvcjsmbhjqlgoihl**

### Step 2: Dapatkan Connection String

1. Klik **"Settings"** (icon gear) di sidebar kiri bawah
2. Klik **"Database"**
3. Scroll ke bawah sampai bagian **"Connection string"**
4. Anda akan lihat beberapa pilihan:

#### A. Session Mode (untuk migrations)
```
postgresql://postgres:[YOUR-PASSWORD]@db.tpbawvcjsmbhjqlgoihl.supabase.co:5432/postgres
```

#### B. Transaction Mode (untuk app)
```
postgresql://postgres:[YOUR-PASSWORD]@db.tpbawvcjsmbhjqlgoihl.supabase.co:6543/postgres
```

### Step 3: Ganti [YOUR-PASSWORD]

Password Anda adalah: **VEIzHByK7niz7xbJ**

Jadi connection string yang benar:

#### Session Mode (DIRECT_URL):
```
postgresql://postgres:VEIzHByK7niz7xbJ@db.tpbawvcjsmbhjqlgoihl.supabase.co:5432/postgres
```

#### Transaction Mode (DATABASE_URL):
```
postgresql://postgres:VEIzHByK7niz7xbJ@db.tpbawvcjsmbhjqlgoihl.supabase.co:6543/postgres
```

## 📝 Update File .env

Ganti isi file `.env` Anda dengan ini:

```env
# Database Configuration (Supabase)
# Transaction mode - untuk aplikasi (port 6543)
DATABASE_URL=postgresql://postgres:VEIzHByK7niz7xbJ@db.tpbawvcjsmbhjqlgoihl.supabase.co:6543/postgres

# Session mode - untuk migrations (port 5432)
DIRECT_URL=postgresql://postgres:VEIzHByK7niz7xbJ@db.tpbawvcjsmbhjqlgoihl.supabase.co:5432/postgres

# Authentication
BETTER_AUTH_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google AI (Gemini)
GOOGLE_AI_API_KEY=your_gemini_api_key_here
```

## 🔍 Perbedaan Penting

### ❌ Yang Salah (sekarang):
```
@aws-0-ap-southeast-1.pooler.supabase.com
```

### ✅ Yang Benar (seharusnya):
```
@db.tpbawvcjsmbhjqlgoihl.supabase.co
```

**Kenapa?**
- Format `aws-0-ap-southeast-1.pooler` adalah untuk Supavisor (pooler baru)
- Format `db.tpbawvcjsmbhjqlgoihl` adalah format standar yang lebih stabil
- Gunakan format standar dulu untuk development

## 🚀 Setelah Update .env

```bash
# Test koneksi
npm run db:push
```

Jika berhasil, Anda akan lihat:
```
✓ Pulling schema from database
✓ Pushing schema to database
✓ Done!
```

## 🔄 Alternatif: Gunakan Supabase Connection Pooler

Jika masih error, coba format ini:

```env
# Dengan pgbouncer
DATABASE_URL=postgresql://postgres.tpbawvcjsmbhjqlgoihl:VEIzHByK7niz7xbJ@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1

# Direct connection
DIRECT_URL=postgresql://postgres.tpbawvcjsmbhjqlgoihl:VEIzHByK7niz7xbJ@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres
```

## 📋 Checklist Troubleshooting

Jika masih error, cek:

- [ ] Password benar: `VEIzHByK7niz7xbJ`
- [ ] Host benar: `db.tpbawvcjsmbhjqlgoihl.supabase.co`
- [ ] Port benar: 5432 (direct) atau 6543 (pooled)
- [ ] Project masih aktif di Supabase
- [ ] Internet connection stabil
- [ ] Tidak ada typo di connection string

## 🆘 Jika Masih Error

### Option 1: Reset Database Password

1. Buka Supabase Dashboard
2. Settings → Database
3. Scroll ke "Database Password"
4. Klik "Reset database password"
5. Copy password baru
6. Update di `.env`

### Option 2: Cek di Supabase Dashboard

1. Buka Settings → Database
2. Lihat bagian "Connection string"
3. Pilih "URI"
4. Copy EXACT string yang ditampilkan
5. Ganti `[YOUR-PASSWORD]` dengan password Anda
6. Paste ke `.env`

### Option 3: Gunakan Connection Info Manual

Di Supabase Dashboard → Settings → Database, Anda akan lihat:

```
Host: db.tpbawvcjsmbhjqlgoihl.supabase.co
Database name: postgres
Port: 5432 (direct) atau 6543 (pooled)
User: postgres
Password: [your-password]
```

Susun manual:
```
postgresql://[User]:[Password]@[Host]:[Port]/[Database]
```

## 💡 Tips

1. **Gunakan format standar dulu** (`db.xxx.supabase.co`)
2. **Jangan pakai pooler** untuk development pertama kali
3. **Test dengan direct connection** (port 5432) dulu
4. **Pastikan tidak ada spasi** di connection string
5. **Restart terminal** setelah update .env

---

**Setelah fix, jalankan:**
```bash
npm run db:push
npm run db:seed
npm run dev
```
