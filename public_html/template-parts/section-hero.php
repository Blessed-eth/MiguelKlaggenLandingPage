<section class="relative h-screen w-full overflow-hidden">
    <!-- Video de fondo -->
    <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
        <source src="<?php echo get_template_directory_uri(); ?>/src/video/mk_hero_background.webm" type="video/webm">
        Tu navegador no soporta video.
    </video>

    <!-- Overlay oscuro -->
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

    <!-- Texto en movimiento -->
    <div class="absolute top-1/4 left-0 w-full overflow-hidden">
        <div class="font-bold text-white text-scroll whitespace-nowrap" style="font-size: 16rem;">
            <span class="mx-4">El futuro es Bitcoiner</span>
        </div>
    </div>

    <!-- Imagen principal (fade-in con retraso y 15px más abajo) -->
    <div class="relative z-10 flex justify-center items-center h-full">
        <img src="<?php echo get_template_directory_uri(); ?>/src/imgs/miguel-1_nobackground.webp" alt="Miguel Klagges" class="rounded-lg shadow-lg fade-in-delayed mt-4" style="margin-top: 15px;">
    </div>
</section>