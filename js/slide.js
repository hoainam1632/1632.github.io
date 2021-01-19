var slides = document.getElementById('slides');
var slide = document.getElementsByClassName('slide');
var slideImg = document.getElementById('slide-img');
var IMG_WIDTH = 620;

slides.style.width = `${slide.length * IMG_WIDTH}px`;
var index = 0;
function next(){
    if(index < slide.length - 1){
        index++;
    }
    else{
        index = 0;
    }
    slides.style.transform = `translateX(-${IMG_WIDTH * index}px)`;
    return IMG_WIDTH * index;
}

function prev(){
    if(index === 0){
        index = slide.length - 1;
    }
    else{
        index--;
    }
    slides.style.transform = `translateX(-${IMG_WIDTH * index}px)`;
}
var time;
time = setInterval(next, 3 * 1000);
function slideHoverOut(){
   time = setInterval(next, 3 * 1000);
}

 function slideHover(){
   clearInterval(time);
}


   

