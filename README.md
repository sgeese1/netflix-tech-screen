# Yelp Boba Finder

## Overview
Yelp Boba Finder is a web application that allows users to search for boba shops within a 6-mile radius of selected locations. The application utilizes the Yelp Business Search API to fetch and display results, providing users with an easy way to discover local boba shops.

## Features
- Location selection via radio buttons for three placeholder locations.
- Display of boba shop results in a sortable table by rating and distance.
- "Load More" button to fetch additional results from the Yelp API.

## Technologies Used
- React
- Axios
- Yelp Business Search API

## Project Structure
```
yelp-boba-finder
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── BobaSearch.js
│   │   ├── LocationSelector.js
│   │   ├── ResultsTable.js
│   │   └── LoadMoreButton.js
│   ├── api
│   │   └── yelpApi.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd yelp-boba-finder
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Yelp API key:
   ```
   REACT_APP_YELP_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```
   npm start
   ```

## Usage
- Open the application in your web browser.
- Select a location using the radio buttons.
- View the list of boba shops displayed in the table.
- Click "Load More" to fetch additional results.

## License
This project is licensed under the MIT License.