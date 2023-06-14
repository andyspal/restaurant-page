import './reset.css';
import './style.css';   
import {home} from './home';

function page() {
    const content = document.getElementById('content');
    home(content);
}

page();