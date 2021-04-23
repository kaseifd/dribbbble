const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    direction: 'horizontal',
    loop: true,
    
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




tippy('.hasToolTip', {
        content: 'Click to see project' 
}); 


