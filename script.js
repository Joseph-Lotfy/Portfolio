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
