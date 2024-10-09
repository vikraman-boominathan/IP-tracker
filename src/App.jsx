import { useState, useEffect } from "react";

import IpTracker from "./comp/IpTracker";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { getIp } from "./api/service";

function App() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    getIp(ip).then((res) => {
      setCoordinates({ lat: res.location.lat, lon: res.location.lng });
      setData(res);
    });
  }, [ip]);

  return (
    <div>
      <IpTracker ip={ip} setIp={setIp} data={data} coordinates={coordinates} />
    </div>
  );
}

export default App;
