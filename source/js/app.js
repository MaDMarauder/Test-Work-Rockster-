let swipe = document.querySelector('.menu-hide');
let swipeConten = document.querySelectorAll('#menu-left a.item');
swipe.addEventListener('click',function(e){
    e.preventDefault();
    for(let i =0;i<swipeConten.length;i++){
        swipeConten[i].classList.toggle('invisible');
    }
    
})