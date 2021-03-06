// Activates slider
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    slidesOffsetBefore: 500,
    setWrapperSize: true,
    mousewheel: {
        invert: false,
    },
    grabCursor: true,
    breakpoints: {
        500: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1,
            direction: 'horizontal',
        },
        959: {
            slidesOffsetBefore: 700,
            slidesPerView: 1.4,
            direction: 'horizontal',
        },
    }
});

// Shows information boxes on hover
const informationIcons = document.querySelectorAll('.icon');

function showInformation(item) {
    item.nextElementSibling.classList.add('show');
}

function hideInformation(item) {
    item.nextElementSibling.classList.remove('show');
}

informationIcons.forEach( (icon) => {
    icon.addEventListener('mouseenter', () => {
        showInformation(icon)
    });
    icon.addEventListener('mouseleave', () => {
        hideInformation(icon)
    });
})

// Hides 'About project'-Button and title, when the first slide moves
const swiperContainer = document.querySelector('.swiper-container');
const slides = document.querySelectorAll('.swiper-slide');

let windowThird = window.innerWidth / 3;
let windowHalfHeight = window.innerHeight / 2;

const mq = window.matchMedia( "(max-width: 768px)" )


"setTranslate transitionStart transitionEnd".split(" ")
.forEach(function(event) {
    mySwiper.on(event, () => {
        var slidePosition = slides[0].getBoundingClientRect()
    
        if(slidePosition.left <= windowThird && !mq.matches) {
            document.querySelector('.about-project').style.display = 'none';
            document.querySelector('header h1').style.opacity = '0';
            
            document.querySelector('#reset-slider .reset-left').classList.add('show');
    
        } else if(slidePosition.top <= windowHalfHeight && mq.matches) {
            document.querySelector('.about-project').style.display = 'none';
            document.querySelector('header h1').style.opacity = '0';

            document.querySelector('#reset-slider .reset-top').classList.add('show');
    
        } else {
            document.querySelector('.about-project').style.display = 'block';
            document.querySelector('header h1').style.opacity = '1';

            document.querySelector('#reset-slider .reset-left').classList.remove('show');
            document.querySelector('#reset-slider .reset-top').classList.remove('show');
        }
    })
})

// Let reset button reset the slider
const resetButton = document.querySelector('#reset-slider .reset-left');
const resetButtonTop = document.querySelector('#reset-slider .reset-top');

resetButton.addEventListener('click', () => {
    mySwiper.slideTo(0, 1000, false);
})
resetButtonTop.addEventListener('touchstart', () => {
    mySwiper.slideTo(0, 1000);
})

// Shows information about the project on button click
const projectButton = document.querySelector('#about-project');
const projectInformation = document.querySelector('#slide-out');

// Open and closes information slide out
document.body.addEventListener('click', (event) => {
    let clickedOutside = true;

    event.composedPath().forEach( (item) => {
        if(!clickedOutside) {
            return
        }

        // Opens slide out
        //Keeps it open on click inside of it
        if(item.className === 'about-project' || item.className === 'show-information') {
            clickedOutside = false;
            projectInformation.classList.add('show-information');
        }
    })

    // Closes slide out on click outside of it
    if(clickedOutside) {
        projectInformation.classList.remove('show-information');
    }
})

// Closes slide out on mobile 
const closingArrow = document.querySelector('.close-slide-out');

closingArrow.addEventListener('click', () => {
    projectInformation.classList.remove('show-information');
})