import markerIconUrl from './lmages/marker-icon.png';
import uberEats from './lmages/uberEats.svg';
import phone from './lmages/phone.svg'
import { createImage, createDiv} from './menu';
import { createText } from './website';

import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';




const contact = () => {

  let contactContainer = document.createElement('div');

  let map = document.createElement('div');
  map.id = 'map';
  contactContainer.appendChild(map);

  let uberLink = document.createElement('a');
  uberLink.href = 'https://www.ubereats.com/';
  uberLink.target = '_blank';
  uberLink.classList.add('uber-link')

  let uberImage = createImage(uberEats, 'uber-eats', 'uberEats');
  uberLink.appendChild(uberImage);
  contactContainer.appendChild(uberLink);

  let phoneImage = createImage(phone, 'phone-image', 'phone');
  let number = createText('123-456-789', 'phone-number', 'p');
  let phoneDiv = createDiv('phone-container', phoneImage, number);

  contactContainer.appendChild(phoneDiv);
  contactContainer.classList.add('contact');

  return contactContainer;
};

let initMap = () =>{
  var map = L.map("map").setView([25.9579, -80.2388], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var markerIcon = L.icon({
    iconUrl: markerIconUrl
  });
  
  var marker = L.marker([25.9579, -80.2388], { icon: markerIcon }).addTo(map);

  marker.bindPopup('We are here:<br>12301 NW 25th St, Miami').openPopup();
}    
export {contact, initMap};
