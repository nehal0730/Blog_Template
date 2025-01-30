const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", function(event) {
  event.preventDefault();  // Prevent form submission
  document.body.classList.toggle("dark-mode");

  // Toggle button text based on current theme
  if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "Light Mode";
  } else {
    themeToggleButton.textContent = "Dark Mode";
  }
});


// Select the buttons
const scrollToTopButton = document.getElementById('scroll-to-top');
const scrollToBottomButton = document.getElementById('scroll-to-bottom');

// Scroll to top when the top button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scrolling
    });
});

// Scroll to bottom when the bottom button is clicked
scrollToBottomButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'  // Smooth scrolling
    });
});

// Show or hide the buttons based on scroll position
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Show "scroll-to-top" button only when scrolled down 300px or more
    if (scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }

    // Show "scroll-to-bottom" button only if not at the bottom of the page
    if (scrollTop + windowHeight < documentHeight - 10) {
        scrollToBottomButton.style.display = 'block';
    } else {
        scrollToBottomButton.style.display = 'none';
    }
});




