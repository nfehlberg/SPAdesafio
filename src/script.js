import {Router} from './router.js'

const buttonUniverse = document.querySelector('.universe')
const buttonExplore = document.querySelector('.exploration')
const buttonHome = document.querySelector('.home')
const imgHome = document.querySelector ('.imgHome')
const imgUniverse = document.querySelector ('.imgUniverse')
const imgExplore = document.querySelector('.imgExplore')

buttonHome.addEventListener('click', function(){
  imgHome.classList.remove('hide')
  imgUniverse.classList.add('hide')
  imgExplore.classList.add('hide')
  buttonHome.classList.add('active')
  buttonExplore.classList.remove('active')
  buttonUniverse.classList.remove('active')
})

buttonUniverse.addEventListener('click', function(){
  imgHome.classList.add('hide')
  imgUniverse.classList.remove('hide')
  imgExplore.classList.add('hide')
  buttonHome.classList.remove('active')
  buttonExplore.classList.remove('active')
  buttonUniverse.classList.add('active')

})

buttonExplore.addEventListener('click', function(){
  imgHome.classList.add('hide')
  imgUniverse.classList.add('hide')
  imgExplore.classList.remove('hide')
  buttonHome.classList.remove('active')
  buttonExplore.classList.add('active')
  buttonUniverse.classList.remove('active')
})


const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()