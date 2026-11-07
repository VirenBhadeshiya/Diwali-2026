# ✨ A Cinematic Diwali Celebration for Nandita Jayswal

An extraordinary, luxury-quality, cinematic single-page Diwali greeting website created exclusively for **Nandita Jayswal**. Built with modern HTML5, CSS3, ES6+ JavaScript, Canvas particle engines, and the Web Audio API.

---

## 🏛️ Project Directory Structure

```
diwali-nandita/
├── assets/
│   ├── PLACE_YOUR_VIDEO_HERE.txt  # Video placement guide
│   ├── fireworks.mp4              # [DROP YOUR VIDEO HERE] (or .webm / .mov)
│   ├── festive-music.mp3          # [OPTIONAL] Custom background music track
│   └── og-preview.svg             # Luxury WhatsApp/iMessage preview card
├── index.html                     # Semantic markup & OpenGraph tags
├── styles.css                     # Haute Deepawali luxury styling system
├── script.js                      # Particle engine, sound synthesizer & ceremony logic
├── robots.txt                     # Strict crawler block for private link sharing
└── README.md                      # Complete guide & private deployment instructions
```

---

## 🎬 Step 1 — Adding Your Fireworks Video

1. Copy your fireworks video file into:
   ```
   diwali-nandita/assets/fireworks.mp4
   ```
   *(Also accepts `fireworks.webm` or `fireworks.mov`)*

2. **Video Handling Specs**:
   - **Quality**: Preserves native 1080p and 4K Ultra-HD resolution.
   - **Aspect Ratio**: Full responsive scaling (`object-fit: cover`) ensures that whether your video is vertical (9:16 portrait filmed on a smartphone) or horizontal (16:9 cinematic landscape), it fills mobile and desktop screens edge-to-edge without distortion or stretching.
   - **Hardware Acceleration**: Video rendering uses `translateZ(0)` for 60fps GPU acceleration.
   - **Fallback**: While awaiting your video file, the website runs a procedural golden fireworks canvas so you can test the greeting immediately!

---

## 🌟 Choreographed Experience Journey

1. **Step 2 — The Cinematic Opening Portal**:
   - Opens with a regal "Curtain of Light" displaying an ornate gold Diya mandala and the dedication:
     *"Crafted Exclusively For Nandita Jayswal"*.
   - A gold-illuminated button: **"Experience The Celebration"**.
   - Tapping initializes audio and starts the fireworks video seamlessly, bypassing restrictive mobile autoplay blocks.

2. **Step 3 — Hero Background & Atmospheric Transformation**:
   - As the video plays, smooth radial vignettes and golden dust particles float upward.
   - As Nandita scrolls, the background gracefully transitions with a soft cinematic blur (`backdrop-filter: blur(2.5px)`), keeping the fireworks ambient while ensuring the personalized text is crisp and readable.

3. **Step 4 — The Main Headline**:
   - Exact required headline:
     ```
     WISH YOU A
     HAPPY DIWALI
     NANDITA JAYSWAL
     ```
   - "NANDITA JAYSWAL" is illuminated with a shimmering metallic gold foil animation and soft radiant backlight.

4. **Step 5 — The Bespoke Friendship Letter (118 Words)**:
   > *"Nandita,*
   > 
   > *As the golden lights of Diwali brighten the skies, I wanted to send you my warmest festive wishes and celebrate the wonderful friendship we share. Having a good friend like you brings so much positive energy, genuine laughter, and great memories.*
   > 
   > *May this Diwali illuminate your path with immense happiness, radiant health, peace of mind, and continuous success in everything you pursue. May the coming year open up exciting new opportunities, rewarding journeys, and every goal you work toward.*
   > 
   > *Through every milestone and new chapter, may you always be surrounded by uplifting moments, good company, and great achievements.*
   > 
   > *Here is to lasting friendship, memorable celebrations, and a truly fantastic year ahead. Wishing you a very Happy Diwali 2026!*
   > 
   > **Warmest Wishes & Best Regards,**  
   > **Deepawali 2026**"

5. **Step 6A — Four Pillars of Light**:
   - **Prakash** (Guiding Radiance)
   - **Samriddhi** (Boundless Prosperity)
   - **Shanti** (Serenity & Poise)
   - **Anandam** (Infinite Joy)

6. **Step 6B — The Interactive Diya Ceremony**:
   - An interactive brass diya: *"Touch to Light the Sacred Diya for Nandita"*.
   - On tap/touch:
     - The diya flame bursts to life.
     - 80 golden stardust sparks burst across the screen.
     - An ethereal bell/chime harmonizes via the Web Audio API.
     - Mobile haptic vibration is triggered.
     - Status updates to: *"Your Diya glows bright with everlasting warmth."*

7. **Step 6C — Closing Dedication & Action Bar**:
   - Warmest wishes sign-off.
   - Quick action buttons: **Relive Experience** (smooth scroll to top) and **Share Link**.

8. **Step 8 — Audio & Fireworks Synchronization**:
   - Includes a persistent floating Sound button with animated equalizer bars.
   - Dual audio engine: unnmutes video audio when enabled, and includes a built-in Web Audio API synthesizer that plays warm tanpura drones and pentatonic temple chimes without needing heavy MP3 downloads!

---

## 🔒 Step 10 — Private Sharing & Instant Deployment Guide

You want a single private link to send Nandita via WhatsApp, SMS, or iMessage. Here are the simplest, 100% free ways to host it:

### Option A: Netlify Drop (Fastest — 30 Seconds, No Code / No Account Needed)
1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag and drop the `diwali-nandita` folder into the upload box.
3. Netlify will instantly create an HTTPS URL (e.g. `https://festive-nandita-celebration.netlify.app`).
4. Click **Site configuration** to customize the domain name to something personal (e.g. `https://happy-diwali-nandita.netlify.app`).
5. Send this link directly to Nandita!

### Option B: Vercel
1. Open [https://vercel.com/new](https://vercel.com/new).
2. Drag and drop the folder or link your GitHub repo.
3. Instant deployment with 4K-ready CDN.

### Option C: GitHub Pages
1. Push the folder to a GitHub repository (can be unlisted or public).
2. Go to **Settings > Pages > Deploy from branch (main / root)**.
3. Access at `https://<username>.github.io/<repo-name>/`.

---

## 🛡️ Privacy & Confidentiality Notice

- **Robots No-Index**: The website includes `<meta name="robots" content="noindex, nofollow, noarchive">` and a `robots.txt` file preventing Google, Bing, and other search engines from indexing or listing the page.
- **Obfuscated Link**: Since search engines will not index it, nobody can find the website unless you share the exact URL with them.
- **Important Privacy Reality**: An unlisted URL is private from search engines, but anyone with the link can view it. Never share sensitive personal credentials on any public static host. For Nandita, sharing the private link directly in her private WhatsApp or Messages chat provides the ideal intimate surprise experience.

---

## 📱 WhatsApp / iMessage Rich Card Preview

When you paste the link to Nandita on WhatsApp or iMessage, it will automatically render a preview card with:
- **Title**: `Happy Diwali, Nandita Jayswal ✨`
- **Description**: `A private cinematic celebration crafted exclusively for you.`
- **Preview Image**: Golden Diya crest (`assets/og-preview.svg`).

