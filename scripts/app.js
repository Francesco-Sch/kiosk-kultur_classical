// Activates slider
var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1.4,
    spaceBetween: 30,
    freeMode: true,
    slidesOffsetBefore: 700,
    setWrapperSize: true
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

// Hides 'About project'-Button, when the first slide moves
const swiperContainer = document.querySelector('.swiper-container');
const slides = document.querySelectorAll('.swiper-slide');
let windowThird = window.innerWidth / 3;

swiperContainer.addEventListener('mousemove', () => {
    var slidePosition = slides[0].getBoundingClientRect()

    if(slidePosition.left <= windowThird) {
        document.querySelector('#about-project').style.opacity = '0';
        console.log('Works!')
    } else {
        document.querySelector('#about-project').style.opacity = '1';
    }
})