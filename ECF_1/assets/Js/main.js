// SCROLL


let body = document.body.getBoundingClientRect();
let title1 = document.getElementById('scroll1');
let scroll1Y = title1.getBoundingClientRect();
let offset1 = scroll1Y.top - body.top;


let title2 = document.getElementById('scroll2');
let scroll2Y = title2.getBoundingClientRect();
let offset2 = scroll2Y.top - body.top;

let title3 = document.getElementById('scroll3');
let scroll3Y = title3.getBoundingClientRect();
let offset3 = scroll3Y.top - body.top;

let title4 = document.getElementById('scroll4');
let scroll4Y = title4.getBoundingClientRect();
let offset4 = scroll4Y.top - body.top;

let title5 = document.getElementById('scroll5');
let scroll5Y = title5.getBoundingClientRect();
let offset5 = scroll5Y.top - body.top;

let title6 = document.getElementById('scroll6');
let scroll6Y = title6.getBoundingClientRect();
let offset6 = scroll6Y.top - body.top;


window.addEventListener('scroll', function(){ 

    if(window.scrollY > (offset1 - 300) ){ 
        scroll1.classList.remove("visibility-hidden")
    }else{
        scroll1.classList.add('visibility-hidden')
    }

    if(window.scrollY > (offset2 - 300)){ 
        scroll2.classList.remove("visibility-hidden")
       
    }else{
        scroll2.classList.add('visibility-hidden') 
    }

    if(window.scrollY > (offset3 - 300)){ 
        scroll3.classList.remove("visibility-hidden")
       
    }else{
        scroll3.classList.add('visibility-hidden') 
    }

    if(window.scrollY > (offset4 - 300)){ 
        scroll4.classList.remove("visibility-hidden")
       
    }else{
        scroll4.classList.add('visibility-hidden') 
    }

    if(window.scrollY > (offset5 - 300)){ 
        scroll5.classList.remove("visibility-hidden")
       
    }else{
        scroll5.classList.add('visibility-hidden') 
    }

    if(window.scrollY > (offset6 - 300)){ 
        scroll6.classList.remove("visibility-hidden")
       
    }else{
        scroll6.classList.add('visibility-hidden') 
    }

});

// CURSOR 

let cursorElem = document.querySelector('.rounded');

function cursor(e){
    
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorElem.style.transform = 'translate3d(' + mouseX +'px,' + mouseY+ 'px, 0)';
   
};
window.addEventListener('mousemove', (ev) => cursor(ev));


// ANIMATION CONTACT LIBRAIRIE

let contactText = document.querySelector('.animeText .letter');
contactText.innerHTML = contactText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animeText .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: 'animeText',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  