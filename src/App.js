import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import Loading from "./components/Loading"; // Import the Loading component
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with real loading logic)
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); 

    return () => clearTimeout(loadingTimer); // Cleanup on unmount
  }, []);

  return (
    <div className="app-container">
      <h1>Offline Campus Map</h1>
      {loading ? <Loading /> : <Map />}
    </div>
  );
}

export default App;