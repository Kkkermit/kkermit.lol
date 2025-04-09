# Kkermit.lol

A personal portfolio website with Discord integration, music player, and interactive UI elements.

## Features

- Real-time Discord status and activity display via Lanyard API
- Audio player with custom controls
- Interactive particle background
- Responsive design that works on mobile and desktop
- i18n support with multiple languages (English, Spanish, French)
- Interactive UI elements with animations and effects

## Project Structure

```
kkermit.lol/
├── ui/                  # Frontend React application
│   ├── src/             # Source code
│   │   ├── assets/      # Static assets (icons, images, audio)
│   │   ├── components/  # React components
│   │   ├── config/      # Configuration files
│   │   ├── i18n/        # Internationalization files
│   │   ├── interfaces/  # TypeScript interfaces
│   │   ├── link-container/ # External links
│   │   ├── store/       # Redux store
│   │   ├── styles/      # CSS and style files
│   │   └── utils/       # Utility functions
│   └── public/          # Public assets
```

## Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kkkermit/kkermit.lol.git
   cd kkermit.lol-new
   ```

2. Install dependencies:

   ```bash
   cd ui
   npm install
   ```

3. Configure your Discord ID in `ui/src/config/config.ts`:

   ```typescript
   export const discordId = "YOUR_DISCORD_ID"; // Replace with your Discord user ID
   ```

4. Configure your social links in `ui/src/link-container/links.ts`:

   ```typescript
   export const DISCORD_ID = "YOUR_DISCORD_ID";

   export const links = {
     github: "https://github.com/YOUR_GITHUB_USERNAME",
     discord: `https://discord.com/users/${DISCORD_ID}`,
     spotify: "https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME",
     lanyardApi: `https://lanyard.cnrad.dev/api/${DISCORD_ID}?bg=transparent`,
   };
   ```

## Development

Start the development server:

```bash
cd ui
npm run dev
```

The site will be available at `http://localhost:5173/`.

## Building for Production

Build the production version:

```bash
cd ui
npm run build
```

The compiled files will be in the `ui/dist/` directory.

## Testing

Run the test suite:

```bash
cd ui
npm test
```

## Customization

### Changing the Title and Description

Edit the translation files in `ui/src/i18n/locales/`:

```typescript
// For English: ui/src/i18n/locales/en.ts
const enTranslations = Object.freeze({
  app: Object.freeze({
    landing: Object.freeze({
      clickToEnter: "Click To Enter...",
    }),
    config: Object.freeze({
      title: "YOUR_TITLE",
      description: "YOUR_DESCRIPTION",
    }),
  }),
});
```

### Adding Music

Place your audio files in `ui/src/assets/music/` and update the audio selection in `ui/src/utils/audioUtils.ts`.

### Changing Theme Colors

Edit the color constants in `ui/src/utils/colorUtils.ts`:

```typescript
export const BG_COLOR = "rgba(18, 18, 18, 0.8)";
export const BG_COLOR_SECONDARY = "rgba(30, 30, 30, 0.8)";
export const BORDER_COLOR = "#333";
```

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Redux
- Vite
- i18next
- Jest (Testing)

## License

This project is licensed under the Apache License - see the LICENSE file for details.
