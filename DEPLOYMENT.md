# 🚀 CyberNow Deployment Guide

## Vercel + Backend Deployment Strategy

This guide will help you deploy CyberNow to production using Vercel (frontend) + your choice of backend hosting.

---

## Frontend Deployment: Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to**: https://vercel.com/new
2. **Select**: "Import Git Repository"
3. **Choose**: `devashishsingh/CyberNow`
4. **Click**: "Deploy"
5. **Wait**: ~2-3 minutes for build and deployment

Vercel will automatically:
- Build with `npm run build`
- Start with `npm start`
- Configure Node.js environment
- Set up SSL/HTTPS automatically

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd cybernow-frontend
vercel
```

---

## Environment Variables Setup

### In Vercel Dashboard

After deployment, set production environment:

1. Go to: **Settings** → **Environment Variables**
2. Add the following variable:

```
Name:  NEXT_PUBLIC_API_BASE_URL
Value: https://your-backend-domain.com/api/v1
Environments: Production
```

3. Click **Save and Redeploy**

### During Development

Create `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

---

## Backend Deployment Options

Choose the platform that best fits your needs:

### 1. **Railway.app** (Recommended - Simple & Affordable)

```bash
# 1. Sign up: https://railway.app
# 2. Install Railway CLI
npm install -g @railway/cli

# 3. Login
railway login

# 4. Deploy backend
cd cybernow-backend
railway up

# 5. Get your URL from Railway dashboard
# Use this as NEXT_PUBLIC_API_BASE_URL in Vercel
```

**Pricing**: ₹500/month free tier (more than enough for MVP)

---

### 2. **Render.com** (Free Tier Available)

```bash
# 1. Go to: https://render.com
# 2. Click "New +"
# 3. Select "Web Service"
# 4. Connect GitHub
# 5. Select cybernow-backend folder
# 6. Configure:
#    - Environment: Node
#    - Build Command: npm install
#    - Start Command: npm start
# 7. Deploy
```

**Pricing**: Free tier available ($0-7/month)

---

### 3. **Heroku** (Traditional Choice)

```bash
# 1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
# 2. Login
heroku login

# 3. Create app
cd cybernow-backend
heroku create cybernow-api

# 4. Deploy
git push heroku master

# 5. Get URL: heroku apps:info cybernow-api
```

**Pricing**: Free tier deprecated (now ₹500/month minimum)

---

### 4. **Fly.io** (Modern, Global)

```bash
# 1. Sign up: https://fly.io
# 2. Install Fly CLI
curl -L https://fly.io/install.sh | sh

# 3. Deploy
cd cybernow-backend
flyctl launch
flyctl deploy
```

**Pricing**: ₹500/month free tier

---

## Complete Deployment Checklist

### Frontend (Vercel)
- [ ] Push code to GitHub
- [ ] Go to vercel.com/new
- [ ] Import CyberNow repository
- [ ] Click "Deploy"
- [ ] Wait for build completion
- [ ] Copy your Vercel URL (e.g., `cybernow.vercel.app`)

### Backend (Choose One Platform)
- [ ] Sign up for hosting platform
- [ ] Deploy cybernow-backend code
- [ ] Get API URL (e.g., `https://cybernow-api.railway.app`)
- [ ] Test API endpoints

### Configuration
- [ ] Copy your backend API URL
- [ ] Go to Vercel dashboard → Settings → Environment Variables
- [ ] Add `NEXT_PUBLIC_API_BASE_URL` with your backend URL
- [ ] Click "Save and Redeploy"
- [ ] Wait for production deployment

### Testing
- [ ] Visit your Vercel URL in browser
- [ ] Test registration flow
- [ ] Verify TOTP QR code generation
- [ ] Test login with generated ID
- [ ] Check dashboard loads correctly

---

## Monitoring & Logs

### Vercel Logs
```bash
# View deployment logs
vercel logs

# Follow real-time logs
vercel logs --follow
```

### Backend Logs (Railway)
```bash
railway logs
```

### Backend Logs (Render)
- Dashboard → Services → cybernow-backend → Logs

---

## Troubleshooting

### Issue: "CORS error" or "Failed to connect to API"

**Solution**: Update `NEXT_PUBLIC_API_BASE_URL` in Vercel:
1. Vercel Dashboard → Settings → Environment Variables
2. Update the URL to your actual backend domain
3. Click "Save and Redeploy"

### Issue: "Build failed"

**Solution**: Check the build logs:
```bash
vercel logs --follow
```

Common fixes:
- Ensure `npm install --legacy-peer-deps` is used
- Check TypeScript errors: `npm run type-check`
- Verify Node version: Node 18+

### Issue: "QR code not loading" or "Can't scan"

**Solution**: Backend might be down. Check:
1. Backend URL is accessible: `curl https://your-backend-url/api/v1/health`
2. CORS is enabled in backend
3. Environment variable is correct in Vercel

---

## Performance Tips

### Vercel Optimizations
```javascript
// next.config.js already includes:
- Image optimization
- SWC minification
- Webpack optimizations
```

### Build Size
```bash
# Check bundle size
npm run build
# Next.js will show: "○ (Static) | (Prerendered)"
```

### Expected Build Time
- First build: 2-4 minutes
- Subsequent builds: 30-60 seconds

---

## Custom Domain Setup

### Connect Custom Domain to Vercel

1. Go to Vercel dashboard
2. Select your project
3. Click "Settings" → "Domains"
4. Add your domain (e.g., `cybernow.io`)
5. Follow DNS configuration instructions

### SSL Certificate
- Vercel provides free SSL automatically via Let's Encrypt
- Takes 24-48 hours for certificate issuance
- Redirects HTTP → HTTPS automatically

---

## Database Setup (Future)

When you're ready to add a real database:

```bash
# Option 1: Railway PostgreSQL
railway add  # Select PostgreSQL addon

# Option 2: Supabase (PostgreSQL + Auth)
# Sign up at https://supabase.com
# Get connection string and add to env

# Option 3: MongoDB Atlas
# Sign up at https://mongodb.com/cloud/atlas
# Create cluster and get connection string
```

---

## Cost Estimate (Monthly)

| Service | Cost | Notes |
|---------|------|-------|
| **Vercel** | $0-20 | Free tier covers most use cases |
| **Railway Backend** | ₹0-500 | Free tier with ₹500 limit |
| **Domain** | ₹500-1000 | .io or .com domain |
| **Total** | ₹500-3000 | Very affordable for MVP |

---

## Quick Deploy Commands

```bash
# 1. Make changes locally
git add -A
git commit -m "feat: add new feature"
git push origin master

# 2. Vercel auto-deploys (within 1-2 minutes)

# 3. If backend changed, redeploy backend
cd cybernow-backend
railway up
# or
flyctl deploy

# 4. Done! Check your domain
# cybernow.vercel.app
```

---

## Next Steps

1. ✅ Code is already pushed to GitHub
2. ⏭️ Deploy frontend to Vercel (click "Deploy")
3. ⏭️ Deploy backend to Railway/Render
4. ⏭️ Update environment variables
5. ⏭️ Test the complete flow
6. ⏭️ Monitor logs and performance

---

**That's it!** Your CyberNow platform will be live in production in ~10 minutes! 🚀

For questions: support@cybernow.io
