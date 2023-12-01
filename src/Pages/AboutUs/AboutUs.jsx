import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
const AboutUs = () => {
    const position = [51.505, -0.09]
    return (
        <div>
            <h1 className='text-4xl font-bold font-play pt-40 text-center'>About Us</h1><br /><br />
            <p className='text-2xl text-center'>Our Head Quarter</p><br />
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                Agun News <br /> Head Office
            </Popup>
             </Marker>
        </MapContainer>
        </div>
    );
};

export default AboutUs;