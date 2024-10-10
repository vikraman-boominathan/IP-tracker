import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

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
      style={{ height: "800px", width: "100%" }}
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
