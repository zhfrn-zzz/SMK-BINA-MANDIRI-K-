# ⚡ Quick Start - SMK Bina Mandiri Website

Get up and running in 5 minutes!

## 🚀 Super Quick Setup

```bash
# 1. Clone & Install
git clone <repo-url>
cd SMK-BINA-MANDIRI-K-
npm install

# 2. Setup Environment
cp .env.example .env
# Edit .env dengan konfigurasi Anda

# 3. Start Database (Docker)
npm run db:up

# 4. Setup Database
npm run db:generate
npm run db:push
npm run db:seed

# 5. Run Development Server
npm run dev
```

🎉 **Done!** Open http://localhost:3000

## 📝 Minimal .env Configuration

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
BETTER_AUTH_SECRET=any_random_string_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_AI_API_KEY=your_gemini_api_key
```

## 🔑 Get Gemini API Key (2 minutes)

1. Go to https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy and paste to `.env`

## 🧪 Test Everything

### Public Website
- ✅ Homepage: http://localhost:3000
- ✅ Jurusan: http://localhost:3000/departments
- ✅ PPDB: http://localhost:3000/spmb
- ✅ Kontak: http://localhost:3000/contact
- ✅ Chatbot: Click icon di kanan bawah

### Admin Dashboard
1. Sign up: http://localhost:3000/sign-up
2. Login: http://localhost:3000/sign-in
3. Dashboard: http://localhost:3000/dashboard

## 🎯 What's Included?

After seeding, you'll have:
- ✅ 3 Jurusan (TKJ, TSM, TKR)
- ✅ 2 Halaman statis (Sambutan Kepala Sekolah, HUBIN)
- ✅ 3 Sample staff
- ✅ 2 Sample aplikasi
- ✅ AI Chatbot ready to use

## 📚 Next Steps

1. **Customize Content**
   - Edit `lib/school-context.md` untuk chatbot
   - Update data via dashboard

2. **Add Your Data**
   - Add more staff
   - Update jurusan info
   - Add aplikasi sekolah

3. **Deploy**
   - See DEPLOYMENT.md for production setup

## 🆘 Common Issues

### Port 3000 in use?
```bash
# Change port
npm run dev -- -p 3001
```

### Database connection error?
```bash
# Check if PostgreSQL is running
npm run db:up

# Or use your local PostgreSQL
# Update DATABASE_URL in .env
```

### Chatbot not working?
- Make sure GOOGLE_AI_API_KEY is set in .env
- Restart dev server after changing .env

## 📖 Full Documentation

- **Setup Guide**: SETUP_GUIDE.md
- **Features**: FEATURES.md
- **Deployment**: DEPLOYMENT.md
- **Main README**: README_SMK.md

---

**Need help?** Check the full documentation or contact support.

Happy coding! 🎉
