// JavaScript for Smooth Image and Text Loading 

document.addEventListener("DOMContentLoaded", function() {
  const heroImage = document.getElementById('hero-image');
  const heroText = document.getElementById('hero-text');
  
  // Fade in the main image first
  setTimeout(function() {
    heroImage.classList.add('opacity-100');
  }, 1500); // 1.5s delay for image fade-in
  
  // Fade in the sliding text after the image, with a slight delay
  setTimeout(function() {
    heroText.classList.add('opacity-100');
  }, 500); // 2.5s delay for text fade-in (after image has appeared)
});



// Vertical Timeline
jQuery(document).ready(function($){
var $timeline_block = $('.cd-timeline-block');

//hide timeline blocks which are outside the viewport
$timeline_block.each(function(){
  if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
    $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
  }
});

//on scolling, show/animate timeline blocks when enter the viewport
$(window).on('scroll', function(){
  $timeline_block.each(function(){
    if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    }
  });
});
});
// 3d  animation fallbacks
document.addEventListener('DOMContentLoaded', function () {
const animationElement = document.getElementById('bitcoin-animation');
const fallbackImage = document.getElementById('bitcoin-image-fallback');

// Function to hide fallback and show animation
function showAnimation() {
    fallbackImage.style.display = 'none'; // Hide the fallback
    animationElement.style.display = 'block'; // Show the 3D animation
}

// If the 3D animation fails to load, the fallback remains visible
animationElement.addEventListener('load', function () {
    showAnimation(); // Hide fallback only when animation has fully loaded
});

// If animation hasn't loaded after a certain time, keep showing the fallback image
setTimeout(function () {
    if (!animationElement.complete) {
        animationElement.style.display = 'none'; // Hide the animation
        fallbackImage.style.display = 'block'; // Keep fallback visible
    }
}, 3000); // Adjust timeout as needed to give time for the animation to load
});

document.addEventListener('DOMContentLoaded', function () {
const walletAnimation = document.getElementById('wallet-animation');
const fallbackImage = document.getElementById('wallet-fallback-image');

// Function to hide fallback and show animation
function showWalletAnimation() {
    fallbackImage.style.display = 'none'; // Hide the fallback image
    walletAnimation.style.display = 'block'; // Show the 3D animation
}

// Detect if the animation has loaded and hide fallback
walletAnimation.addEventListener('load', function () {
    showWalletAnimation();
});

// Set a timeout in case the animation takes too long to load
setTimeout(function () {
    if (!walletAnimation.complete) {
        walletAnimation.style.display = 'none'; // Keep animation hidden if not loaded
        fallbackImage.style.display = 'block'; // Keep fallback image visible
    }
}, 3000); // Adjust the timeout as needed
});

document.addEventListener('DOMContentLoaded', function () {
const fundAnimation = document.getElementById('fund-animation');
const fundFallbackImage = document.getElementById('fund-fallback-image');

// Function to hide fallback and show animation
function showFundAnimation() {
    fundFallbackImage.style.display = 'none'; // Hide the fallback image
    fundAnimation.style.display = 'block'; // Show the 3D animation
}

// Detect if the animation has loaded and hide fallback
fundAnimation.addEventListener('load', function () {
    showFundAnimation();
});

// Set a timeout in case the animation takes too long to load
setTimeout(function () {
    if (!fundAnimation.complete) {
        fundAnimation.style.display = 'none'; // Keep animation hidden if not loaded
        fundFallbackImage.style.display = 'block'; // Keep fallback image visible
    }
}, 3000); // Adjust the timeout as needed
});

document.addEventListener('DOMContentLoaded', function () {
const blockchainAnimation = document.getElementById('blockchain-animation');
const blockchainFallbackImage = document.getElementById('blockchain-fallback-image');

// Function to show animation and hide the fallback
function showBlockchainAnimation() {
    blockchainFallbackImage.style.display = 'none';
    blockchainAnimation.style.display = 'block';
}

// Check if animation loads, then hide fallback
blockchainAnimation.addEventListener('load', function () {
    showBlockchainAnimation();
});

// Timeout to hide animation if it takes too long
setTimeout(function () {
    if (!blockchainAnimation.complete) {
        blockchainAnimation.style.display = 'none';
        blockchainFallbackImage.style.display = 'block';
    }
}, 3000); // Adjust timeout as needed
});