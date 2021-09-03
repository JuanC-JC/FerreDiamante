import './styles/header.scss'
import './styles/intro.scss';
import './styles/data.scss';
import './styles/info.scss';
import './styles/categories.scss';
import './styles/services.scss';
import './styles/contact.scss'
import './styles/footer.scss'
import './styles/partnerts.scss'

import './observers'

//header
const headerIcon = document.querySelector('.header__icon')
headerIcon.addEventListener('click',display)

//whatsapp
const contactWmessage = document.querySelector('.contact--whatsapp')
contactWmessage.addEventListener('click',()=> sendWaMessage('3013437122','Hola, estoy interesado en recibir más información. Gracias'))

//redirecciona arriba
const  topPage = document.querySelector('.contact--arrowUp')
// console.log(topPage)
topPage.addEventListener('click',moveUp)

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

function sendWaMessage (number, textMessage){

  const message = `https://wa.me/57${number}?text=${encodeURIComponent(textMessage)}`

  window.open(message,'_blank').focus()
}

function moveUp (){
  window.scrollTo(0,0)
}

