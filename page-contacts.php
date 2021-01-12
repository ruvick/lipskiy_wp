<?php 

/*
Template Name: Страница Контакты
Template Post Type: page
*/

get_header(); ?>

<?php get_template_part('template-parts/header-section');?>

<section class="contacts">
	<div class="container">
		<h1><?php the_title();?></h1>
		<div class="block__map" id="map"></div>
	</div>
</section>

<?php get_footer(); ?>  