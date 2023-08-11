import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { markers } from "../utils/constants/Markers";
import {Icon} from 'leaflet';


export const Test = () =>{
    return(
      <MapContainer center={[51.02, 0.9]} zoom={12}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
              {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.geocode}
              >
                <Popup>{marker.popup}</Popup>
              </Marker>
            , console.log(marker)))}
            </TileLayer>
          </MapContainer>
    )
  }