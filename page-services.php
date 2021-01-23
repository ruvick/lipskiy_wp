<?php 

/*
Template Name: Страница Услуги
Template Post Type: page
*/

get_header();

?>

<?php get_template_part('template-parts/header-section-services');?>

<main>

	<?php	 $complex = carbon_get_post_meta( $post->ID, 'complex_field');
	if ( ! empty( $complex ) ): ?>
		<?php foreach ( $complex as $compl ): ?>


		<?php	if (!empty($compl['checkbox_pay_exc'])) {
				echo '<section id="services-info" class="services-info services-info__g">';
			}
			else {
				echo '<section id="services-info" class="services-info services-info__w">';
			}
			?> 

			<!-- <section id="services-info" class="services-info services-info__g"> -->
				<div class="container">
					<?php echo $compl['text_field'] ?>
				</div>
			</section>
		<?php endforeach; ?>
	<?php endif; ?>

</main>

<?php get_footer(); ?>  