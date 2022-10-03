var header = document.querySelector('#header');
var navBar = document.querySelector('#nav');
window.onscroll = function(){
    if(window.scrollY >= header.offsetTop+200){
      navBar.style.position = 'fixed';
      navBar.style.width = '100%';
      navBar.style.padding = '10px';
    } 
}

var boysIcon = document.getElementById('boysIcon');
var boyBtn = document.getElementById('boyBtn');

var girlsIcon = document.getElementById('girlsIcon');
var girlBtn = document.getElementById('girlBtn'); 

function toRotate(){
  if(boyBtn.getAttribute('aria-expanded')=='true'){
    console.log('true');
    boysIcon.style.rotate = '-90deg';
  }
  else{
    console.log('false');

    boysIcon.style.rotate = '0deg';
  }

  if(girlBtn.getAttribute('aria-expanded')=='true'){
    console.log('true');
    girlsIcon.style.rotate = '-90deg';
  }
  else{
    console.log('false');

    girlsIcon.style.rotate = '0deg';
  }
}