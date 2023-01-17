const gallery = document.querySelector('.gallery');
let insertion = '';
for (let index = 1; index < 30; index++) {
    
    insertion += `<li> <img src="./img/${index}.jpg"></li >`;
    
}
gallery.insertAdjacentHTML('afterbegin', `<ul class="gallery">${insertion}</ul>`);
