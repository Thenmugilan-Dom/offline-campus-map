import React, { useState, useEffect } from "react";
import points from "../assets/points.json"; // Your points data
import { findShortestPath } from "../utils/dijkstra";

const blueprintSrc = process.env.PUBLIC_URL + "/blueprint.jpg"; // Your blueprint image path

function Map() {
  const [path, setPath] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [startRoom, setStartRoom] = useState(null);
  const [endRoom, setEndRoom] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            x: position.coords.longitude * 10, // Adjust this scaling based on your map's actual size
            y: position.coords.latitude * 10,
          });
        },
        (error) => console.error("GPS Error: ", error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const handleStartRoomChange = (event) => {
    setStartRoom(event.target.value);
  };

  const handleEndRoomChange = (event) => {
    setEndRoom(event.target.value);
  };

  const handleSelectPath = () => {
    if (startRoom && endRoom) {
      const shortestPath = findShortestPath(points, startRoom, endRoom);
      setPath(shortestPath);
      console.log("Calculated Path: ", shortestPath); // Log the calculated path
    } else {
      alert("Please select both start and end rooms.");
    }
  };

  const resetSelection = () => {
    setStartRoom(null);
    setEndRoom(null);
    setPath([]);
  };

  return (
    <div className="map-container">
      <h2>Select Start and End Rooms</h2>
      <div className="controls">
        <select onChange={handleStartRoomChange} value={startRoom}>
          <option value="">Select Start Room</option>
          {points.map((point) => (
            <option key={point.id} value={point.id}>
              {point.id}
            </option>
          ))}
        </select>

        <select onChange={handleEndRoomChange} value={endRoom}>
          <option value="">Select End Room</option>
          {points.map((point) => (
            <option key={point.id} value={point.id}>
              {point.id}
            </option>
          ))}
        </select>

        <button onClick={handleSelectPath} disabled={!startRoom || !endRoom}>
          Find Path
        </button>

        <button onClick={resetSelection}>Reset</button>
      </div>

      <div className="blueprint-container">
        <img src={blueprintSrc} alt="Campus Blueprint" className="blueprint" />
        {points.map((point) => (
          <div
            key={point.id}
            className={`point ${point.id === startRoom ? "start" : ""} 
                       ${point.id === endRoom ? "end" : ""} 
                       ${path.includes(point.id) ? "highlighted" : ""}`}
            style={{ top: point.y, left: point.x }}
            title={point.id}
          />
        ))}
        {userLocation && (
          <div
            className="user-location"
            style={{ top: userLocation.y, left: userLocation.x }}
          />
        )}
             {/* Render path lines */}
             {path.length > 0 && (
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        {path.slice(0, -1).map((pointId, index) => {
                            const startPoint = points.find((p) => p.id === pointId);
                            const endPoint = points.find((p) => p.id === path[index + 1]);
              if (startPoint && endPoint) {
                return (
                  <line
                    key={index}
                    x1={startPoint.x}
                    y1={startPoint.y}
                    x2={endPoint.x}
                    y2={endPoint.y}
                    stroke="blue"
                    strokeWidth="2"
                  />
                );
              }
              return null; // Return null if points are not found
            })}

            {/* Dots at each point along the path */}
            {path.map((pointId, index) => {
              const point = points.find((p) => p.id === pointId);
              return (
                point && (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="red"
                  />
                )
              );
            })}
          </svg>
        )}
      </div>
    </div>
  );
}

export default Map;