# ALX Coffee Shop App

Mobile ordering experience for a specialty coffee brand, inspired by the community Figma concept shared in the [Coffee Shop Mobile App design](https://www.figma.com/design/RhP1APTkYyHY3DTClVv5gU/Coffee-Shop-Mobile-App-Design--Community-?node-id=421-1289).

## Tech Stack

- **Expo Router** for file-based navigation and typed routes
- **NativeWind (Tailwind CSS)** for utility-first styling and rapid visual iteration
- **React Native Reanimated / Gesture Handler** (installed via Expo template) for future motion interactions
- **TypeScript** for type safety across shared data models

## Implementation Process

1. **Project scaffolding**
   - Duplicated the Expo Router starter and renamed it to `alx-coffee-shop-app`.
   - Updated `package.json`, `app.json`, and Metro/Babel configs to ensure NativeWind and the new bundle identifier were applied globally.

2. **Styling system**
   - Enabled NativeWind by wiring the Tailwind preset into `tailwind.config.js`, loading `styles/global.css` from `app/_layout.tsx`, and pointing Metro at the generated stylesheet.
   - Added a custom coffee color palette (`coffee.primary`, `coffee.dark`, `coffee.cream`) used across screens for consistent theming.

3. **Design translation**
   - Studied the hero, card, and tab patterns from the Figma reference.
   - Built reusable primitives inside `src/components` (category pills, coffee cards, section headers, story tiles) to mirror the compositional blocks from the design.
   - Authored typed data models (`src/types`) plus fixtures (`src/constants/coffee.ts`) to populate the UI and keep fake content centralized.

4. **Navigation flow**
   - Replaced the legacy stack with a five-tab layout (`Home`, `Favorites`, `Cart`, `Orders`, `Profile`) and added a modal drink-details route.
   - Wired all call-to-action buttons to `expo-router` so tapping a coffee card pushes `/details/[drinkId]`.

5. **Screen assembly**
   - Home screen recreates the promotional hero, horizontal carousels, and tonal backgrounds from the design system.
   - Secondary tabs reuse the same components for consistency (favorites list, cart summary, order history, profile dashboard).
   - Added a wallet summary and loyalty indicator on the profile screen to match the storytelling focus of the concept.

6. **Readability & polish**
   - Leaned on Tailwind utilities for spacing, typography, and color tokens to keep JSX concise.
   - Ensured remote imagery uses hi-res Unsplash placeholders while we await production assets.

## Running the Project

```bash
npm install
npx expo start --clear
```

Use the web UI to open the app on iOS Simulator, Android Emulator, or Expo Go. The `--clear` flag is recommended after changing Metro/Babel configuration.

## Project Structure

```
alx-coffee-shop-app/
├── app/
│   ├── _layout.tsx               # Root stack (tabs + drink details modal)
│   ├── index.tsx                 # Redirect into the tab navigator
│   ├── (tabs)/                   # Bottom tab routes
│   └── details/[drinkId].tsx     # Drink detail sheet
├── src/
│   ├── components/               # UI primitives (cards, pills, stories)
│   ├── constants/coffee.ts       # Fixture data for mock content
│   └── types/                    # Shared TypeScript models
├── styles/global.css             # Tailwind @tailwind directives
└── tailwind.config.js            # NativeWind + coffee palette config
```

## Next Steps

- Add authentication and order-tracking APIs.
- Replace placeholder images with branded assets from the design system.
- Introduce animated transitions (e.g. shared-element hero) with Reanimated 4 once dependencies are upgraded.
