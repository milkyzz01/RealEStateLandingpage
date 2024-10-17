// readmore functionality
function toggleReadMore() {
    var extraDesc = document.getElementById("extraDesc");
    var btn = document.getElementById("readMoreBtn");

    // Toggle visibility of the extra description
    var moreLi = document.querySelectorAll('.more-li');
    
    // If content is hidden, show it
    if (moreLi[0].style.display === "none") {
        moreLi.forEach(function(li) {
            li.style.display = "list-item";  // Display the hidden <li> items
        });
        btn.textContent = "Read Less";  // Change button text to "Read Less"
    } else {
        moreLi.forEach(function(li) {
            li.style.display = "none";  // Hide the extra <li> items
        });
        btn.textContent = "Read More";  // Change button text to "Read More"
    }

    // Toggle the extra description text block
    if (extraDesc.style.display === "none") {
        extraDesc.style.display = "block";
    } else {
        extraDesc.style.display = "none";
    }
}

let lastScrollTop = 0; // Keep track of last scroll position
const navbar = document.querySelector('.navbar'); // Navbar element
const extraSection = document.querySelector(".extra-section");

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down and not at the top
    if (currentScroll > lastScrollTop && currentScroll > navbar.offsetHeight) {
        // Scrolling down: hide navbar
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('blue-bg'); // Remove blue background when hiding
        extraSection.classList.remove("sticky");
    } else if (currentScroll < lastScrollTop) {
        // Scrolling up: show navbar
        navbar.classList.remove('navbar-hidden');

        // Check if navbar is not at the top (apply blue background)
        if (currentScroll > 0) {
            navbar.classList.remove('navbar-transparent'); 
            navbar.classList.add('blue-bg'); // Add blue background when not at the top
            extraSection.classList.add("sticky");
        } else {
            navbar.classList.remove('blue-bg'); // Remove blue background when at the top
            extraSection.classList.remove("sticky");
        }
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// Get the input element
const searchInput = document.getElementById('searchInput');

// Add an event listener for 'input' event
searchInput.addEventListener('input', function () {
  // Check if the input has any value
  if (searchInput.value.trim() !== '') {
    searchInput.style.color = 'white'; // Change text color to white
  } else {
    searchInput.style.color = ''; // Reset text color to default
  }
});