document.addEventListener('DOMContentLoaded', function() {
  const menuLink = document.querySelector('.menu-link');
  const dropdown = document.querySelector('.dropdown');

  menuLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    if (!menuLink.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
});
