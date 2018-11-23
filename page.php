<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php endwhile; // End of the loop. ?>
		  <span class = "quote-icon-left"> <i class="fas fa-quote-left"></i></span>
          <span class="quote-icon-right"><i class="fas fa-quote-right"></i></span>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
