# Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git repository set up
- Vercel/Netlify account (recommended)

## Environment Variables

Create a `.env` file in the root directory:

```env
# Google Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# EmailJS (Already configured in Contact.tsx)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build for Production

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build locally
npm run preview
```

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables in Settings
6. Click "Deploy"

## Deploy to Netlify

### Option 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod
```

### Option 2: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables in Site settings
6. Click "Deploy site"

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/PortfolioWebsite",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/PortfolioWebsite/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify contact form works
- [ ] Check Google Analytics is tracking
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify SEO meta tags
- [ ] Test accessibility features
- [ ] Check all images load correctly
- [ ] Verify resume PDF is accessible

## Performance Optimization

After deployment:
1. Enable compression (Gzip/Brotli)
2. Set up CDN caching
3. Configure cache headers
4. Enable HTTP/2
5. Monitor Core Web Vitals

## Monitoring

- **Google Analytics**: Track visitor behavior
- **Vercel Analytics**: Monitor performance metrics
- **Google Search Console**: Track SEO performance
- **Lighthouse CI**: Automated performance testing

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### Images Not Loading
- Verify images are in `/public` folder
- Check file paths are correct
- Ensure images are committed to Git

### Environment Variables Not Working
- Prefix with `VITE_` for Vite projects
- Restart dev server after adding variables
- Check deployment platform settings

## Support

For issues or questions:
- Check the [Vite documentation](https://vitejs.dev)
- Review deployment platform docs
- Open an issue on GitHub
