const slides = document.querySelector(".slides");
const containerDots = document.querySelector(".container-dots");

// Global Index to track Image
var slideIndex = 1;

// Images container
const images = [
    { src: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" },
    { src: "https://images.unsplash.com/photo-1517878570305-15000115ffe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
    { src: "https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { src: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8MHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
    { src: "https://media.istockphoto.com/photos/sunset-picture-id157727724?b=1&k=20&m=157727724&s=170667a&w=0&h=1a2OGuXBxJWUBqHrY3bvER1_WeO9W8xqMgiUtRI_zJg=" }
];

// Adding images and dots to the Respective Container
images.map((img) => {
    // Creating Image Element and adding src of that image
    var imgTag = document.createElement("img");
    imgTag.src = img.src;

    // Creating Dot (div) Element adding dot class to it
    var dot = document.createElement("div");
    dot.classList.add("dot");

    // Appending the image and dots to respective container
    slides.appendChild(imgTag);
    containerDots.appendChild(dot);
});


function updateImageAndDot() {
    /* ...........Updating Image.............. */
    const activeSlide = slides.querySelector("[data-active]");
    slides.children[slideIndex - 1].dataset.active = true;
    activeSlide && delete activeSlide.dataset.active;
  
    /* ...........Updating Dots.............. */
    const activeDot = containerDots.querySelector("[data-active]");
    containerDots.children[slideIndex - 1].dataset.active = true;
    activeDot && delete activeDot.dataset.active;
  }


// Slide next button Click Event
const nextSlide = () => {
    // It will update the slideIndex on the basis of the images.length 
    if (slideIndex !== images.length)
        ++slideIndex;

    else if (slideIndex === images.length)
        slideIndex = 1;

     updateImageAndDot();
};

const nextBtn = document.querySelector(".next");
nextBtn.onclick = nextSlide() ;

// Slide Prev Button Click Event
const prevSlide = () => {
    if (slideIndex !== 1)
        --slideIndex;

    else if (slideIndex === 1)
        slideIndex = images.length;

        updateImageAndDot() ;
};

const prevBtn = document.querySelector(".prev");
prevBtn.onclick = prevSlide;






updateImageAndDot();

// It helps to move the dot , it takes "index" as parameter and update the slideIndex 
function moveDot(index) {
    slideIndex = index;
    updateImageAndDot(); // to update img and dot 
}

// Adding EventListener to all dots so that when user click on it trigger
const dots = containerDots.querySelectorAll('*').forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveDot(index + 1);
    });
});
