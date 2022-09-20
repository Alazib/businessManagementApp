import GoogleMapReact from "google-map-react";
import "../styles/Map.css";
import marker from "../images/marker-map.png";

const Marker = ({ avatar }) => (
  <div className="marker">
    <img
      src={marker}
      alt="marker"
      style={{ width: "50px", height: "50px" }}
    ></img>
    <img className="marker-avatar" src={avatar} alt="worker"></img>
  </div>
);

function Map({ avatar }) {
  const defaultProps = {
    center: {
      lat: 40,
      lng: -4,
    },
    zoom: 9,
  };

  const { center, zoom } = defaultProps;

  return (
    <div className="map" style={{ height: "350px", width: "550px" }}>
      {defaultProps.hasOwnProperty("zoom") && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCE1ZWV7oXqhdSockdmAfSx6tL6FVRfoIM" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={40} lng={-4} avatar={avatar} />
        </GoogleMapReact>
      )}
    </div>
  );
}

export default Map;
