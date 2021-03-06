<?php
/**
 * The template for displaying page-submit.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
<section class="quote-submission">
<span class = "quote-icon-left"> <i class="fas fa-quote-left"></i></span>
<span class="quote-icon-right" class="quote-icon"><i class="fas fa-quote-right"></i></span>

<header class="entry-header">
        <?php the_title('<h1 class="entry-title-submission">','</h1>'); ?>
</header>

<?php if(is_user_logged_in() && current_user_can('edit_posts')): ?>
<div class="quote-submission-wrapper">
      <form name="quoteForm" id="quote-submission-form">
<div class="quote-author">
      <label for="quote-author">Author of Quote</label>
      <input type="text" name="quote_author" id="quote-auther">     
</div>
<div class="quote-content">
     <label for="quote-content">Quote</label>
     <textarea name="quote-content" id="quote-content" cols="3" rows="20"></textarea>
</div>
<div class="quote-source">
    <label for="quote-source">Where did you find this quote? (e.g. book name)</label>
    <input type="text" name="quote_source" id="quote-source">
</div>
<div class="quote-source-url">
    <label for="quote-source-url">Provide the URL of the quote source, if available.</label>
<input type="url" name="quote_source_url" id="quote-source-url">
</div>
<div class="submit-quote">
    <input type="submit" value="Submit Quote">
</div>
</div> <!--quote-submission-wrapper-->

<?php else: ?>
<P>Sorry, you must be logged in to submit a quote!</p>
<p><?php echo sprintf('<a href="%1s">%2s</a>',
 esc_url(wp_login_url()),
'Click here to login.');?></p>
<?php endif;?>


</section>
			
		 
</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer(); ?>
