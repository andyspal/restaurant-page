import './styles/reset.css';
import './styles/style.css';
import './styles/map.css';
import { website } from "./website.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import {contact, initMap} from "./contact.js";


let cuerpo = document.querySelector("body");
website(cuerpo);
let content = document.getElementById("content");


let homeContainer = home();
content.appendChild(homeContainer);

let menuContainer = menu();
content.appendChild(menuContainer);
menuContainer.style.display = 'none';
let contactContainer = contact();


document.addEventListener("DOMContentLoaded", function () {
  content.appendChild(contactContainer);
  initMap();
  contactContainer.style.display = 'none';
});


let homeBtn = document.querySelector('.homeBtn');
homeBtn.classList.add('active');
let menuBtn = document.querySelector('.menuBtn');
let contactBtn = document.querySelector('.contactBtn');

homeBtn.addEventListener('click', ()=>{
  homeContainer.style.display = 'block';
  menuContainer.style.display = 'none';
  contactContainer.style.display = 'none';

  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
})
menuBtn.addEventListener('click', ()=>{
  homeContainer.style.display = 'none';
  menuContainer.style.display = 'block';
  contactContainer.style.display = 'none';

  homeBtn.classList.remove('active');
  menuBtn.classList.add('active');
  contactBtn.classList.remove('active');
})
contactBtn.addEventListener('click', ()=>{
  homeContainer.style.display = 'none';
  menuContainer.style.display = 'none';
  contactContainer.style.display = 'flex';

  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.add('active');
})