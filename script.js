// JavaScript to toggle the menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');  // Toggle 'active' class on the menu
});


// JavaScript for Parallax Scrolling Effect
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset;

  // Apply parallax effect on elements with the class 'parallax'
  document.querySelectorAll('.parallax').forEach(function (elem) {
      elem.style.backgroundPositionY = `${scrollTop * 0.5}px`;
  });

  // Fade-in effects for elements when scrolled into view
  document.querySelectorAll('.fade-in').forEach(function (elem) {
      let rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
          elem.style.opacity = '1';
          elem.style.transform = 'translateY(0)';
      }
  });
});

// JavaScript for education fade
document.addEventListener("DOMContentLoaded", () => {
  const educationItems = document.querySelectorAll(".education-item");

  function animateEducationItems() {
    educationItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("fadeIn");
      }
    });
  }
  window.addEventListener("scroll", animateEducationItems);
  animateEducationItems();
});
let currentPosition = 0;

//for project //
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});



window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.animate-section'); // Select all target sections

  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// icon rotation in footer
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseover', () => {
      icon.style.transform = 'rotate(15deg) scale(1.2)';
  });
  icon.addEventListener('mouseout', () => {
      icon.style.transform = 'rotate(0) scale(1)';
  });
});



// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Show the "Back to Top" button when the user scrolls down
window.onscroll = function() {
  const backToTopButton = document.querySelector('.back-to-top-btn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.classList.add('show-back-to-top');
  } else {
      backToTopButton.classList.remove('show-back-to-top');
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const skillItems = document.querySelectorAll('.skill-item');

  // Duplicate skill items for smooth infinite scrolling
  skillItems.forEach((item) => {
    const clone = item.cloneNode(true);
    carouselTrack.appendChild(clone);
  });
});


document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});




// experience section
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight * 0.8;
  timelineItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    if (itemPosition < triggerHeight) {
      item.classList.add('visible');
    }
  });
});

// blog post hidden 
document.querySelector('.see-more-btn').addEventListener('click', function () {
  const hiddenPosts = document.querySelector('.hidden-posts');
  if (hiddenPosts.style.display === 'none' || hiddenPosts.style.display === '') {
    hiddenPosts.style.display = 'flex';
    this.textContent = 'Show Less';
  } else {
    hiddenPosts.style.display = 'none';
    this.textContent = 'See More';
  }
});


emailjs.init('UfJTxSrRwToyW5nYG'); // Replace with your actual User ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Send the form directly via EmailJS
    emailjs.sendForm('service_4zk7qh9', 'template_ngkqols', formData)
        .then(function(response) {
            console.log('Message sent successfully!', response);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.error('Error sending message', error);
            alert('There was an error sending your message. Please try again.');
        });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted! Processing...');
  const formData = new FormData(this);

  emailjs.sendForm('service_4zk7qh9', 'template_ngkqols', formData)
      .then(function(response) {
          alert('Message sent successfully!');
          console.log('Message sent successfully!', response);
      }, function(error) {
          alert('Error sending message: ' + error.text);
          console.error('Error sending message', error);
      });
});
