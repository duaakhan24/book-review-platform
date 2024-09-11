
/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose  = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

    //   .........    menu show
    // validate if contant exists 
    if(searchButton){
        searchButton.addEventListener('click', () =>{
            searchContent.classList.add('show-search')
        })
    }

    // -----------menu hidden 
    // validate if contant close
    if(searchClose){
        searchClose.addEventListener('click', () =>{
            searchContent.classList.remove('show-search')
        })
    }
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader =() =>{
    const header = document.getElementById('header') 
    //when the scroll is greater than 50 viewport height, add the 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*========================== DARK LIGHT THEME =================================*/ 

/*========================== DARK LIGHT THEME =================================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme by checking if 'dark-theme' class exists
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply previously selected theme and icon, if any
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the current theme and icon to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
             : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ------------------------
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('review-form');
    const reviewList = document.querySelector('.container__right-review'); // Existing review section

    // Listen for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Get all form values
        const bookTitle = document.getElementById('book-title').value;
        const userName = document.getElementById('name').value || 'Anonymous';
        const reviewText = document.getElementById('review').value;
        const rating = document.getElementById('rating').value || 0;
        const imageFile = document.getElementById('image').files[0]; // Get the image file

        // Create the new review card element
        const newReview = document.createElement('div');
        newReview.classList.add('card-review');

        // If there's an image file, read it using FileReader
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                newReview.innerHTML = `
                    <img src="${e.target.result}" alt="user" />
                    <div class="card__content">
                        <span><i class="ri-double-quotes-l"></i></span>
                        <div class="card__details">
                            <h4 class="book-name">Book: ${bookTitle}</h4>
                            <div id="star-rating">
                                ${generateStars(rating)}
                            </div>
                            <p>${reviewText}</p>
                            <h4>- ${userName}</h4>
                        </div>
                    </div>
                `;
                reviewList.appendChild(newReview);
            };
            reader.readAsDataURL(imageFile); // Read the image file
        } else {
            // No image file, just display the review without an image
            newReview.innerHTML = `
                <div class="card__content">
                    <span><i class="ri-double-quotes-l"></i></span>
                    <div class="card__details">
                        <h4 class="book-name">Book: ${bookTitle}</h4>
                        <div id="star-rating">
                            ${generateStars(rating)}
                        </div>
                        <p>${reviewText}</p>
                        <h4>- ${userName}</h4>
                    </div>
                </div>
            `;
            reviewList.appendChild(newReview);
        }

        // Clear the form after submission
        form.reset();
        document.getElementById('rating').value = 0;
    });

    document.querySelectorAll('.star').forEach(function(star) {
        star.addEventListener('click', function() {
            let ratingValue = this.getAttribute('data-value');
            document.getElementById('rating').value = ratingValue;
    
            // Remove active class from all stars
            document.querySelectorAll('.star').forEach(function(s) {
                s.classList.remove('active');
            });
    
            // Add active class to the clicked star and previous ones
            for (let i = 0; i < ratingValue; i++) {
                document.querySelectorAll('.star')[i].classList.add('active');
            }
        });
    });
    

    // Helper function to generate star HTML based on rating
    function generateStars(rating) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="${i <= rating ? 'star-done' : 'star'}">&#9733;</span>`;
        }
        return starsHtml;
    }
});
