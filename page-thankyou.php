<?php 

/*
Template Name: Страница Благодарности
Template Post Type: page
*/

get_header();

 ?>

<?php get_template_part('template-parts/header-thankyou');?>

<section id="info" class="info">
	<div class="container">
		<div class="info__column d-flex">

			<div class="info__item info__item-gr">
				<h3>
					Стоимость
				</h3>
				<p>
					Время проведения
					стандартной бизнес
					консультации 90минут.
					Консультация проходит
					посредством личной встречи
					или дистанционно: <br>
					skype, telegram.
				</p>
			</div>

			<div class="info__item">
				<h3 class="info__title info-icon-1">
					Экспресс консультация <br>
					15 мин.
				</h3>
				<p>
					Бесплатная экспресс - консультация
					для вашего бизнеса 15 мин по 
					телефону бесплатно
				</p>
			</div>

			<div class="info__item">
				<h3 class="info__title info-icon-2">
					Дистанционный <br>
					консалтинг
				</h3>
				<p>
					Стоимость дистанционного консалтинга
					определяется индивидуально, в
					зависимости от обьема работ.
				</p>
			</div>

			<div class="info__item">
				<h3 class="info__title info-icon-3">
					Консультация по <br> 
					телефону
				</h3>
				<p>
					Стоимость консультаций по телефону
					определяется - 3000 руб за 1 час.
				</p>
			</div>

		</div>
	</div>
</section>

<!-- Секция -->
<section id="materials" class="materials__home materials">
	<div class="container">
		<h2>
			Интересные материалы
		</h2>
		<div class="materials__column d-flex">



<?php 
$posts = get_posts( array(
	'numberposts' => 3,
	'category'    => 5,
	'order'       => 'DESC',
	'include'     => array(),
	'post_type'   => 'post',
	'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
) );

$result = wp_get_recent_posts( $args );

foreach( $posts as $post ){
	?>
				<!-- <a href="<?php echo get_permalink($p['ID']) ?>" class="materials__item-link"> -->
					<div class="materials__item">
						<div class="materials__img-01">
							<picture>
								<?php echo get_the_post_thumbnail();?>
							</picture>
						</div>
						<div class="materials__text">
							<h3><?php echo $post->post_title?></h3>
							<p>
								<?php 
									$maxchar = 200;
									$text = strip_tags( get_the_excerpt() );
									echo mb_substr( $text, 0, $maxchar );
								?>
							</p>
							<a href="<?php echo get_permalink();?>" class="materials__btn btn">Подробнее</a> 
						</div>
					</div>
				<!-- </a>	 -->
<?php } ?>

		</div>
	</div>
</section>

<?php get_footer(); ?>

<?php get_footer(); ?>  