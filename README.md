# DealSpot AI - Static Website

Professional static website for DealSpot AI, designed for Facebook business verification and public presence.

## Overview

This is a modern, responsive static website built with HTML5, CSS3, and vanilla JavaScript. The site showcases DealSpot AI's vision, features, and includes all necessary legal pages for Facebook business verification.

## Features

- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design** - Gradient colors, smooth animations, professional layout
- ⚡ **Fast Loading** - Optimized CSS and minimal JavaScript
- 🔒 **SEO Optimized** - Proper meta tags, Open Graph, and Twitter Card support
- ✅ **Facebook Verification Ready** - Includes privacy policy, terms of service, and contact information
- 🎯 **Accessible** - Semantic HTML and ARIA labels

## Pages Included

1. **index.html** - Homepage with hero, vision, features, and industries
2. **about.html** - Company information, mission, vision, and technology stack
3. **contact.html** - Contact form with business details and FAQ
4. **privacy.html** - GDPR/CCPA compliant privacy policy
5. **terms.html** - Comprehensive terms of service

## Project Structure

```
dealspot-website/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript for interactivity
├── images/                 # Image assets (see ASSETS.md)
│   ├── logo.svg
│   ├── hero.webp
│   ├── og-image.jpg
│   ├── favicon.png
│   └── features/
├── ASSETS.md               # Image requirements and sources
└── README.md               # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No framework dependencies
- **Lucide Icons** - Modern icon system (loaded via CDN)

## Prerequisites

Before deploying, you'll need:

1. **Domain**: dealspot.ai (already registered in Cloudflare)
2. **GitHub Account**: For version control and Cloudflare Pages integration
3. **Cloudflare Account**: For hosting (already set up)
4. **Images**: See ASSETS.md for required images and sources

## Setup Instructions

### 1. Add Your Business Information

Before deployment, update the following files with your actual business information:

**Contact Information** (in all files):
- Replace `contact@dealspot.ai` with your actual email
- Add phone number if available
- Add physical address if available

**Legal Pages**:
- Review `privacy.html` and update company-specific information
- Review `terms.html` and update company-specific information
- Add your privacy/legal email addresses

### 2. Add Images

See `ASSETS.md` for detailed instructions on where to get and how to add images.

Required images:
- `images/logo.svg` - Company logo
- `images/hero.webp` - Hero section image
- `images/og-image.jpg` - Social media preview (1200x630px)
- `images/favicon.png` - Browser favicon (32x32px or 64x64px)

### 3. Set Up Email Functionality

The contact form currently shows a success message but doesn't send emails. To enable email functionality:

**Option A: Use a Form Service (Recommended for Quick Setup)**

1. Sign up for a service like:
   - [Formspree](https://formspree.io/) (Free tier available)
   - [FormSubmit](https://formsubmit.co/) (Completely free)
   - [Basin](https://usebasin.com/) (Free tier available)

2. Update the form action in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

**Option B: Use Cloudflare Workers (Advanced)**

Create a Cloudflare Worker to handle form submissions and send emails via an API like SendGrid or Mailgun.

## Deployment to Cloudflare Pages

### Method 1: Via GitHub (Recommended)

**Step 1: Create GitHub Repository**

```bash
# Navigate to the website directory
cd dealspot-website

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: DealSpot AI website"

# Create repository on GitHub (via web interface)
# Then push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/dealspot-website.git
git branch -M main
git push -u origin main
```

**Step 2: Connect to Cloudflare Pages**

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account
7. Select your `dealspot-website` repository
8. Configure build settings:
   - **Project name**: dealspot-ai-website
   - **Production branch**: main
   - **Build command**: (leave empty for static HTML)
   - **Build output directory**: `/` (root directory)
9. Click **Save and Deploy**

**Step 3: Configure Custom Domain**

1. After deployment completes, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `dealspot.ai`
5. Cloudflare will automatically:
   - Configure DNS records
   - Provision SSL certificate
   - Enable HTTPS

**Your site will be live at https://dealspot.ai within 1-2 minutes!**

### Method 2: Direct Upload (Quick Start)

**Step 1: Prepare Files**

```bash
# Create a zip file of all website files
cd dealspot-website
zip -r dealspot-website.zip .
```

**Step 2: Upload to Cloudflare Pages**

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Upload assets**
6. Name your project: `dealspot-ai-website`
7. Drag and drop your files or select the zip file
8. Click **Deploy site**

**Step 3: Configure Custom Domain**

Same as Method 1, Step 3 above.

## Post-Deployment Tasks

### 1. Verify SSL Certificate

- Visit https://dealspot.ai
- Check that the padlock icon appears in the browser
- Verify SSL certificate is valid

### 2. Test All Pages

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] About page displays properly
- [ ] Contact form shows success message
- [ ] Privacy policy is accessible
- [ ] Terms of service is accessible
- [ ] Mobile responsive design works
- [ ] All images load (if added)
- [ ] Icons display correctly

### 3. Test Forms

- [ ] Email signup form (homepage)
- [ ] CTA signup form
- [ ] Contact form validation works
- [ ] Form submission shows success message

### 4. SEO Verification

- [ ] Open Graph preview works on Facebook
- [ ] Twitter Card preview works
- [ ] All meta tags are present
- [ ] Sitemap created (optional)

### 5. Set Up Email

- [ ] Create contact@dealspot.ai email address
- [ ] Configure email forwarding if needed
- [ ] Test contact form (if email service configured)

### 6. Google Search Console (Optional)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: https://dealspot.ai
3. Verify ownership via DNS or HTML file
4. Submit sitemap (if created)

## Facebook Business Verification Preparation

Before submitting for Facebook business verification:

### Pre-Verification Checklist

- [ ] Website live for 30+ days (recommended)
- [ ] Privacy Policy page accessible
- [ ] Terms of Service page accessible
- [ ] Contact information matches business documents exactly
- [ ] Business name appears on website
- [ ] Professional appearance (no "under construction")
- [ ] HTTPS enabled
- [ ] All pages functional
- [ ] Contact email on verified domain (contact@dealspot.ai)

### Domain Verification in Meta Business Manager

1. Log in to [Meta Business Manager](https://business.facebook.com/)
2. Go to **Business Settings** → **Brand Safety** → **Domains**
3. Click **Add** and enter: `dealspot.ai`
4. Choose verification method:
   - **DNS Verification** (Recommended): Add TXT record to Cloudflare DNS
   - **HTML File Upload**: Upload verification file to website root
   - **Meta Tag**: Add meta tag to `<head>` of index.html
5. Complete verification

## Updating the Website

### Via GitHub (if using Method 1)

```bash
# Make changes to files
# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Cloudflare Pages will automatically deploy
```

### Via Direct Upload (if using Method 2)

1. Go to Cloudflare Pages project
2. Click **Create a new deployment**
3. Upload updated files
4. Cloudflare will deploy the new version

## Troubleshooting

### Website Not Loading

- Check DNS settings in Cloudflare
- Verify SSL certificate status
- Check Cloudflare Pages deployment status

### Images Not Displaying

- Verify images are in the correct directory
- Check file paths in HTML (should be `/images/filename.ext`)
- Ensure image files are uploaded

### Form Not Working

- Check browser console for JavaScript errors
- Verify form service is configured (if using Formspree, etc.)
- Test with browser's network tab

### Custom Domain Not Working

- DNS propagation can take up to 24-48 hours
- Verify DNS records in Cloudflare:
  - Type: CNAME
  - Name: `@` or `dealspot.ai`
  - Target: `dealspot-ai-website.pages.dev` (your Cloudflare Pages domain)

## Performance Optimization

The website is already optimized for performance:

- ✅ Minimal CSS and JavaScript
- ✅ No external dependencies (except Lucide icons)
- ✅ CSS variables for theming
- ✅ Optimized images (WebP format recommended)
- ✅ Lazy loading for images
- ✅ Cloudflare CDN for fast delivery worldwide

### Further Optimizations (Optional)

1. **Minify CSS**: Use a tool like cssnano
2. **Minify JavaScript**: Use a tool like Terser
3. **Image Optimization**: Use tools like Squoosh or ImageOptim
4. **Add Sitemap**: Create sitemap.xml for better SEO
5. **Add robots.txt**: Configure search engine crawling

## Security Features

- ✅ HTTPS by default (Cloudflare SSL)
- ✅ Content Security Policy headers (via Cloudflare)
- ✅ XSS protection
- ✅ CSRF protection
- ✅ No external scripts (except Lucide icons CDN)
- ✅ Form validation

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website code is proprietary to DealSpot AI. All rights reserved.

## Support

For questions or issues:
- Email: contact@dealspot.ai
- GitHub Issues: (if repository is public)

## Changelog

### Version 1.0.0 (January 2025)
- Initial release
- Homepage with hero, vision, features, and industries sections
- About page with company information and roadmap
- Contact page with form and FAQ
- Privacy policy (GDPR/CCPA compliant)
- Terms of service
- Mobile-responsive design
- SEO optimization
- Facebook verification ready

---

**Built with ❤️ for DealSpot AI**
