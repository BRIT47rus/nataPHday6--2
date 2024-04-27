const moreContent= document.querySelectorAll('.more-content');
let modal = document.querySelector('.modal-wrap ');
let modalInfo = document.querySelector('.modal-wrap_info');
const imgZoom = document.querySelectorAll('#img-click');
const popUp= document.querySelector('.container .pop-up')

//Модальные окна
{
moreContent.forEach(function(item){
  item.onclick = (event)=>{
    let target = event.target
    

if(target.dataset.content ==='studio'){
//Студийная модалка
  modalInfo.classList.remove('modal_close');
  openModal(modalInfo)


}else{
  //Галерея
  
  modal.classList.remove('modal_close');
 
  openModal(modal)
      }

    }
   
  }
)

const openModal= function(modalElement){
  modalElement.onclick = (event)=>{
 
    let target = event.target
    if (target === modalElement || target.classList.contains('close-Item')){
      modalElement.classList.add('modal_close')
    
  }
}

}
}
    
//pop-up
{


imgZoom.forEach((item)=>{
 
  item.onclick=()=>{

    document.querySelector('.container').style.display  = 'block';
    document.querySelector('.container .pop-up img').src = item.getAttribute('src');

  }

})
popUp.onclick=(item)=>{
  let target = item.target

if(target === document.querySelector('.container .pop-up span') || target === popUp){
  document.querySelector('.container').style.display  = 'none';

}

  
  

}

}
//----------------------------------------------scrol
document.addEventListener('DOMContentLoaded',()=>{
const hero = document.querySelector('.block__first');
const header = document.querySelector('.header');
const scrollItems = document.querySelectorAll('.scroll-item');


const scrollAnimation =()=>{

  let windowCenter = window.innerHeight /2 + window.scrollY;
  scrollItems.forEach( el=>{
    let scrollOffset = el.offsetTop + (el.offsetHeight -500);
    if(windowCenter>=scrollOffset){
      el.classList.add('animation-class')
    }else{
      el.classList.remove('animation-class')

    }
  })
}


const headerFixed = ()=>{
  let scrollTop = window.scrollY;
let heroCenter = hero.offsetHeight / 2;

if(scrollTop >= heroCenter){
   header.classList.add('fixed') ;
   hero.style.marginTop = `${header.offsetHeight}px`;
  }else{
    header.classList.remove('fixed');
    hero.style.marginTop = `0px`;

}
  
}

headerFixed()
scrollAnimation()
window.addEventListener('scroll',()=>{
  headerFixed()
  scrollAnimation()
})

})