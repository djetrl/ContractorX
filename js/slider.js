let position = 0;
let slidesToShow = 2.5;
let slidesToScroll = 1.5;
const container =  document.querySelector('.PastProject_slider_container');
const track =  document.querySelector('.slider-track');
const item =  document.querySelectorAll('.slider-item');
const btnPrev =  document.querySelector('.btn-prev');
const btnNext =  document.querySelector('.btn-next');
const PastProjects_title = document.querySelector('.PastProjects_title');
let fz = parseInt(getComputedStyle(PastProjects_title).fontSize);
console.log(fz);

SliderResize();
const itemCount = item.length;
const itemWidth =container.clientWidth / slidesToShow + fz;
console.log(itemWidth);
const movePosition = slidesToScroll * itemWidth;
item.forEach((item)=>{
  item.style.minWidth = `${itemWidth}px` 
});
btnNext.addEventListener('click',() =>{
  const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition ();
  checkBtns();
});
btnPrev.addEventListener('click', () =>{
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition ();
  checkBtns();
});
const setPosition = () =>{
  track.style.transform = `translateX(${position}px)`
}
const checkBtns = () =>{
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemCount-slidesToShow) * itemWidth;
}
checkBtns();

// let SizeWidth = setInterval(()=>{

// },10)
function SliderResize(){
  let  widthScreen = window.screen.width;  
  if( widthScreen >= 1800){
    slidesToShow = 3;
    slidesToScroll = 1;
    console.log(widthScreen);
  }else if (widthScreen <= 1060 && widthScreen > 800 ){
    slidesToShow = 2;
    slidesToScroll = 1.2;
  }else if (widthScreen <= 800){
    slidesToShow = 1;
    slidesToScroll = 1.1;
  }
}

window.addEventListener('resize', SliderResize);
