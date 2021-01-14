<?php get_header(); ?>

<?php get_template_part('template-parts/header-cat');?>

<main id="primary" class="site-main">
	<div class="container">

		<div class = "content ">
			
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<picture>
					<?php echo get_the_post_thumbnail( $post->ID, "turImg", array("alt" => $post->post_title, "title" => $post->post_title));?>
				</picture>
				<?php the_content();?>
			<?php endwhile;?>
		<?php endif; ?>
	</div>

</div>

</main><!-- #main -->

<?php get_footer(); ?>  
