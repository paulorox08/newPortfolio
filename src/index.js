import './background.css';
import './header.css';
import './statusBar.css'

import {header} from './header.js';
import {bar} from './statusBar.js';

function toggle() {
    const body = document.querySelector("body");
    const toggle = document.createElement("button");
    toggle.className = "toggle";
    body.appendChild(toggle);
}

function lightOrDark() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

lightOrDark();
toggle();
document.querySelector(".toggle").addEventListener('click', lightOrDark);