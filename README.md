# React Project Documentation: GIF Search App

This documentation provides an overview of the React project "GIF Search App" and explains how to use and develop the application.

## Features

The "GIF Search App" has the following features:

1. **Topic Search**: Allows users to enter a topic of their choice in a search field.
2. **Display Results**: Shows up to 10 GIFs related to the entered topic.
3. **Copy Links**: Provides a button to copy the link of a selected GIF.

## Prerequisites

Before getting started with the project, make sure you have the following installed in your development environment:

- Node.js (version 12 or higher)
- NPM (Node Package Manager) or Yarn

## Project Setup

Follow these steps to set up the project in your local environment:

1. Clone the project repository from GitHub: `git clone https://github.com/your-username/gif-search-react.git`.
2. Navigate to the project directory: `cd gif-search-react`.
3. Install project dependencies: `npm install` or `yarn install`.

## GIPHY API Configuration

The application uses the GIPHY API to search for and retrieve GIFs. Follow these steps to configure the API:

1. Create an account on GIPHY and obtain an API key.
2. Create a `.env` file in the project root directory.
3. Add the API key to the `.env` file as follows:

REACT_APP_GIPHY_API_KEY=YourAPIKey


Make sure to replace `YourAPIKey` with the actual API key you obtained from GIPHY.

## Usage

Follow these steps to run the application in your development environment:

1. Make sure you are in the project directory.
2. Run the following command: `npm start` or `yarn start`.
3. The application will open in your default browser at `http://localhost:3000`.

Once the application has loaded, you can use the GIF search functionality as follows:

1. Enter a topic of your choice in the search field.
2. Click the "Search" button or press the "Enter" key.
3. GIFs related to the topic will be displayed below the search field.
4. To copy the link of a GIF, click the "Copy Link" button corresponding to the desired GIF.

## Customization

If you want to customize or expand the functionality of the application, you can modify the following files:

- **`src/App.js`**: Contains the main component of the application and handles the search and link copying logic.
- **`src/components/SearchForm.js`**: This component renders the search form and handles related events.
- **`src/components/GifItem.js`**: Renders individual GIF items and provides the "Copy Link" button.

Feel free to customize the application according to your requirements.
