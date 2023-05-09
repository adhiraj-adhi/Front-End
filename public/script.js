let swiperSlides = document.querySelector(".swiper");
let robot = document.querySelector(".robot");
let content = document.querySelector(".content");
let enrollBtn = document.querySelector(".enrollBtn");
console.log(enrollBtn);
let closeSwiper = document.querySelector(".content .closeSwiper");
function enroll() {
    robot.style.transform = "translateY(-20%) scale(0.8)";
    content.style.transform = "translate(-14%, -20%) scale(0.86, 0.8)";
    swiperSlides.style.display = "block";
    enrollBtn.style.display = "none";
    closeSwiper.style.display = "block";
}


function closeEvents() {
    console.log("CC");
    robot.style.transform = "none";
    content.style.transform = "none";
    swiperSlides.style.display = "none";
    enrollBtn.style.display = "block";
    closeSwiper.style.display = "none";
}


// ==================  nav for small device  ==================
let hamburger = document.querySelector(".hamburger");
let closeNav = document.querySelector(".closeNav");
let navBar = document.querySelector("nav");
hamburger.addEventListener("click", () => {
    closeNav.style.display = "block";
    navBar.style.display = "block";
    navBar.style.right = 0;
})

closeNav.addEventListener("click", () => {
    closeNav.style.display = "none";
    navBar.style.display = "none";
    navBar.style.right = "-10%";
})