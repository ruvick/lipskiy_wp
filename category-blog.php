<?php 

get_header(); 
// $cat_ID = get_query_var('cat');
?>

<?php get_template_part('template-parts/header-cat');?>

<section id="materials" class="materials">
	<div class="container">
		<h2>
			Интересные материалы
		</h2>

		<div class="materials__column d-flex">

			<?php if (have_posts()) { while (have_posts()) { the_post(); ?>

				<a href="<?php echo get_permalink();?>" class="materials__item-link">
					<div class="materials__item">
						<div class="materials__img-01">
							<picture>
							<?php echo get_the_post_thumbnail( $post->ID, "turImg", array("alt" => $post->post_title, "title" => $post->post_title));?>
							</picture>
						</div>
						<div class="materials__text">
							<h3><?php echo $post->post_title?></h3>
							<p><?php the_content(); ?></p>
							<a href="<?php echo get_permalink();?>" class="materials__btn btn">Подробнее</a>
						</div>
					</div>
				</a>

			<?php 	} //конец while
			} //конец if ?>

		</div>
	</div>
</section>

<?php get_footer(); ?>  