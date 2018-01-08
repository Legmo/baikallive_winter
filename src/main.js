//Add Bootstrap JS from node_modules\bootstrap
import 'bootstrap'; 

//Add JS
import './js/scripts.js'; 
 
//Add SCSS 
require('./scss/main.scss');

//Add HTML from /html/html.html
var htmlHeader  = require('./html/header.html');
var htmlContent = require('./html/main-content.html');
var htmlFooter  = require('./html/footer.html');

var appHeader  = document.querySelector('#header');
var appContent = document.querySelector('#main-content-wrapper');
var appFooter  = document.querySelector('#footer');

appHeader.innerHTML = htmlHeader;
appContent.innerHTML = htmlContent;
appFooter.innerHTML = htmlFooter;
