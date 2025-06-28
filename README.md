# FYPL Linktree - FreshYear Program Leaders

A modern, responsive Linktree-style website built with React, TypeScript, and Tailwind CSS. This project showcases the FYPL (FreshYear Program Leaders) organization with team member profiles and important links.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Team Showcase**: Display all 15 team members with photos, roles, and social links
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Custom Branding**: FYPL-specific color scheme and typography
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling for rapid development
- **Performance Optimized**: Fast loading with Vite build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fypl-linktree
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
fypl-linktree/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Main header component
│   │   ├── MainButton.tsx  # Call-to-action button
│   │   ├── TeamGrid.tsx    # Team members grid
│   │   ├── TeamMemberCard.tsx # Individual team member card
│   │   └── LinksSection.tsx # Important links section
│   ├── data/               # Data files
│   │   ├── team.ts         # Team member data
│   │   └── links.ts        # Important links data
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles and Tailwind imports
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies and scripts
```

## 🎨 Customization

### Updating Team Members

Edit `src/data/team.ts` to update team member information:

```typescript
{
  name: 'Your Name',
  role: 'Your Role',
  photo: 'https://your-photo-url.jpg',
  socials: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    instagram: 'https://instagram.com/yourprofile',
  },
}
```

### Updating Links

Edit `src/data/links.ts` to update important links:

```typescript
{
  name: 'Link Display Name',
  url: 'https://your-link-url.com',
}
```

### Customizing Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'fypl-primary': '#532125', // Dark burgundy
  'fypl-accent': '#59282b',  // Lighter burgundy
  'fypl-white': '#ffffff',
  'fypl-gray': '#f8fafc',
}
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Team Section
- Responsive grid layout (1-5 columns based on screen size)
- Profile photos with online status indicator
- Social media links (LinkedIn, Instagram)
- Hover animations and smooth transitions

### Links Section
- Clean, accessible link design
- External link indicators
- Hover effects and smooth transitions

### Header
- Gradient background with brand colors
- Responsive typography
- Professional branding

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full layout with 5-column team grid
- **Tablet**: 3-4 column team grid
- **Mobile**: Single column layout with optimized spacing

## 🚀 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🎨 Design System

### Colors
- **Primary**: Dark Burgundy (#532125) - Used for main actions and highlights
- **Accent**: Lighter Burgundy (#59282b) - Used for secondary actions and gradients
- **White**: (#ffffff) - Background and text
- **Gray**: (#f8fafc) - Subtle backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Content slides up from below
- **Bounce In**: Playful scale animations
- **Hover Effects**: Interactive feedback on user actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Photos from [RandomUser.me](https://randomuser.me/)

---

Built with ❤️ for FreshYear Program Leaders
