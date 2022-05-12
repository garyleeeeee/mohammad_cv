const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");
const navigation = document.getElementById("navigation");
const toTopbutton = document.getElementById("toTopBtn");


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
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopbutton.style.display = "block";
} else {
    toTopbutton.style.display = "none";
}
}
  
    

menuBtn.addEventListener("click", toggleNav)
closeBtn.addEventListener("click", toggleNav)
window.onscroll = function() {scrollFunction()};



