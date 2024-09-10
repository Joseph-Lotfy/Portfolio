var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = "none";
})
window.addEventListener('scroll', function() {
    if(this.scrollY > 40){
        document.getElementById('head').style.maxWidth = '1328px';
        document.getElementById('arr').style.opacity = 1;
        document.getElementById('arr').style.visibility = "visible";

    }
    else{
        document.getElementById('head').style.maxWidth = '78rem';
        document.getElementById('arr').style.opacity = 0;
        document.getElementById('arr').style.visibility = "hidden";

    }
    
});
let list_flag = 0;
let list = document.getElementById('list');
let cont = document.getElementById('content');
function show_list(){
    if(list_flag == 0){
        console.log("show");
        list_flag = 1;
        list.style.height= "200px";
        list.style.padding= "20px";
        cont.style.transform = 'rotate(90deg)'

    }
    else if(list_flag == 1){
        console.log("hide");
        list_flag = 0;
        list.style.height = "0px";
        list.style.padding = "0px";
        cont.style.transform = 'rotate(0deg)'

    }
}
let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        let lin = card.querySelector('.lin');
        if (lin) lin.style.width = "100px";
    });

    card.addEventListener('mouseout', () => {
        let lin = card.querySelector('.lin');
        if (lin) lin.style.width = "30px";
    });
});

let links = document.querySelectorAll('.up');
links.forEach(link =>{
    link.addEventListener('click', () => {
        console.log("hide");
        list_flag = 0;
        list.style.height = "0px";
        list.style.padding = "0px";
        cont.style.transform = 'rotate(0deg)'
    })
})
  // Function to check if an element is in the viewport

  window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      let currentSection = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (pageYOffset >= sectionTop) {
              currentSection = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSection}`) {
              link.classList.add('active');
          }
      });
  });
  function widthResizer(){
    var width = window.innerWidth
    if(width > 600){
        console.log("hide");
        list_flag = 0;
        list.style.height = "0px";
        list.style.padding = "0px";
        cont.style.transform = 'rotate(0deg)'
    }
  }
  
  // Getting the width of the browser on load
  widthResizer()
  
  // Getting the width of the browser whenever the screen resolution changes.
  (function () {
    'use strict';

    // The window object should be accessible here
    window.addEventListener('resize', widthResizer);

    function widthResizer() {
        var width = window.innerWidth;
        if (width > 600) {
            console.log("hide");
            list_flag = 0;
            list.style.height = "0px";
            list.style.padding = "0px";
            cont.style.transform = 'rotate(0deg)';
        }
    }
})();