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

/*

const textEl = document.querySelectorAll('.divPEl');

function removeFocus () {
    textEl.forEach(el => el.classList.remove('selected'));
}

textEl.forEach( divPEl => {
    el.addEventListener('mouseover', () =>{
    removeFocus();
    el.classList.add('selected');
    })
    removeFocus = () => {
        divPEl.forEach(divPEl => {
            divPEl.classList.remove('selected');
        })
    }
})

textEl.forEach( divPEl => {
    divPEl.addEventListener ('click', () => {
        removeFocus();
        divPEl.classList.add('selected');
    })
})

*/


const textEls = document.querySelectorAll('.divPEl');

function removeFocus() {
  textEls.forEach(el => el.classList.remove('selected'));
}

textEls.forEach(el => {
  el.addEventListener('mouseover', () => {
    removeFocus();
    el.classList.add('selected');
  });
  el.addEventListener('click', () => {
    removeFocus();
    el.classList.add('selected');
  });
  el.addEventListener('mouseout', () => {
     el.classList.remove('selected');
  });
});

function randomPastel() {
    const r = Math.floor(Math.random() * 127 + 127);
    const g = Math.floor(Math.random() * 127 + 127);
    const b = Math.floor(Math.random() * 127 + 127);
    return `rgb(${r}, ${g}, ${b})`;
}

textEls.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = randomPastel();
    });
});

