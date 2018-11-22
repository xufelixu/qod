<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>
		<div>	

	<footer id="colophon" class="site-footer" role="contentinfo">

                <!-- <nav id="site-navigation" class="main-navigation" role="navigation">-->
					

		 <div class="site-info">

	 		  <div class="footer-menu"><?php wp_nav_menu( array( 'theme_location' => 'primary',
	   			'menu_id' => 'primary-menu' ) ); ?>  
	   		 </div>
	  
	  			<div class="footer">
	 				<?php echo( 'Proudly powered by' ) ; ?>
					<a href="<?php echo esc_url( 'https://redacademy.com/vancouver/' ); ?>">
	  				<?php printf( esc_html( 'Red Academy' )); ?></a>
 				</div>			
		   </div>  <!--.site-info -->
	</footer><!-- #colophon-->
		</div>          <!-- #page -->

		<?php wp_footer(); ?>

	










</body>
</html>
