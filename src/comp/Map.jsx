import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41], 
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapUpdater = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.setView([coordinates.lat, coordinates.lon], map.getZoom());
    }
  }, [coordinates, map]);

  return null;
};

const Map = ({ coordinates }) => {
  const position = [coordinates.lat, coordinates.lon];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "635px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} key={`${coordinates.lat}-${coordinates.lon}`}>
        <Popup>A sample popup on a marker.</Popup>
      </Marker>

      <MapUpdater coordinates={coordinates} />
    </MapContainer>
  );
};

export default Map;
