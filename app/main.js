window.addEventListener('load', () => {
        renderSlider();
        swiper();
        tooltip();
        submenu();
        renderGrid();
        renderGridMenu();
        gridMenuEvents();

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


const submenu = () => {
        const header = document.querySelector('.header');
        const subnavs = document.querySelectorAll(".subnav")
        const navButtons = document.querySelectorAll(".header_navigation_item");


        const openSubmenu = () => {
                navButtons[0].addEventListener("click", () => {
                        subnavs[0].classList.toggle("opened")
                })

                navButtons[1].addEventListener("click", () => {
                        subnavs[1].classList.toggle("opened")
                })

                navButtons[4].addEventListener("click", () => {
                        subnavs[2].classList.toggle("opened")
                })


                //con hover (yo prefiero hover :3)

                // navButtons[0].addEventListener("mouseenter", () =>{
                //         subnavs[0].classList.toggle("opened")
                // })

                // navButtons[1].addEventListener("mouseenter", () =>{
                //         subnavs[1].classList.toggle("opened")
                // })

                // navButtons[4].addEventListener("mouseenter", () =>{
                //         subnavs[2].classList.toggle("opened")
                // })
        }


        const closeSubmenu = () => {
                header.addEventListener("mouseleave", () => {
                        subnavs.forEach(subnav => {
                                subnav.classList.remove("opened");
                        })
                });


                window.addEventListener("scroll", () => {
                        subnavs.forEach(subnav => {
                                subnav.classList.remove("opened");
                        })
                });
        }


        openSubmenu();
        closeSubmenu();

};

//para cortar los titulos
const shortenTitle = (project) => {
        const projectArr = project.split(" ").slice(0, 5).join(" ") + "..."


        return projectArr
}


//categorías

const createCategories = (categories) => {
        return categories.join(" ");

}


const renderGrid = () => {
        const gridHolder = document.querySelector(".home_grid_holder")
        let htmlString = ""

        for (let i = 0; i < home.grid.length; i++) {
                const cardHTMLString =
                        `<div class="card ${createCategories(home.grid[i].categories)} ">
                        <div class="image">
                            <img src="${home.grid[i].img}" alt="${home.grid[i].project}">
                            <div class="image_hover">
                                <div class="image_hover_content">
                                    <h4 class="project_name">${shortenTitle(home.grid[i].project)}</h4>
                                    <div class="icons">
                                        <div class="folder">
                                            <div class="fa fa-folder"></div>
                                        </div>
                                        <div class="heart">
                                            <div class="fa fa-heart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="details">
                            <div class="author">
                                <a href="${home.grid[i].details.author.link}">
                                        <img src="${home.grid[i].details.author.img}" alt="${home.grid[i].details.author.name}">
                                        <h5 class="author_name">${home.grid[i].details.author.name}</h5>
                                </a>
                                <div class="badge_pro ${home.grid[i].details.author.pro ? "" : "no_pro"}">Pro</div>
                                <div class="badge_team ${home.grid[i].details.author.team ? "" : "no_team"}">Team</div>
                            </div>
                            <div class="statistics">
                                <div class="likes">
                                    <div class="heart">
                                        <div class="fa fa-heart"></div>
                                    </div>
                                    <p>${home.grid[i].details.statistics.likes}</p>
                                </div>
                                <div class="views">
                                    <div class="eye">
                                        <div class="fa fa-eye"></div>
                                    </div>
                                    <p>${home.grid[i].details.statistics.views}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
                htmlString += cardHTMLString;
        }

        gridHolder.innerHTML = htmlString


}


const getSingleCategories = () => {
        const categories = home.grid.map(gridItem => gridItem.categories)
        const uniqueCategories = []

        categories.forEach(categoryArr => {
                categoryArr.forEach(category => {
                        if (!uniqueCategories.includes(category)) {
                                uniqueCategories.push(category)

                        }
                })

        })
        
        uniqueCategories.sort()

        return uniqueCategories;

}


const renderGridMenu = () => {
        const filtersCategories = document.querySelector(".filter_categories ul")
        let htmlString = ""
        const categories = getSingleCategories();
        categories.unshift("All")
        categories.forEach(category => {
                htmlString += `
                <li class="category ${category == "All" ? "active" : ""} " data-category = "${category}">${category}</li>
                `
                
        
        })


        filtersCategories.innerHTML = htmlString

       
}


const gridMenuEvents = () => {
        const filterButtons = document.querySelectorAll(".filter_categories ul .category")
        const cards = document.querySelectorAll(".card")


        filterButtons.forEach(filterButton => {
                filterButton.addEventListener("click", () => {
                        const category = filterButton.dataset.category;
                        
                        cards.forEach(card => {
                                if (card.classList.contains(category)) {
                                        card.classList.remove("hidden")
                                        
                                } else{
                                        card.classList.add("hidden")
                                }
                        })
                        if (category == "All") {
                                cards.forEach(card => {
                                        card.classList.remove("hidden")
                                        
                                });     
                        }

                        filterButtons.forEach(filterBut => {
                                filterBut.classList.remove("active")
                                
                        });
                        filterButton.classList.add("active")
                })
        })

}

























