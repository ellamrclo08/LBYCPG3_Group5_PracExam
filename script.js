// Wait for the window to load completely before executing JavaScript
window.addEventListener('load', function () {
  // Load initial content (home.html) on page load
  loadContent('home.html');

  // Function to load content from external HTML files
  function loadContent(page) {
    $('.content').load(page, function (response, status, xhr) {
      if (status == 'error') {
        $('.content').html('<h2>Error loading content.</h2>');
      }
    });
  }

  // Handle click event for sidebar links
  $('.nav-link').on('click', function (e) {
    e.preventDefault(); // Prevent the default behavior (opening a new browser tab)

    // Remove the 'active' class from all links and add it to the clicked link
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let contentToLoad = $(this).attr('href');
    loadContent(contentToLoad);
  });

  // Resize the specific image on page load
  var largeImage = document.getElementById('large-image');
  largeImage.style.maxWidth = '300px'; // Adjust the size as needed
});

document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none';
}
