
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

const cart_btn =document.querySelector('#card_item');
const cart_table =document.querySelector('.shop_window');
const card_icon_exit =document.querySelector('.exit_shop');

const contact =document.querySelector('#contact');
const btn_exit_contact = document.querySelector('.exit_Contact');
const ContactMenu = document.querySelector('.ContactMenu');
const BlogSlider = document.querySelector('#Blog_group_slider')

hamb.addEventListener('click', hambHandler);

closeCard(cart_btn,  cart_table);
closeCard(card_icon_exit,  cart_table);

closeCard(btn_exit_contact,  ContactMenu);
closeCard(contact,  ContactMenu);

// func
function closeCard(btn, block_close){
  
  btn.addEventListener('click', displayCard);
  function displayCard(e){
  e.preventDefault();
  block_close.classList.toggle('visible');

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
};

$(function(){
  $('.PastProject_slider_container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive:[
      {
	      breakpoint: 801,
	      settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
	      }
      },
    ]
  })
  $('.Testimonials_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive:[
      {
	      breakpoint: 801,
	      settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll:1,
          arrows: false,
	      }
	    },
    ]
  })
})
