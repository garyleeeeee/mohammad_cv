const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
const navigation = document.getElementById("navigation");
const toTopbutton = document.getElementById("toTopBtn");

// Swiper - Advantages Section
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1200px
        1200: {
        slidesPerView: 2,
        // spaceBetween: 10
        },
        // when window width is >= 2000px
        2000: {
            slidesPerView: 3,
            // spaceBetween: 20,
            centeredSlides: true,
            }
    },
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });

toggleNav = () => {
    navigation.classList.contains("active") ? 
    (navigation.classList.remove("active"),
    closeBtn.style.display = "none",
    menuBtn.style.display = "block")
    : 
    (navigation.classList.add("active"),
    closeBtn.style.display = "block",
    menuBtn.style.display = "none"
    )
}

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

scrollFunction = () => {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    toTopbutton.style.display = "block";
} else {
    toTopbutton.style.display = "none";
}
}
  
    

menuBtn.addEventListener("click", toggleNav)
closeBtn.addEventListener("click", toggleNav)
window.onscroll = function() {scrollFunction()};



