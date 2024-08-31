import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Sample locations array with latitude and longitude
export const locations = [
  { lat: 19.076, lng: 72.8306, name: "Bin 1" },
  { lat: 19.1076, lng: 72.8388, name: "Bin 2" },
  { lat: 19.1477, lng: 72.8245, name: "Bin 3" },
  { lat: 19.076, lng: 72.8777, name: "Bin 4" },
  { lat: 18.9543, lng: 72.8194, name: "Bin 5" },
  { lat: 19.2154, lng: 72.8331, name: "Bin 6" },
  { lat: 19.0033, lng: 72.8461, name: "Bin 7" },
  { lat: 19.0917, lng: 72.8416, name: "Bin 8" },
  { lat: 19.0765, lng: 72.8543, name: "Bin 9" },
  { lat: 19.188, lng: 72.828, name: "Bin 10" },
];

const Maps = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mapInstance.current) {
      // Map is already initialized
      return;
    }

    // Initialize the map
    mapInstance.current = L.map(mapRef.current).setView([19.076, 72.8777], 13);

    // Set up the tile layer from OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance.current);

    // Define a custom icon
    const customIcon = L.icon({
      iconUrl: "/location-img.webp", // Path to the marker image in the public folder
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon (where the marker points to)
      popupAnchor: [0, -32], // Popup anchor point
    });

    // Add markers for each location
    locations.forEach((location, index) => {
      L.marker([location.lat, location.lng], { icon: customIcon })
        .addTo(mapInstance.current)
        .bindTooltip(`<b>${location.name}</b>`, { direction: "top" }) // Bind tooltip instead of popup
        .on("click", () => {
          navigate(`/location/${index + 1}`); // Navigate to the correct binId
        });
    });

    // Clean up map on unmount
    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, [navigate]);

  return (
    <div className="h-[38rem] p-10 bg-custom_gray">
      <h1 className="text-center text-teal-600 text-[2rem] font-bold uppercase">
        Locations of all smart dustbins
      </h1>
      <br />
      <div ref={mapRef} className="h-[25rem]"></div>
    </div>
  );
};

export default Maps;
