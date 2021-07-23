///////show menu here///////
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId);

    //Validate variable text here
    if(toggle&&nav)
    {     //We add show-menu class to the div tag with nav__menu class 
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/////Remove  Menu mobile /////by help of this click on any link so menu remove 
const navLink=document.querySelectorAll('.nav__link')
function linkAction()
{
    const navMenu=document.getElementById('nav-menu');
    //when we click on each nav__link , we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
//by this on every click link action performed and in link action remove the show menu
navLink.forEach(n=>n.addEventListener('click',linkAction))

////////Scroll Sections Active Link//////
const sections=document.getElementById('section[id]')
window.addEventListener('scroll',scrollActive)

function scrollActive()
{
    const scrollY=window.pageYOffset
  sections.forEach(current=>{
      const sectionheight=current.offsetHeight
      const sectionTop=current.offsetTop-50

      if(scrollY>sectionTop && scrollY<=sectionTop+sectionheight)
      {
          document.querySelector('.nav__menu a[href*=' +sectionId+']').classList.add('active-link')
      }
      else
      document.querySelector('.nav__menu a[href*='+sectionId +']').classList.remove('active-link')
  })
}
window.addEventListener('scroll',scrollActive)

//////change background header   if go down vertiall so header border show////
function scrollHeader(){
const nav=document.getElementById('header')
//When user go to down and is >  200 viewport height,add the scroll-header class
if(this.scrollY>=200)
nav.classList.add('scroll-header');
else
nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

///////Show Scroll Top//////////
function scrollTop(){
    const scrollTop=document.getElementById('scroll-top')
    //When the scroll is greater than 460 viewport hight , add the scroll-header class
    if(this.scrollY>=460)
    scrollTop.classList.add('scroll-top');
    else
    scrollTop.classList.remove('scroll-top')
    }
    window.addEventListener('scroll',scrollTop)
    
//// For dark theme button  Dark light theme
const themeButton=document.getElementById('theme-button')
const darktheme='dark-theme'
//it is icon from boxicon
const iconTheme='bx-sun'


      //aCtivate and deactivate the theme manally with the mon button 
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darktheme)
    //just for icon
    themeButton.classList.toggle(iconTheme)
})


//animation
const sr=ScrollReveal({
    origin:top,
    distance:'30px',
    duration:2000,
    rest:true,

});
sr.reveal('.home__data ,.home__img,.about__data,.about__img,.service__content,.menu__content.app__data,.app__img',{
    interval:200
})