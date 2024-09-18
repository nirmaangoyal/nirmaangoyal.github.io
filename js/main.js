// Initialize AOS
AOS.init({
	duration: 800,
	easing: 'slide',
  });
  
  // Smooth Scroll for Anchor Links
  $('a[href^="#"]').on('click', function (event) {
	var target = this.hash;
	if (target) {
	  event.preventDefault();
	  $('html, body').animate(
		{
		  scrollTop: $(target).offset().top - 70,
		},
		800
	  );
	}
  });
  
  // Back to Top Button and Navbar Background Change
  $(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
	  $('.back-to-top').fadeIn();
	  $('.navbar').addClass('scrolled');
	} else {
	  $('.back-to-top').fadeOut();
	  $('.navbar').removeClass('scrolled');
	}
  });
  
  // Dark Mode Toggle
  if (localStorage.getItem('darkMode') === 'enabled') {
	$('body').addClass('dark-mode');
  }
  
  $('#dark-mode-toggle').on('click', function () {
	$('body').toggleClass('dark-mode');
	if ($('body').hasClass('dark-mode')) {
	  localStorage.setItem('darkMode', 'enabled');
	  $(this).html('<i class="fas fa-sun"></i>');
	} else {
	  localStorage.setItem('darkMode', null);
	  $(this).html('<i class="fas fa-moon"></i>');
	}
  });
  
  // Update Dark Mode Toggle Icon on Load
  if ($('body').hasClass('dark-mode')) {
	$('#dark-mode-toggle').html('<i class="fas fa-sun"></i>');
  } else {
	$('#dark-mode-toggle').html('<i class="fas fa-moon"></i>');
  }
  
  // Close navbar on link click (for mobile view)
  $('.navbar-collapse a').click(function(){
	$(".navbar-collapse").collapse('hide');
  });

// Initialize Map
function initMap() {
	var myLatlng = [33.793034, -118.125264];
	var map = L.map('map').setView(myLatlng, 11);
  
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);
  
	L.marker(myLatlng).addTo(map)
	  .bindPopup('Nirmaan Goyal<br>5050 E Garford St, Long Beach, CA 90815')
	  .openPopup();
  }
  
  window.onload = function() {
	initMap();
  };

  // Read more functionality
document.addEventListener('DOMContentLoaded', function() {
	const readMoreLinks = document.querySelectorAll('.read-more');
  
	readMoreLinks.forEach(function(link) {
	  link.addEventListener('click', function(e) {
		e.preventDefault();
		const cardBody = link.closest('.card-body');
		const description = cardBody.querySelector('.project-description');
		description.classList.toggle('expanded');
		if (description.classList.contains('expanded')) {
		  link.textContent = 'Read less';
		} else {
		  link.textContent = 'Read more';
		}
	  });
	});
  });
  
