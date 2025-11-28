const container = document.querySelector('#container');
const backBtn = document.querySelector('#back');
const nextBtn = document.querySelector('#next');
const img = ["./img/1-210614-221121.jpeg", "./img/2-210614-221121.jpeg", "./img/3neww-210614-221121.jpeg", "./img/4new-210614-221121.jpeg", "./img/5-210614-221121.jpeg"];

let i = 0;

nextBtn.addEventListener('click', ()=> {
    i ++;
    if (i > img.length - 1) {
        i = 0;
    }
    document.querySelector('#picture').src = img[i];
})

backBtn.addEventListener('click', ()=> {
    i --;
     if (i < 0) {
        i = img.length -1;
     }
    document.querySelector('#picture').src = img[i];
})