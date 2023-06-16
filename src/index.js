import './reset.css';
import './style.css';    
import {website} from './website.js';
import {home} from './home.js';
import {menu} from './menu.js';
// import {contact} from './contact.js'

let cuerpo = document.querySelector('body');
website(cuerpo);
let content = document.getElementById('content');

// let homeContainer = home();
let menuContainer = menu();
// content.appendChild(homeContainer);
content.appendChild(menuContainer);


