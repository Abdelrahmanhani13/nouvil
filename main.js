let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('rivers');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value+'px';
    moon2.style.top=value*3+'px';
    mountains3.style.top= value*1.5 +'px';
    mountains4.style.top= value*1.2 +'px';
    river.style.top= value +'px';
    boat6.style.top= value +'px';
    boat6.style.top= value*3 +'px';
    if(scrollY>=127){
        document.querySelector('.main').style.background = 'linear-gradient(#000000, #1da1f2);'
    }
}


