document.addEventListener('DOMContentLoaded', function () {
  let hamburger = document.getElementById('hamburger-icon');
  let nav = document.querySelector('.main-navigation');

  // Function to toggle navigation display
  function toggleNav() {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    hamburger.classList.toggle('is-active'); // Toggle 'is-active' class on hamburger icon
  }

  // Toggle navigation on hamburger click
  hamburger.addEventListener('click', toggleNav);

  // Function to adjust navigation based on window size
  function adjustNavForWindowSize() {
    if (window.innerWidth > 768) {
      nav.style.display = ''; // Clear inline styles
    } else {
      // Ensure menu is closed below breakpoint
      nav.style.display = 'none';
    }
  }

  // Listen for window resize events
  window.addEventListener('resize', adjustNavForWindowSize);

  // Initial adjustment in case the page loads on a non-default size
  adjustNavForWindowSize();

  let navLinks = document.querySelectorAll('.navigation-list__item'); // Select all navigation links

  // Function to remove existing active classes
  function removeActiveClasses() {
    navLinks.forEach(function (link) {
      link.classList.remove('navigation-list__item--active');
    });
  }

  // Function to set a link as active
  function setActive(link) {
    removeActiveClasses();
    link.classList.add('navigation-list__item--active');
  }

  // Add click event listeners to navigation links
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setActive(link);
      // Close the navigation menu if open ( useful for mobile view)
      if (window.innerWidth <= 768) {
        toggleNav();
      }
    });
  });

  // Code to ensure the correct link is active on page load or refresh
  let currentPath = window.location.hash; // get current hash from URL
  if (currentPath) {
    let activeLink = document.querySelector(`a[href='${currentPath}']`);
    if (activeLink) {
      setActive(activeLink);
    }
  }

});

