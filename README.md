# صدقة جارية - Sadaqah Jariah

A beautiful Islamic app for Islamic recitations (tasbeeh) and remembrances (adhkar), built as a digital sadaqah jariah (ongoing charity) donation to honor and remember a loved one.

## Features

- **Electronic Tasbeeh Counter** - Count Islamic recitations with:
  - 7 different tasbeeh phrases
  - Individual counters for each phrase
  - Built-in target goals
  - Reset functionality
  - Haptic feedback on mobile devices

- **Islamic Remembrances** - A curated collection including:
  - Ayat Al-Kursi
  - Sayyid Al-Istighfar
  - Supplication for the deceased
  - Morning and evening remembrances

- **Features**:
  - RTL (Right-to-Left) support for Arabic text
  - Beautiful glassmorphism design
  - Responsive design for mobile and desktop
  - LocalStorage persistence for counts
  - Smooth animations and transitions
  - Premium Arabic fonts (Amiri, Aref Ruqaa, Cairo)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx           # Main app component with tasbeeh and adhkar
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind CSS imports
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
```

## How to Use

### Tasbeeh Counter Tab
1. Select a tasbeeh from the dropdown menu
2. Click the large circular button to increment the counter
3. Press the reset button (bottom-right) to reset the current counter
4. The total count is saved automatically

### Adhkar Tab
1. Browse through the collection of Islamic remembrances
2. Read each adhkar with proper Arabic diacritics
3. The app indicates how many times each adhkar should be recited

## Storage

All counts are automatically saved to your browser's LocalStorage:
- `sadaqahCounts` - Individual counters for each tasbeeh
- `sadaqahTotal` - Total count of all recitations

## Custom Colors

The app uses a carefully chosen color scheme:
- **Emerald** - Primary color scheme
- **Amber** - Accent color for highlights
- **Dark backgrounds** - For readability

## Arabic Fonts

The app includes three premium Google Fonts optimized for Arabic:
- **Aref Ruqaa** - Decorative Islamic font
- **Amiri** - Traditional serif font
- **Cairo** - Modern sans-serif font

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Notes for Deployment

When deploying to production:
1. Replace the placeholder background image URL in `App.jsx` (search for "Unsplash" comment)
2. Update the header information with appropriate details
3. Customize the adhkar list as needed

## License

Created as a sadaqah jariah (ongoing charity).

---

**صدقة جارية عن روح المغفور له بإذن الله**
*An ongoing charity for the soul of the deceased*
