<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package lipsky
 */

get_header();

?>

<?php get_template_part('template-parts/header-cat');?>

<main id="primary" class="site-main">

	<section class="posts">
		<div class="container">

			<div class ="posts__content ">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					<picture>
						<?php echo get_the_post_thumbnail( $post->ID, "turImg", array("alt" => $post->post_title, "title" => $post->post_title));?>
					</picture>
					<?php the_content();?>
				<?php endwhile;?>
			<?php endif; ?>

		</div>

	</div>
</section>

</main>

<?php get_footer(); ?>   
