<?php
/*
Template Name: Home Page
*/
get_header();  // Load header.php
?>

<main>
    <?php get_template_part('template-parts/section-hero'); ?>
    <?php get_template_part('template-parts/section-bio'); ?>
    <?php get_template_part('template-parts/section-obtener-btc'); ?>
    <?php get_template_part('template-parts/section-choose-wallet'); ?>
    <?php get_template_part('template-parts/section-recupera'); ?>
    <?php get_template_part('template-parts/section-blockchain'); ?>
    <?php get_template_part('template-parts/section-coaching'); ?>
</main>

<?php get_footer();  // Load footer.php ?>