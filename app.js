let imgs = document.querySelectorAll('.header-slider ul img');
let controlPrevious = document.querySelector('.control-previous');
let controlNext = document.querySelector('.control-next');

let n = 0;

function slideChange() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";

};
slideChange();
controlPrevious.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
       
    } else {
        n = imgs.length - 1;
       
    }
    slideChange();
});
controlNext.addEventListener("click", (e) => {
    if (n<imgs.length-1) {
        n++;
       
    } else {
        n=0;
       
    }
    slideChange();
});

const product=document.querySelectorAll(".product");

for (let item of product) {
    item.addEventListener("wheel",(evt)=>{
        // evt.preventDefault();
        // item.scrollLeft += evt.deltaY;
        item.scrollLeft += evt.deltaX ;
        
    })
}
