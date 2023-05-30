const bookItems = document.querySelectorAll('.main__item');
const bookSubItems = document.querySelectorAll('.sub__item');
const bookSubItemMenus = document.querySelectorAll('.sub__item + .item');
const musicItem = document.querySelector('.main__item.music');
const musicSubItems = document.querySelectorAll('.sub__item.music');
const musicSubItemMenus = document.querySelectorAll('.sub__item.music + .item');
const movieItem = document.querySelector('.main__item.movies');
const movieSubItems = document.querySelectorAll('.sub__item.movies');
const movieSubItemMenus = document.querySelectorAll('.sub__item.movies + .item');

function handleClickItem() {
  this.nextElementSibling.classList.toggle('close');
  this.children[0].innerHTML = (this.children[0].innerHTML === '+') ? '-' : '+';
}

function handleClickSubItem() {
  this.nextElementSibling.classList.toggle('close');
  this.children[0].innerHTML = (this.children[0].innerHTML === '+') ? '-' : '+';
}

bookItems.forEach(item => item.addEventListener('click', handleClickItem));
bookSubItems.forEach(item => item.addEventListener('click', handleClickSubItem));
bookSubItemMenus.forEach(item => item.addEventListener('click', handleClickSubItem));
musicItem.addEventListener('click', handleClickItem);
musicSubItems.forEach(item => item.addEventListener('click', handleClickSubItem));
musicSubItemMenus.forEach(item => item.addEventListener('click', handleClickSubItem));
movieItem.addEventListener('click', handleClickItem);
movieSubItems.forEach(item => item.addEventListener('click', handleClickSubItem));
movieSubItemMenus.forEach(item => item.addEventListener('click', handleClickSubItem));