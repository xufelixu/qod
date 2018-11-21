<?php
/**
 * The main template file.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
<div class = "quote-icon-left"> <i class="fas fa-quote-left"></i></div>
		<?php 
		
	    if ( have_posts() ) : 
			
		while(have_posts()): the_post();
            get_template_part('template-parts/content');
		endwhile;

	    else:
		 get_template_part('template-parts/content','none');

        endif; 
        ?>
<div class="quote-icon-right"><i class="fas fa-quote-right"></i></div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
