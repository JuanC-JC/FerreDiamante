import './styles/header.scss'
import './styles/intro.scss';
import './styles/data.scss';
import './styles/info.scss';
import './styles/categories.scss';
import './styles/services.scss';
import './styles/contact.scss'
import './styles/footer.scss'
import './styles/partnerts.scss'



import deliveryIcon from '../src/assets/delivery.svg'
import deliveryOutlineIcon from '../src/assets/deliveryOutline.svg'

const deliveryCard = document.querySelector('#deliveryCard')

// deliveryCard.addEventListener('mouseover',()=>{
//   deliveryCard.querySelector('img').src = deliveryOutlineIcon
// })

// deliveryCard.addEventListener('mouseleave',()=>{
//   deliveryCard.querySelector('img').src = deliveryIcon
// })


//header
const headerIcon = document.querySelector('.header__icon')
headerIcon.addEventListener('click',display)

function display(){

  //para acceder menu
  let menu = document.querySelector('#menuHeader')
      menu.classList.toggle("menu--visibility")

  //cambiar su imagen
  let menuIcon = document.querySelector('.menu')
  let closeIcon = document.querySelector('.close')
    menuIcon.classList.toggle("hidden")
    closeIcon.classList.toggle("hidden")

}