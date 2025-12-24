# AI Writing Detector

A free educational tool that helps identify AI writing patterns and teaches users to write more authentically.

## 🎯 What This Is

This is a Next.js web application that analyzes text for common AI writing patterns based on Wikipedia's comprehensive "Signs of AI Writing" research document.

## 🚀 Features

- **8 Detection Categories:** AI vocabulary, emphasis phrases, promotional language, didactic disclaimers, section summaries, challenge patterns, negative parallelisms, and rule of three
- **Color-Coded Highlighting:** Visual feedback on AI patterns in text
- **Educational Focus:** Helps users learn to write more naturally
- **Mobile Responsive:** Works on all devices
- **Free Forever:** No signup, no costs, no limits

## 📁 Project Structure

```
ai-writing-detector-app/
├── app/
│   ├── detector/
│   │   └── page.js          # Detector tool page
│   ├── layout.js             # Root layout
│   ├── page.js               # Landing page
│   └── globals.css           # Global styles
├── components/
│   └── AIDetector.jsx        # Main detector component
├── public/                   # Static assets
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── DEPLOYMENT-GUIDE.md       # Step-by-step deployment instructions
```

## 🛠️ Technology Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel (recommended)

## 📖 Deployment

See `DEPLOYMENT-GUIDE.md` for complete step-by-step instructions for beginners.

### Quick Start for Developers:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to see the site locally.

## 🌐 Deploying to Vercel

1. Push this repository to GitHub
2. Import it in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Connect your custom domain in Vercel settings

## 📧 Email Capture Setup

The landing page includes an email capture form using Formspree:

1. Sign up at https://formspree.io (free)
2. Create a form
3. Get your form endpoint: `https://formspree.io/f/xxxxxxxx`
4. Update `app/page.js` line 274:
   ```javascript
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual form ID

## 🎨 Customization

### Update Your Information:

**Landing Page (`app/page.js`):**
- Line 102: Update LinkedIn URL
- Lines 94-109: Customize footer copy
- Lines 59-81: Modify hero section copy

**Email Sequence:**
Set up in your email marketing tool (ConvertKit, Mailchimp, etc.)

## 📊 Analytics Setup (Optional)

To add Google Analytics:

1. Get your GA4 measurement ID
2. Add to `app/layout.js` in the `<head>` section:
```javascript
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔒 Security

- All user input is HTML-escaped to prevent XSS
- No data leaves the browser
- No tracking or cookies (beyond what you add)
- Static site generation for security

## 📄 License

This project is created for Robert Merlo's business use.

## 👤 Author

Created by Robert Merlo
- EdTech veteran with 20+ years experience
- Professional development and enterprise sales specialist
- Career advisory expert

## 🤝 Support

For technical support or questions about deployment, refer to `DEPLOYMENT-GUIDE.md` or consult a developer.

---

**Ready to launch?** Follow the `DEPLOYMENT-GUIDE.md` to get your site live in 30 minutes!
