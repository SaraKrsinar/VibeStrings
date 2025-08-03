# VibeStrings – Online Guitar Shop

VibeStrings is a modern React application for browsing, searching, and discovering guitar brands and models. It uses Apollo Client to fetch data from a GraphQL API and provides a dynamic, multilingual shopping experience.

## API Source
All data is fetched from the GraphQL endpoint:
https://graphql-api-brown.vercel.app/api/graphql

## Features

### Page 1 – Guitar Brands
- Displays a list of all available guitar brands.
- Users can click on a brand to view its guitar models.

### Page 2 – Guitar Models
- Shows models for the selected brand.
- **Search bar** to filter guitars by name.
- **Dropdown filter** to narrow models by guitar type (Electric, Bass, Acoustic).
- **Infinite scroll** to load more models as the user scrolls.

### Page 3 – Guitar Details
- Details page for a selected guitar model.
- **Specs tab**: Displays specifications such as body wood, pickups, bridge, etc.
- **Musicians tab**: Lists musicians using this guitar.
  - Displays 2 musicians at a time.
  - "Show More" button reveals more musicians in sets of 2.

### Language Support (i18n)
- **Language switcher** in the footer.
- Supports **English**, **Macedonian**, and **Albanian**.
- Almost all static text updates dynamically based on the selected language.

### Technical Stack
- React
- Apollo Client
- GraphQL
- React Router
- CSS Modules
- `react-i18next` for internationalization

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/SaraKrsinar/VibeStrings.git
cd vibe-strings

### 2. Install Dependencies
npm install

### 3. Run the App
npm start
```
