/*========================== DARK LIGHT THEME =================================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const moonIcon = 'ri-moon-line'
const sunIcon = 'ri-sun-line'

//previously selected topic ( if user select)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(sunIcon) ? sunIcon : moonIcon

//we validate if the user previously chose a topic
if(selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === moonIcon ? 'remove' : 'add'](sunIcon)
  themeButton.classList[selectedIcon === moonIcon ? 'add' : 'remove'](moonIcon)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  themeButton.classList.toggle(sunIcon)
  themeButton.classList.toggle(moonIcon)

  //we save the theme and current icon that user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
             : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ===================== form ==========

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const coverImage = document.getElementById('cover-image').files[0];

    // Log to check values are captured
    console.log(title, author, genre, coverImage);

    // Display area
    const displayArea = document.getElementById('book-display');
    displayArea.innerHTML = ''; // Clear previous content

    // Create a container for the book details
    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details'); // Apply the 'book-details' class

    // Create and append title, author, and genre elements
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = `Title: ${title}`;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${author}`;
    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${genre}`;

    // Create image element for the cover
    if (coverImage) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(coverImage);
      img.alt = title + " cover";
      img.classList.add('book-cover'); // Apply the 'book-cover' class for styling
      bookDetails.appendChild(img);
    }

    // Append the details to the book display area
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookGenre);

    displayArea.appendChild(bookDetails); // Append the entire book details div to the display area
  });
});








// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Function to handle form submission
document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form from refreshing the page
  
  // Get form data
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const coverImage = document.getElementById('cover-image').files[0];

  // Create a new FileReader to read the uploaded image file
  const reader = new FileReader();
  reader.onload = function(event) {
      // Get the image URL from the FileReader
      const imageURL = event.target.result;
      
      // Create the book card HTML dynamically
      const bookCard = `
          <article class="card__article">
              <img src="${imageURL}" alt="image" class="card__img">
              <div class="card__data">
                  <span class="card__description">${title}</span>
                  <h2 class="card__title">${author}</h2>
                  <h2 class="card__description">${genre}</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
          </article>
      `;
      
      // Append the new book card to the book list container
      document.getElementById('book-list').innerHTML += bookCard;
      
      // Optionally, clear the form fields after submission
      document.getElementById('book-form').reset();
  };
  
  // Read the image file as a data URL
  if (coverImage) {
      reader.readAsDataURL(coverImage);
  }
});


/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true;  animations
})

sr.reveal('.publish-data', {origin: 'left'})
sr.reveal('.publish-images', {origin: 'right'})