const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navItem = $$('.nav-item')
const line = $$('.line')
const header = $('.header')
for(let i=0; i < navItem.length; i++) {
    navItem[i].onmouseover = function () {
        line[i].style.width = this.offsetWidth + 'px';
    }
    navItem[i].onmouseout = function () {
        line[i].style.width = 0 + 'px';

    }
}


 

/* select */
const selectGroup = document.querySelectorAll('.select-group')

selectGroup.forEach(item => {
    item.onclick = function () {
        const list  = item.parentElement.querySelector('.list')
        const option = list.querySelectorAll('.option')
        list.classList.toggle('open')
        const arrow = item.querySelector('i')
        arrow.classList.toggle('open')
        option.forEach(e => {
            e.classList.toggle('open')
            e.onclick = function () {
                item.querySelector('span').innerText = e.innerText;
                list.classList.toggle('open')
                option.forEach(e => {
                    e.classList.remove('open')
                })
                arrow.classList.toggle('open')

            }
            
        });
    }
});


/* slider */
const left = document.querySelector('.icon-left')
const right = document.querySelector('.icon-right')
const slide = document.querySelector('.slide')
const slides = document.querySelector('.slides')
const slideWidth = slide.offsetWidth;

left.onclick = function() {
    slides.scrollLeft -=  slideWidth + 30 ;
    console.log(2);
}

right.onclick = function() {
    console.log(1);
    slides.scrollLeft +=  slideWidth + 30;
}

window.onscroll = () => {
    if(window.scrollY >= 500){
        header.classList.add('open')
    }else{
        header.classList.remove('open')
    }
}

/* testimonial slider */

const testimonialSlider = $('.testimonial-caption__slider')
const testimonialItemWidth = $('.testimonial-caption__wrap').offsetWidth
const testimonialItem = $$('.testimonial-caption__wrap')
let i = 0 ;
function handleSlider () {
    for(let i = 0 ;i <testimonialItem.length;i++){
        setInterval(() => {
            testimonialSlider.scrollLeft += testimonialItemWidth;
        }, 2000);
    }
    for(let i = 0 ;i <testimonialItem.length;i++){
        setInterval(() => {
            testimonialSlider.scrollLeft -= testimonialItemWidth;
        }, 2000);
    }
}
handleSlider();

/* card */
function getParent (element, selector) {
    while(element.parentElement){
        if(element.parentElement.matches(selector)){
            return element.parentElement;
        } else{
            element = element.parentElement;
        }
        
    }
}
const cardHeader = $$('.card-header');

cardHeader.forEach(item => {
    item.onclick = (e) => {
        const card = getParent(e.target, '.card')
        const cardBody = card.querySelector('.card-des')

        cardBody.classList.toggle('hide')
        item.classList.toggle('open')
    }
})

/* menu */
const menuBtn = $$('.menu__btn')
const menuGroup = $$('.menu__group')
menuBtn.forEach((item,i) => {
    item.onclick = () => {
        menuGroup[i].classList.toggle('hide');
    }
})