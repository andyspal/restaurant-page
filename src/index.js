import './reset.css';
import './style.css';    
import {website} from './website.js';
import {home} from './home';

let cuerpo = document.querySelector('body');
website(cuerpo);
let content = document.getElementById('content');
home(content);
