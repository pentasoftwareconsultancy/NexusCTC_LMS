// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// // Import marker icon images
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// // Fix the default marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// const LeafletMap = () => {
//   const centerPosition = [18.596608, 73.804795]; // Latitude and longitude for the map center

//   // Array of multiple locations
//   const locations = [
//     {
//       position: [18.596608, 73.804795],
//       popupText:
//         "Pune Address: Office No. 4-B, Second Floor, Ganesham Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027",
//     },
//     {
//       position: [20.689405307384273, 76.99340465862281],
//       popupText: "Akola Address : Geeta Nagar, Dahigaon Gawade, Akola, Maharashtra",
//     },
//     {
//       position: [19.973966519918175, 73.78741632269774],
//       popupText:
//         " Nashik Address : Amideep Apartment Amideep Apartment, Parab Nagar, Nashik, Maharashtra 422006",
//     },
//     // Add more locations as needed
//   ];

//   return (
//     <MapContainer
//       center={centerPosition}
//       zoom={7}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {locations.map((location, index) => (
//         <Marker key={index} position={location.position}>
//           <Popup>{location.popupText}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default LeafletMap;