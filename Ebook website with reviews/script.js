
/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose  = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

    //   .........    menu show
    // validate if contant exists 
    if(searchButton){
        searchButton.addEventListener('click', () =>{
            searchContent.classList.add('show-search')
        })
    }

    // -----------menu hidden 
    // validate if contant close
    if(searchClose){
        searchClose.addEventListener('click', () =>{
            searchContent.classList.remove('show-search')
        })
    }

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
loginClose  = document.getElementById('login-close'),
loginContent = document.getElementById('login-content')

//   .........    menu show
// validate if contant exists 
if(loginButton){
  loginButton.addEventListener('click', () =>{
      loginContent.classList.add('show-login')
  })
}

// -----------menu hidden 
// validate if contant close
if(loginButton){
  loginClose.addEventListener('click', () =>{
      loginContent.classList.remove('show-login')
  })
}

// =========================================================================>
    //=========================================================================>
        // <!-- JavaScript for toggling forms -->
function login() {
    document.getElementById('login-form').style.display = 'grid';
    document.getElementById('register-form').style.display = 'none';
    document.querySelector('.toggle-btn.active-btn').classList.remove('active-btn');
    document.querySelector('.toggle-btn').classList.add('active-btn');
}

function register() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'grid';
    document.querySelector('.toggle-btn.active-btn').classList.remove('active-btn');
    document.querySelectorAll('.toggle-btn')[1].classList.add('active-btn');
}



/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader =() =>{
    const header = document.getElementById('header') 
    //when the scroll is greater than 50 viewport height, add the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/*=============== HOME SWIPER ==================================================*/
let swiperHome = new Swiper('.home-swiper', {
    
    loop: true,
    spacebetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
     autoplay: {
        delay: 3000,
        disableOnInteraction: false,
     },
      
     breakpoints: {

        1220:{
            spacebetween :-32,
            

        }
     }
  
  });

/*=============== FAVORITES  SWIPER ===============*/

let swiperFavorites = new Swiper('.favorites-swiper', {
    
    loop: true,
    spacebetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

     // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      
     breakpoints: {
        1150:{
            slidesPerView: 4,
            centeredSlides: false,
            

        }
     }
  
  });
/*=============== FEEDBACK  SWIPER ===============*/

let swiperFeedback = new Swiper('.feedback-swiper', {
    
    loop: true,
    spacebetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

      
     breakpoints: {
        1150:{
            slidesPerView: 3,
            centeredSlides: false,
            

        }
     }
  
  });


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
             : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
 const scrollActive = () =>{
    const scrollDown  = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsettop - 58
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop  && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
 }
 window.addEventListener('scroll',scrollActive)

/*========================== DARK LIGHT THEME =================================*/ 

/*========================== DARK LIGHT THEME =================================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//function to get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a theme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//toggle between light and dark themes
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and current icon that the user chooses
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true;  animations
})


sr.reveal('.home-data', '.favorite-container', '.feedback-container', '.footer')
sr.reveal('.home-images', {delay: 600})
sr.reveal('.publish-data', {origin: 'left'})
sr.reveal('.publish-images', {origin: 'right'})