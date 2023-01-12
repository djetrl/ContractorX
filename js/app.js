
const hamb = document.querySelector('#hamb'),
      popup = document.querySelector('#popup'),
      menu = document.querySelector('#menu').cloneNode(1),
      body = document.body,

      cart_btn =document.querySelector('#card_item'),
      cart_table =document.querySelector('.shop_window'),
      card_icon_exit =document.querySelector('.exit_shop'),

      contact =document.querySelectorAll('[data-contact]'),
      btn_exit_contact = document.querySelector('.exit_Contact'),
      ContactMenu = document.querySelector('.ContactMenu'),
      BlogSlider = document.querySelector('#Blog_group_slider'),
      Contact_out =  document.querySelector('.out'),
      Contact_footer = document.querySelectorAll('.content_container_contact'),
      contact_footer_out = document.querySelector('.footer_contact_copy_out');
hamb.addEventListener('click', hambHandler);
document.querySelector('.conatact_container').addEventListener('click',(event)=>{
  const  elem = event.target;
  if (elem.classList.contains('need_copy')){
    navigator.clipboard.writeText(elem.textContent).then(()=>{
      Contact_out .innerHTML +='copy<br>';
      setTimeout(()=>{Contact_out .innerHTML =''; },600);
    })
    .catch(err =>{
      console.log(err);
    })
  }
});
Contact_footer.forEach( (element) =>{
  element.addEventListener('click',(event)=>{
      const  elem = event.target;
      if (elem.classList.contains('need_copy')){
        navigator.clipboard.writeText(elem.textContent).then(()=>{
          contact_footer_out.innerHTML +='copy<br>';
          setTimeout(()=>{
            contact_footer_out .innerHTML ='';
          },600);
        })
        .catch(err =>{
          console.log(err);
        })
      }
    });
  }
)

closeCard(cart_btn,  cart_table);
closeCard(card_icon_exit,  cart_table);
closeCard(btn_exit_contact,  ContactMenu);
contact.forEach(btns =>{
  closeCard(btns,  ContactMenu);
});

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

//slider
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

