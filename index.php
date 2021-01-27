<?php get_header(); ?>

<?php get_template_part('template-parts/header-section');?>

<section id="advant" class="advant">
	<div class="container">
		<h2>
			Чем мы отличаемся от остальных консультантов?
		</h2>
		<div class="advant__column d-flex">

			<div class="advant__item d-flex">
				<div class="advant__item-left advant-icon-1"></div>
				<div class="advant__item-right">
					<p>
						Мы команда выпускников МГУ имени М.В. Ломоносова с опытом
						работы в ведущих международных организациях в сфере финансов
						и консалтинга, крупнейших российских компаниях.
					</p>
				</div>
			</div>

			<div class="advant__item d-flex">
				<div class="advant__item-left advant-icon-2"></div>
				<div class="advant__item-right">
					<p>
						Мы предоставляем услуги высокого качества не только крупному 
						бизнесу, но субьектам малого и среднего предпринимательства.
					</p>
				</div>
			</div>

			<div class="advant__item d-flex">
				<div class="advant__item-left advant-icon-3"></div>
				<div class="advant__item-right">
					<p>
						Можем грамотно выявить и сформулировать потребности клиента,
						указать на слабые места в финансовом положении и подобрать
						оптимальное решение.
					</p>
				</div>
			</div>

			<div class="advant__item d-flex">
				<div class="advant__item-left advant-icon-4"></div>
				<div class="advant__item-right">
					<p>
						Конфедициальность клиентской <br>
						информации.
					</p>
				</div>
			</div>

			<div class="advant__item d-flex">
				<div class="advant__item-left advant-icon-5"></div>
				<div class="advant__item-right">
					<p>
						Наши клиенты могут связаться с нами круглосуточно без
						праздников и выходных в 24/7
					</p>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Секция -->
<section id="services" class="services">
	<div class="container">
		<div class="services__column d-flex">

			<div class="services__item services__item-gr">
				<h2>
					Услуги <br>
					бизнес <br>
					консультации
				</h2>
			</div>

			<a href="<?php echo get_permalink(31);?>" class="services__item services__img-01" style="background-image: url(<?php echo get_template_directory_uri();?>/img/services/01.jpg);">
				<div class="services__item-text">
					<p>
						Стратегический и
						инвестиционный
						консалтинг
					</p>
				</div>
			</a>


			<a href="<?php echo get_permalink(20);?>" class="services__item services__img-02" style="background-image: url(<?php echo get_template_directory_uri();?>/img/services/02.jpg);">
				<div class="services__item-text">
					<p>
						Управленческий 
						консалтинг
					</p>
				</div>
			</a>

			<a href="<?php echo get_permalink(33);?>" class="services__item services__img-03" style="background-image: url(<?php echo get_template_directory_uri();?>/img/services/03.jpg);">
				<div class="services__item-text">
					<p>
						Налоговый и 
						бухгалтерский
						консалтинг 
					</p>
				</div>
			</a>

			<a href="<?php echo get_permalink(35);?>" class="services__item services__img-04" style="background-image: url(<?php echo get_template_directory_uri();?>/img/services/04.jpg);">
				<div class="services__item-text">
					<p>
						Правовой 
						консалтинг
					</p>
				</div>
			</a>

			<a href="<?php echo get_permalink(37);?>" class="services__item services__img-05" style="background-image: url(<?php echo get_template_directory_uri();?>/img/services/05.jpg);">
				<div class="services__item-text">
					<p>
						Маркетинговый 
						консалтинг 
					</p>
				</div>
			</a>

		</div>
	</div>
</section>

<!-- Секция -->
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