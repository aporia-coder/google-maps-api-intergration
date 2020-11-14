import "./styles/styles.min.css";
// import dotenv from "dotenv";
// DOTENV NOT WORKING FOR SOME REASON EVEN WHEN USING CONFIG()

// Google Maps
import { useLoadScript, GoogleMap } from "@react-google-maps/api";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 52.23484,
  lng: -0.89732,
};

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });
  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="App">
      <div className="left">
        <h1>Heading</h1>
        <p>some stuff under the heading</p>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      ></GoogleMap>
    </div>
  );
}

// Remember to try styling map with snazzy maps

export default App;
