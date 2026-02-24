# VibeStrings

VibeStrings is a modern online guitar shop built with React and Apollo
Client, designed to simulate a real-world SaaS storefront experience.

The goal of the project was not just to display products, but to build a
structured, scalable frontend application that integrates with a GraphQL
API, supports internationalization, and delivers smooth user
interactions such as filtering and infinite scrolling.

------------------------------------------------------------------------

## Overview

VibeStrings allows users to:

-   Browse guitar models dynamically
-   Search by model name
-   Filter by guitar type
-   Load more products with infinite scroll
-   Switch language (English / Macedonian / Albanian)
-   Navigate between pages with clean routing

The application consumes a GraphQL API and demonstrates real-world
frontend architecture decisions, including state handling, API
integration, and UX optimization.

------------------------------------------------------------------------

## Why I Built This

I built VibeStrings to deepen my frontend skills beyond static UI
development.\
This project helped me focus on:

-   API-driven architecture
-   Scalable component structure
-   Handling asynchronous data properly
-   Clean separation between UI and data logic
-   Designing user-friendly interactions

It played a significant role in strengthening my frontend development
skills and product thinking.

------------------------------------------------------------------------

## Tech Stack

-   React
-   Apollo Client
-   GraphQL
-   React Router
-   i18next (Internationalization)
-   CSS (custom styling)
-   Create React App

------------------------------------------------------------------------

## Key Features

### Search & Filtering

Users can search guitars by name and filter by type dynamically.\
The filtering logic integrates directly with GraphQL queries.

### Infinite Scroll

Products load progressively as users scroll, simulating real e-commerce
behavior.

### Internationalization

Language switcher supports:

-   English
-   Macedonian
-   Albanian

Static UI text updates instantly based on the selected language.
(Not everything is translated yet, for a future improvement - this is just a demo)

### GraphQL Integration

All product data is fetched via Apollo Client from a GraphQL API.\
Queries are structured and optimized for real-world usage.

------------------------------------------------------------------------

## Architecture Highlights

-   Component-based structure
-   Clear separation between UI and data fetching
-   Centralized routing logic
-   Reusable product card component
-   Controlled state management for search and filters

The project is structured to allow future extension (cart system,
authentication, checkout, etc.).

------------------------------------------------------------------------

## Local Development

``` bash
git clone https://github.com/SaraKrsinar/VibeStrings.git
cd VibeStrings
npm install
npm start
```

Runs at:

http://localhost:3000

------------------------------------------------------------------------

## Production Build

``` bash
npm run build
```

Output directory:

build/

------------------------------------------------------------------------

## Future Improvements

-   Add shopping cart functionality
-   Implement user authentication
-   Add checkout flow
-   Improve loading states and skeleton UI
-   Migrate from Create React App to Vite for improved performance
-   Connect to a custom backend instead of demo API

------------------------------------------------------------------------

## What This Project Demonstrates

-   Real API consumption using GraphQL
-   Advanced frontend interactions (infinite scroll)
-   Product-oriented thinking
-   Internationalization support
-   Clean, scalable component structure
