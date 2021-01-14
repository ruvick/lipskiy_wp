<header class="header header-copy">

<!-- 	<div class="header__img header__img_tip">
		<div class="header__img-big"></div>
		<div class="header__block-grey"></div>
		<div class="header__block-green-small"></div>
		<div class="header__block-green"></div> 
	</div> -->

	<div class="header__container header__container-copy container">

		<div class="header__row header-copy__row d-flex">
			<a href="http://lipskiy-konsalting.ru" class="header__logo icon-logo"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
			<div class="header__menu menu header__menu-copy d-flex">
				<div class="menu__icon icon-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav class="menu__body">
					<?php wp_nav_menu( array('theme_location' => 'menu-1','menu_class' => 'menu__list',
					'container_class' => 'menu__list','container' => false )); ?>
<!-- 					<div class="mobile__contact d-flex">
						<a href="mailto:info@lipskiy-konsalting.ru" class="mobile-mail contact-mail">info@lipskiy-konsalting.ru</a>
						<a href="tel:88007006055" class="mobile-tel contact-tel">8 800 700 60 55</a>
					</div> -->
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

		<h1 class="header-services__title header-copy__title">
			<?php echo get_queried_object()->name;?>
		</h1>

	</div>

</header>  