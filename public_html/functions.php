<?php

// Enqueue styles and scripts
function enqueue_custom_styles_scripts() {
    // Enqueue the main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Enqueue GSAP and ScrollTrigger
    wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js', array(), null, true);
    wp_enqueue_script('scrolltrigger-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js', array('gsap-js'), null, true);

    // Enqueue custom GSAP animations
    wp_enqueue_script('custom-gsap', get_template_directory_uri() . '/js/custom-gsap.js', array('gsap-js', 'scrolltrigger-js'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_styles_scripts');

function enqueue_btc_clp_price_script() {
    // Enqueue the Google Font (Orbitron)
    wp_enqueue_style('orbitron-font', 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

    // Enqueue the custom JS for fetching BTC/CLP price
    wp_enqueue_script('btc-price-script', get_template_directory_uri() . '/js/btc-clp-price.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_btc_clp_price_script');