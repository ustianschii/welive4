"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "300px", // Set the height of the map
};

const center = {
  lat: 39.74667990182348, // Set latitude
  lng: -75.550502983434, // Set longitude
};

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={apiKey!}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
