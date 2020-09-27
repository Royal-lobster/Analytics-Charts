import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function HeatMap() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "80vw",
    height: "80vh",
    zoom: 10,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoicm95YWwtbG9ic3RlciIsImEiOiJja2Zrdzl6d3gxdzRjMnJvMzFpNXI5YmFzIn0.uBNyrqofk6J5xH64Yhw7hw"
        mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={45.4211} longitude={-75.6903}>
          Hello
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default HeatMap;
