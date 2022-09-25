// =======================Js-Jquery=======================
// document.querySelector ======> $('.....')
// addEventListener ====> .on
//  sdasdas.style.anyCssStyle ======> .css
// .setAttribute ============> attr






$(document).ready(function(){


// let imgs=$('img')


// imgs.hover(creatElement,removeElement)
// imgs.on('mousemove',moveElement)

// function creatElement(){
// $('document')=(`<img src=${this.src} alt="" id="newimg">`)

// }
// function removeElement(){

// }

let exit=$('.x');
let slide=$('.slide');
exit.css('display','block');
// slide.css('display','block');
exit.click(function(){
    slide.fadeOut(500);


})







})