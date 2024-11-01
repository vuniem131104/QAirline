function toggleAnswer(element) {

    var faqItem = element.parentElement;
    faqItem.classList.toggle('active-answer');
    var operator = element.querySelector('.operator');
    if (faqItem.classList.contains('active-answer')) {
        operator.textContent = "x";
    } else {
        operator.textContent = "+";
    }
}

let currentIndex = 0;
const slidesWrapper = document.querySelector(".slides-wrapper");
const totalSlides = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active-dot", index === currentIndex);
    });
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    slidesWrapper.style.transform = `translateX(${offset}%)`;

    updateDots();
}

function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    slidesWrapper.style.transform = `translateX(${offset}%)`;

    updateDots();
}

updateDots();


const avatars = document.querySelectorAll('.person-icon');
const comments = document.querySelectorAll('.comment');

const nameElement = document.querySelector('.name');
const jobElement = document.querySelector('.job');
const ratingElement = document.querySelector('.rating-value');

avatars.forEach(avatar => {
    avatar.addEventListener('mouseenter', function () {
        const commentNum = this.getAttribute('data-comment');
        const name = this.getAttribute('data-name');
        const job = this.getAttribute('data-job');
        const rating = this.getAttribute('data-rating');

        comments.forEach(comment => comment.classList.remove('active-hover'));
        document.querySelector(`.comment-${commentNum}`).classList.add('active-hover');

        nameElement.textContent = name;
        jobElement.textContent = job;
        ratingElement.textContent = rating;
    });
});


const beautiful_place = document.querySelector(".beautiful-place");
const locations = document.querySelectorAll(".locationn");
locations.forEach(location => {
    location.addEventListener('mouseenter', () => {
        const imageSrc = location.getAttribute('image');
        beautiful_place.src = imageSrc;
    });

});

function openSignin() {
    document.querySelector('.overlay').style.display = 'block';
    const signinForm = document.querySelector('.signin-form');
    signinForm.style.display = 'flex';
    setTimeout(() => {
        signinForm.classList.add("showSign");
    }, 10);
    document.body.classList.add('no-scroll');
}

function openSignup() {
    document.querySelector('.overlay').style.display = 'block';
    const signupForm = document.querySelector('.signup-form');
    signupForm.style.display = 'flex';
    setTimeout(() => {
        signupForm.classList.add("showSign");
    }, 10);
    document.body.classList.add('no-scroll');
}

function closeForms() {
    document.querySelector('.overlay').style.display = 'none';
    document.body.classList.remove('no-scroll');
    const signinForm = document.querySelector('.signin-form');
    const signupFrom = document.querySelector('.signup-form');

    signinForm.classList.remove('showSign');
    signupFrom.classList.remove('showSign');


    setTimeout(() => {
        signinForm.style.display = 'none';
        signupFrom.style.display = 'none';
    }, 300);
}