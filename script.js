document.addEventListener("DOMContentLoaded", function() {
    // Dynamically set the active navigation link
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-list a').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    });
});  
