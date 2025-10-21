# 🚀 Deployment Guide - SMK Bina Mandiri Website

Panduan deployment ke production.

## 📋 Pre-Deployment Checklist

### 1. Code Review
- [ ] Semua fitur sudah ditest
- [ ] Tidak ada console.log yang tidak perlu
- [ ] Error handling sudah proper
- [ ] Loading states sudah ada
- [ ] Responsive di semua device

### 2. Environment Variables
- [ ] DATABASE_URL (production database)
- [ ] BETTER_AUTH_SECRET (strong random string)
- [ ] BETTER_AUTH_URL (production URL)
- [ ] NEXT_PUBLIC_BETTER_AUTH_URL (production URL)
- [ ] GOOGLE_AI_API_KEY (Gemini API key)

### 3. Database
- [ ] Schema sudah final
- [ ] Migrations sudah dibuat
- [ ] Seed data sudah disiapkan
- [ ] Backup strategy sudah ada

### 4. Security
- [ ] API keys tidak di-commit ke Git
- [ ] .env di .gitignore
- [ ] CORS configured properly
- [ ] Rate limiting (jika perlu)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### Advantages
- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Preview deployments
- ✅ Easy rollbacks

#### Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel**
- Go to https://vercel.com
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js

3. **Configure Environment Variables**

In Vercel dashboard, add:
```
DATABASE_URL=postgresql://user:pass@host:5432/db
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=https://yourdomain.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.vercel.app
GOOGLE_AI_API_KEY=your_gemini_key
```

4. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Your site is live! 🎉

5. **Setup Database**

Choose one:

**A. Vercel Postgres**
```bash
# In Vercel dashboard
Storage → Create Database → Postgres
# Copy connection string to DATABASE_URL
```

**B. Supabase**
```bash
# Create project at https://supabase.com
# Get connection string from Settings → Database
# Add to Vercel environment variables
```

**C. Neon**
```bash
# Create project at https://neon.tech
# Get connection string
# Add to Vercel environment variables
```

6. **Run Migrations**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Run migrations
vercel env pull .env.production
npm run db:push
npm run db:seed
```

7. **Custom Domain (Optional)**
- Go to Vercel dashboard → Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### Option 2: Railway

#### Steps

1. **Create Railway Account**
- Go to https://railway.app
- Sign up with GitHub

2. **New Project**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository

3. **Add PostgreSQL**
- Click "New" → "Database" → "PostgreSQL"
- Railway will create database automatically

4. **Configure Environment Variables**
```
DATABASE_URL=${{Postgres.DATABASE_URL}}
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=https://yourdomain.railway.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.railway.app
GOOGLE_AI_API_KEY=your_gemini_key
```

5. **Deploy**
- Railway will auto-deploy on push
- Get your URL from dashboard

### Option 3: Netlify

#### Steps

1. **Build Configuration**

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy**
- Go to https://netlify.com
- New site from Git
- Connect repository
- Add environment variables
- Deploy

### Option 4: Self-Hosted (VPS)

#### Requirements
- Ubuntu 22.04 LTS
- Node.js 18+
- PostgreSQL
- Nginx
- PM2

#### Steps

1. **Setup Server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Install Nginx
sudo apt install nginx

# Install PM2
sudo npm install -g pm2
```

2. **Setup Database**
```bash
sudo -u postgres psql
CREATE DATABASE smk_bina_mandiri;
CREATE USER smkadmin WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE smk_bina_mandiri TO smkadmin;
\q
```

3. **Clone & Build**
```bash
cd /var/www
git clone <your-repo-url> smk-bina-mandiri
cd smk-bina-mandiri
npm install
npm run build
```

4. **Environment Variables**
```bash
nano .env.production
# Add all environment variables
```

5. **Start with PM2**
```bash
pm2 start npm --name "smk-website" -- start
pm2 save
pm2 startup
```

6. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/smk-bina-mandiri
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/smk-bina-mandiri /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

7. **SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 🔄 CI/CD Setup

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📊 Post-Deployment

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Chatbot works
- [ ] Contact form submits
- [ ] Admin login works
- [ ] Dashboard accessible

### 2. Setup Monitoring
- [ ] Vercel Analytics
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring (UptimeRobot)
- [ ] Performance monitoring

### 3. SEO Setup
- [ ] Submit sitemap to Google
- [ ] Setup Google Search Console
- [ ] Add meta tags
- [ ] Setup Open Graph tags
- [ ] Add structured data

### 4. Backup Strategy
- [ ] Database backups (daily)
- [ ] Code backups (Git)
- [ ] Media backups
- [ ] Backup restoration test

## 🔧 Maintenance

### Regular Tasks
- Weekly: Check error logs
- Monthly: Update dependencies
- Quarterly: Security audit
- Yearly: Performance review

### Update Process
```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Run migrations
npm run db:push

# Rebuild
npm run build

# Restart (if self-hosted)
pm2 restart smk-website
```

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version
- Clear `.next` folder
- Check for TypeScript errors
- Verify all dependencies installed

### Database Connection Error
- Verify DATABASE_URL
- Check database is running
- Verify network access
- Check SSL requirements

### 500 Internal Server Error
- Check server logs
- Verify environment variables
- Check API routes
- Verify database connection

---

## 📞 Support

Need help with deployment?
- Check Vercel docs: https://vercel.com/docs
- Railway docs: https://docs.railway.app
- Contact: info@smkbinamandiri.sch.id
