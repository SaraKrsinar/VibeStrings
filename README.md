
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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
cd VibeStrings

### 2. Install Dependencies
npm install

### 3. Run the App
npm start
```
>>>>>>> 81cac4a43402e22dd53e7edaab950a350370b8d1
