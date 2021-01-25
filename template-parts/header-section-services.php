<?php 

$banner = wp_get_attachment_image_src( carbon_get_the_post_meta('resort_banner'), 'full')[0];
if(empty($banner)) {
	$banner = get_template_directory_uri() . 'img/header-01.jpg';
}

?>

<!-- Шапка ПК -->
<header class="header-services header">
	<div class="header__img">
		<div class="header__img-big header-services__img-big">
			<div class="header-services__img" style="background-image: url(<?php echo $banner?>);"> 

			</div>
			<!-- <img src="<?php echo $banner?>" alt=""> -->
		</div>
		<div class="header__block-grey"></div>
		<div class="header__block-green-small"></div>
		<div class="header__block-green"></div> 
	</div>

	<div class="header__container container header-services__container">

		<div class="header__row header-services__row d-flex">
			<a href="http://lipskiy-konsalting.ru" class="header__logo icon-logo"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
			<div class="header__menu menu d-flex">
<!-- 					<div class="menu__icon icon-menu"> 
						<span></span>
						<span></span>
						<span></span>
					</div> -->
					<nav class="menu__body">
						<?php wp_nav_menu( array('theme_location' => 'menu-1','menu_class' => 'menu__list',
						'container_class' => 'menu__list','container' => false )); ?>
					</nav>
<!-- 				<nav class="mob-menu">
					<?php wp_nav_menu( array('theme_location' => 'menu-2','menu_class' => 'menu__list',
					'container_class' => 'menu__list','container' => false )); ?>
					<div class="mobile__contact d-flex">
						<a href="mailto:<? echo $mail = carbon_get_theme_option("as_email"); ?>" class="mobile-mail contact-mail"><? echo $mail; ?></a>
						<a href="tel:<? echo preg_replace('/[^0-9]/', '', $tel); ?>" class="mobile-tel contact-tel"><? echo $tel = carbon_get_theme_option("as_phones_1"); ?></a>
					</div>
				</nav> -->
				<div class="header__contact d-flex">
					<a href="mailto:<? echo $mail = carbon_get_theme_option("as_email"); ?>" class="mobile-mail contact-mail"><? echo $mail; ?></a>
					<a href="tel:<? echo preg_replace('/[^0-9]/', '', $tel); ?>" class="contact-tel"><? echo $tel = carbon_get_theme_option("as_phones_1"); ?></a>
				</div>
			</div>
		</div>

		<div class="header-copy__breadcrumb">
			<?php
			if (function_exists ('yoast_breadcrumb')) {
				yoast_breadcrumb ('<p id = "breadcrumbs">', '</p>');
			}
			?>
		</div>

		<h1 class="header-services__title">
			<?php the_title();?>
		</h1>

		<div class="header-services-sub">
			<?php the_excerpt(); ?>
		</div>

		<a href="#callback" class="btn link pl">Жду звонка</a>

	</div>

</header>  

<!-- Шапка Mobile -->
<header class="header-services header-services-bg header" style="background-image: url(<?php echo $banner?>);">
<!-- 		<div class="header__img">
			<div class="header__img-big header-services__img-big">
				<div class="header-services__img" style="background-image: url(<?php echo $banner?>);"> 

				</div>
				<img src="<?php echo $banner?>" alt="">
			</div>
			<div class="header__block-grey"></div>
			<div class="header__block-green-small"></div>
			<div class="header__block-green"></div> 
		</div> -->

		<div class="header__container container header-services__container">

			<div class="header__row header-services__row d-flex">
				<a href="http://lipskiy-konsalting.ru" class="header__logo icon-logo"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
				<div class="header__menu menu d-flex">
					<div class="menu__icon icon-menu"> 
						<span></span>
						<span></span>
						<span></span>
					</div>
					<nav class="menu__body">
						<?php wp_nav_menu( array('theme_location' => 'menu-1','menu_class' => 'menu__list',
						'container_class' => 'menu__list','container' => false )); ?>
					</nav>
					<nav class="mob-menu">
						<?php wp_nav_menu( array('theme_location' => 'menu-2','menu_class' => 'menu__list',
						'container_class' => 'menu__list','container' => false )); ?>
						<div class="mobile__contact d-flex">
							<a href="mailto:<? echo $mail = carbon_get_theme_option("as_email"); ?>" class="mobile-mail contact-mail"><? echo $mail; ?></a>
							<a href="tel:<? echo preg_replace('/[^0-9]/', '', $tel); ?>" class="mobile-tel contact-tel"><? echo $tel = carbon_get_theme_option("as_phones_1"); ?></a>
						</div>
					</nav>
					<div class="header__contact d-flex">
						<a href="mailto:<? echo $mail = carbon_get_theme_option("as_email"); ?>" class="mobile-mail contact-mail"><? echo $mail; ?></a>
						<a href="tel:<? echo preg_replace('/[^0-9]/', '', $tel); ?>" class="contact-tel"><? echo $tel = carbon_get_theme_option("as_phones_1"); ?></a>
					</div>
				</div>
			</div>

			<div class="header-copy__breadcrumb">
				<?php
				if (function_exists ('yoast_breadcrumb')) {
					yoast_breadcrumb ('<p id = "breadcrumbs">', '</p>');
				}
				?>
			</div>

			<h1 class="header-services__title">
				<?php the_title();?>
			</h1>

			<div class="header-services-sub">
				<?php the_excerpt(); ?>
			</div>

			<a href="#callback" class="btn link pl">Жду звонка</a>

		</div>

	</header>  