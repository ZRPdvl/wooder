const btnNumber = document.querySelectorAll(".header__number--btn");

btnNumber.forEach(element => {
    element.addEventListener('click' , (el)=>{
        btnNumber.forEach(element => {
            element.classList.remove('header__number--btn--active')
        });
    element.classList.add("header__number--btn--active")
    })
});

const burger = document.querySelector('.header__menu--btn');

burger.addEventListener('click' , (el)=>{
    el.preventDefault();
    document.querySelector('.header__menu--burger').classList.toggle('active')
    document.querySelector('.header__menu--item').classList.toggle('active')
    document.querySelector('body').classList.toggle('hide')
})


window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
		document.querySelectorAll('.scrolpage').forEach((el, i) => {
			if (el.offsetTop - 300 <= scrollDistance) {
				document.querySelectorAll('.header__number--btn').forEach((el) => {
					if (el.classList.contains('header__number--btn--active')) {
						el.classList.remove('header__number--btn--active');
					}
				});

				document.querySelectorAll('.header__number--btn')[i].classList.add('header__number--btn--active');
			}
		});

        const headerHeith = document.querySelector('.header').clientHeight;
        if ( scrollDistance > headerHeith / 1 ){
           document.querySelector('.header__body--number').classList.add('header__body--number--fixed')
        } else{
            document.querySelector('.header__body--number').classList.remove('header__body--number--fixed')
        } 
});


const infoPoppapBtn = document.querySelector('.about__info--btn');
const infoPoppap = document.querySelector('.about__info--poppap');
const closeInfoPoppap = document.querySelector('.info__poppap--close');

infoPoppapBtn.addEventListener('click' , (el) => {
    el.preventDefault();
    infoPoppap.classList.add('active')
    document.querySelector('body').classList.add('hide')
})
closeInfoPoppap.addEventListener('click' , (el) => {
    el.preventDefault();
    infoPoppap.classList.remove('active')
    document.querySelector('body').classList.remove('hide')
})


