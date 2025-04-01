# offline-campus-map

offline-campus-map/
│── public/
│   ├── blueprint.jpg        # Your college first-floor blueprint
│   ├── index.html           # Basic HTML template
│── src/
│   ├── assets/
│   │   ├── points.json      # Fixed points on the blueprint
│   ├── components/
│   │   ├── Map.js           # Main map component
│   │   ├── Loading.js     
│   │   ├── Loading.css    
│   ├── utils/
│   │   ├── dijkstra.js      # Optimized Dijkstra's Algorithm
│   ├── App.js               # Root component
│   ├── index.js             # Entry point
│   ├── styles.css           # Updated UI styles
│── package.json             # Dependencies and scripts
│── README.md                # Project documentation


An interactive map for navigating the first floor of [College Name]. The map allows users to:
- Select a start and destination point on the campus blueprint.
- Find the shortest path between selected points using Dijkstra's algorithm.
- Track real-time user location using GPS.

## Features
- Offline map rendering
- GPS tracking for real-time location
- Pathfinding using Dijkstra's algorithm
- Interactive point selection

## Getting Started

### Prerequisites
1. Install [Node.js](https://nodejs.org/)
2. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/Thenmugilan-Dom/offline-campus-map.git
   cd offline-campus-map
   npm install


## Dependencies
React: For building the user interface.

React-DOM: For DOM manipulation in a React environment.

CSS: For styling and making the app responsive and mobile-friendly.

## Development
Starting the App Locally
After installing the dependencies and running npm start, the development server will be hosted locally on http://localhost:3000. The app will automatically reload on code changes, which makes it easier to test and develop.

Build the App for Production
Once you are done with development, use the following command to create an optimized build of your app:

## bash
Copy
Edit
npm run build

This will create a build/ directory with minified and optimized files for deployment. You can host these files on any static file server or platform like GitHub Pages, Netlify, or Vercel.

## Testing and Debugging
Use your browser's developer tools to debug the map’s interactive features and check for errors.

Test the app's offline functionality by disconnecting from the internet after the initial load.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

This full implementation should now cover everything you need for your **Offline Campus Map** project, with code for selecting the start and destination, pathfinding, and GPS tracking. Let me know if you need any further tweaks!


## Acknowledgments
The campus blueprint was provided by [College Name].

The Dijkstra algorithm was adapted from [source].

GPS location tracking relies on the Geolocation API.

## Notes for the Developer:
Ensure that the blueprint.jpg is of high quality and fits the dimensions of the map you plan to use.

Consider adding more metadata to the points.json file, such as labels or room numbers, for better interactivity.

If the GPS tracking accuracy is low, consider tweaking the coordinate transformation from GPS coordinates to your campus blueprint’s X/Y grid.

