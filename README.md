# Ashmitha's Modern Portfolio Website

A stunning, modern portfolio website inspired by Google's Material Design principles. Built with HTML5, Bootstrap 5, and vanilla JavaScript with glassmorphism and neumorphism design elements.

## 🎨 Features

### Design & Aesthetics
- Clean, minimal layout with generous white space
- Soft shadows and floating card elements (subtle elevation)
- Smooth, rounded corners throughout
- Light color palette with pastel accents (blues, purples, soft gradients)
- Hybrid glassmorphism + neumorphism design (subtle, not overdone)
- Fully responsive and mobile-optimized

### Interactive Elements
- Smooth micro-interactions and animations
- Hover effects with elevation changes
- Soft transitions (300ms ease-in-out)
- Floating animated shapes in hero section
- Scroll-triggered animations
- Active navigation indicators

### Sections

#### 1. **Hero Section**
- Large, impactful heading with gradient text
- Engaging tagline and description
- Dual CTA buttons (View Work, Contact)
- Animated floating UI elements and abstract shapes

#### 2. **About Section**
- Circular profile image with gradient border
- Short professional bio
- Comprehensive skills displayed as pill-shaped tags
- Profile card with hover animations

#### 3. **Projects Section**
- Card-based layout with gradient backgrounds
- Project thumbnails, titles, and descriptions
- Technology badges for each project
- Interactive "View Case Study" buttons
- Hover animations with elevation effects

#### 4. **Case Studies**
- Detailed modal-based case study presentations
- Problem → Process → Solution → Outcome storytelling
- Technology stacks highlighted
- Impact metrics and outcomes

#### 5. **Contact Section**
- Multi-method contact options (email, phone)
- Social media links (LinkedIn, GitHub)
- Minimal contact form
- Glassmorphic design with backdrop blur

#### 6. **Navigation Bar**
- Fixed, glassmorphic navbar
- Smooth active link indicators
- Mobile-responsive hamburger menu
- Gradient brand text

## 🛠 Tech Stack

- **Frontend:** HTML5, Bootstrap 5, CSS3
- **JavaScript:** Vanilla JS (no dependencies required)
- **Fonts:** Google Fonts (Inter, Poppins)
- **Design System:** Material Design principles
- **Icons & Emojis:** Unicode emojis for visual accent

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Custom CSS with Material Design styling
├── script.js           # JavaScript for interactions and animations
├── README.md          # This file
└── assets/            # (Optional) Folder for images, icons, etc.
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code recommended)
- Python's built-in server or any local server (optional, for development)

### Installation

1. **Clone or download the project:**
   ```bash
   # If using git
   git clone <repository-url>
   cd portfolio
   
   # Or simply download the files
   ```

2. **Open in browser:**
   - Double-click `index.html` to open directly
   - Or use a local server for better development experience:

   ```bash
   # Using Python
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

### Customization

#### Update Personal Information
Edit `index.html` and replace:
- Name in hero section
- Email and phone in contact section
- Social media links (LinkedIn, GitHub, etc.)

#### Edit Colors & Branding
Modify CSS variables in `styles.css` (lines 8-18):
```css
:root {
    --primary-color: #5B7FFF;        /* Change primary blue */
    --secondary-color: #9D4EDD;      /* Change purple accent */
    /* ... other colors ... */
}
```

#### Add Projects
1. Edit `index.html` - duplicate a project card in the Projects section
2. Update project title, description, and technologies
3. In `script.js`, add a new case study object to the `caseStudies` object

#### Customize Case Studies
Add or edit case studies in `script.js`:
```javascript
const caseStudies = {
    'your-project-id': {
        title: 'Project Title',
        category: 'Category',
        duration: 'Duration',
        overview: `<div>...</div>`,
        problem: `<div>...</div>`,
        solution: `<div>...</div>`,
        outcome: `<div>...</div>`,
        tech: ['Tech1', 'Tech2']
    }
};
```

## 🎯 Key Design Decisions

### Color Palette
- **Primary:** Rich blue (#5B7FFF) - modern, professional
- **Secondary:** Soft purple (#9D4EDD) - creative accent
- **Accent:** Soft pink (#E0AAFF) - subtle highlights
- **Background:** Off-white (#FAFBFF) - reduces eye strain
- **Text:** Dark navy (#1A1A2E) - maintains readability

### Typography
- **Headings:** Poppins - bold, modern, distinctive
- **Body:** Inter - clean, highly readable, minimalist
- **Hierarchy:** Strong visual distinction between heading levels

### Animation Principles
- All animations use cubic-bezier(0.4, 0, 0.2, 1) for natural feel
- Transition duration: 300ms standard (150ms for quick interactions)
- Subtle scale and translate effects for depth
- No jarring or distracting animations

### Spacing System
- Consistent spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Generous white space around sections
- Padding consistency within cards and components

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop:** 1200px+ (full features, optimized layout)
- **Tablet:** 768px - 1199px (adjusted spacing, single-column sections)
- **Mobile:** Under 768px (stacked layout, touch-friendly buttons)

## ⚡ Performance Optimizations

- Minimal external dependencies (only Bootstrap CSS)
- Self-hosted Google Fonts via CDN
- Optimized CSS with variable-based theming
- Lightweight vanilla JavaScript
- CSS animations use transform and opacity (GPU-accelerated)
- Lazy loading concepts for images (when added)

## 🎓 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Details from Resume

The portfolio is pre-populated with information from Ashmitha B's resume:

- **Education:** B.Tech CSBS from K.S. Rangsamy College (CGPA: 7.06%)
- **Internships:**
  - Informatronics Project Service (Feb 2025 - Mar 2025) - Web Development
  - TechCohort Solutions (Aug 2024 - Oct 2024) - Full Stack Development
- **Projects:**
  - College Hub System (HTML, CSS, JS, Python, MySQL)
  - Library Management System (MongoDB, Express, React, Node.js)
- **Skills:** Java, HTML/CSS, JavaScript, React, Flask, MongoDB, MySQL, Bootstrap
- **Certifications:** 
  - Krun Hackathon Participation
  - Java Mastery Udemy Certificate
  - Introduction to IoT - NPTEL Certificate

## 🔐 Contact Information

- **Email:** ashmithab.vaneshwaran@gmail.com
- **Phone:** +91 903 437 1419
- **LinkedIn:** [Ashmitha B](https://www.linkedin.com/in/ashmitha-b-9636a5203/)
- **GitHub:** [Ashmitha B](https://github.com/Ashmithabuvaneshwaran/)

## 🚀 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository named `username.github.io`
2. Push these files to the repository
3. Visit `https://username.github.io` in your browser

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty - static site)
3. Set publish directory: `/` (root)
4. Deploy!

### Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Vercel auto-detects it's a static site
4. Deploy!

## 🔧 Development Tips

1. **Testing Responsiveness:**
   - Use browser DevTools (F12)
   - Test at 320px, 768px, 1024px, 1440px widths

2. **Customizing Animations:**
   - Adjust animation durations in CSS variables
   - Change easing functions as needed
   - Disable animations in `prefers-reduced-motion` media query

3. **Adding New Sections:**
   - Follow the established spacing pattern (100px padding)
   - Use the section-title and section-subtitle classes
   - Apply consistent shadow and border styling

4. **Form Validation:**
   - Currently validates HTML5 form attributes
   - For backend integration, update the form submission handler in `script.js`

## 📚 Learning Resources

- [Material Design Guidelines](https://material.io)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/using-css-custom-properties)
- [Web Animation Performance](https://web.dev/animations-guide/)

## 🎉 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add filter functionality to projects
- [ ] Lazy load images
- [ ] Add testimonials/recommendations section
- [ ] Integration with backend for form submission
- [ ] Add downloadable resume
- [ ] Implement newsletter signup
- [ ] Add more case studies
- [ ] SEO optimization

## 📄 License

This portfolio template is open for personal and commercial use.

## 💬 Feedback

If you have suggestions or improvements, feel free to fork, modify, and enhance this portfolio!

---

**Built with ❤️ and 🎨 using Modern Web Technologies**

Last Updated: February 2026
