
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

const cart_btn =document.querySelector('#card_item');
const cart_table =document.querySelector('.shop_window');
const card_icon_exit =document.querySelector('.exit_shop');
const contact =document.querySelector('#contact');
hamb.addEventListener('click', hambHandler);


contact.addEventListener('click',function(){
  let documents = '+85457546453';

  documents.execCommand();
});


closeCard(cart_btn);
closeCard(card_icon_exit);



// func
function closeCard(fil){
  
  fil.addEventListener('click', displayCard);
  function displayCard(e){
  e.preventDefault();
  cart_table.classList.toggle('visible');

 }
}

function hambHandler(e){
  e.preventDefault();
  popup.classList.toggle('open');
  hamb.classList.toggle('active');
  body.classList.toggle('noscroll');
  renderPopup();
}
function renderPopup(){
  popup.appendChild(menu);
}