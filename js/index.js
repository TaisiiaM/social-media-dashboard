const btnSwitch = document.querySelector('.switch-btn');
btnSwitch.addEventListener('click', () => btnSwitch.classList.toggle('switch-on'));

let head = window.document.getElementsByTagName('head')[0];

function includeCSS(aFile){
  let style = window.document.createElement('link');
  style.href = aFile;
  style.rel = 'stylesheet';
  head.appendChild(style);
}
includeCSS('css/index.css');

btnSwitch.addEventListener('click', () => includeCSS('css/dark.css'))
    //includeCSS('css/dark.css');
