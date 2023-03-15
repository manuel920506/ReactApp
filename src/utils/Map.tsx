import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css';
import {coordinateDTO} from './coordinates.model'
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map(props: mapProps){
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates)
    return (
        <MapContainer
            center={[18.467455, -69.931242]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution="React Films"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickMapa setPoint={coordinates => {
                setCoordinates([coordinates]);
                props.handleClickMap(coordinates);
            }} />
            {coordinates.map(coordinate => <Marcador key={coordinate.lat + coordinate.lng} 
              {...coordinate}
            />)}
        </MapContainer>
    )
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleClickMap(coordinates: coordinateDTO): void;
}

Map.defaultProps = {
    height: '500px'
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e => {
        props.setPoint({lat: e.latlng.lat, lng: e.latlng.lng})
    })
    return null;
}

interface clickMapaProps {
    setPoint(coordinates: coordinateDTO): void;
}

function Marcador(props: coordinateDTO){
    return (
        <Marker position={[props.lat, props.lng]} />
    )
}

