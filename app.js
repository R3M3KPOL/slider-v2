//slider reviews
const sliderContainer = document.querySelector('.reviews__box')
const sliderItem = document.querySelectorAll('.reviews__figure')
const prevBtn = document.querySelector('.reviews__button--left')
const nextBtn = document.querySelector('.reviews__button--right')
//counter -for slider reviews
let counter=0;

// ----> DO SPRAWDZENIA !! <---- //
const size = sliderContainer.clientWidth /2;
// const size = sliderContainer.clientWidth ;

//slider reviews

const nextElement =()=>{
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderContainer.style.transform ='translateX('+ (-size * counter) + 'px)';
    if(sliderItem[counter].dataset.name ==='last-element'){
        console.log('działa')
    }
}

const prevElement =()=>{
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderContainer.style.transform ='translateX('+ (-size * counter) + 'px)';
}
prevBtn.addEventListener("click", prevElement)
nextBtn.addEventListener('click', nextElement)