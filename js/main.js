document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger-icon');
  var nav = document.querySelector('.main-navigation');

  // Function to toggle navigation display
  function toggleNav() {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
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
});
