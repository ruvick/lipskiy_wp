<?php 

/*
Template Name: Страница Контакты
Template Post Type: page
*/

get_header(); ?>

<?php get_template_part('template-parts/header-section-tip');?>

<section class="contacts">
	<div class="container">
		<ul>
			<li>Юридический адрес:</li>
			<li>Фактический адрес:</li>
			<li>ИНН:</li>
			<li>КПП:</li>
			<li>ОРГН:</li>
			<li>р/с:</li>
			<li>к/с:</li>
			<li>email:</li>
			<li>тел:</li>
			<li>Режим работы:</li>
		</ul>
	</div>
	<div class="block__map" id="map"></div>
	<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</section>

<?php get_footer(); ?>  