window.addEventListener('load', () => {
        renderSlider();
        swiper();
        tooltip();




});



const swiper = () => {
        const mySwiper = new Swiper('.swiper-container', {
                // Optional parameters

                direction: 'horizontal',
                loop: true,
                simulateTouch: false,

                // If we need pagination
                pagination: {
                        el: '.swiper-pagination',
                        clickable: true

                },

                //con el teclado

                keyboard: {
                        enabled: true,
                },

                // Navigation arrows
                navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                }
        });

}


const tooltip = () => {

        tippy('.hasToolTip', {
                content: 'Click to see project'
        });

}


const renderSlider = () => {

        const sliderWrapper = document.querySelector(".swiper-wrapper")
        let htmlString = ""

        for (let i = 0; i < home.slider.length; i++) {
                const slidesHTMLString =
                        `<div class="swiper-slide">
                        <img src="${home.slider[i].img}" alt="">
                        <div class="text">
                            <h1 class="slider_title">Discover the world’s top designers & creatives</h1>
                            <p class="slider_description">Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.
                            </p>
                            <a href="#" class="boton">Sign in</a>
                        </div>
                        <div class="slider_card hasToolTip" data-tippy-placement="bottom">               
                            <div class="name">
                                <h3 class="name_project">
                                ${home.slider[i].card.project}
                                </h3>
                                <p class="author">by <a href="${home.slider[i].card.author.link}">${home.slider[i].card.author.name}</a></p>
                            </div>
                            <img src="${home.slider[i].card.author.img}" alt="" class="author_image">
                            <!-- <a href="#" class="boton">See project</a>-->
                        </div>
                    </div>`;
                htmlString += slidesHTMLString;
        }

        sliderWrapper.innerHTML = htmlString




        const texts = document.querySelectorAll(".text")
        const cards = document.querySelectorAll(".slider_card")


        for (let i = 0; i < texts; i++); {
                for (let a = 0; a < home.slider.length; a++) {
                        if (home.slider[0].text == true) {
                                texts[0].classList.add("first_slide")
                        }
                }
        }


        for (let b = 0; b < cards; b++); {
                for (let c = 0; c < home.slider.length; c++) {
                        if (home.slider[0].card.appear == false) {
                                cards[0].classList.add("first_slide")
                        }
                }
        }

}

















