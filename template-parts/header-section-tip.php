<header class="header header-copy">

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
			<?php the_title();?>
		</h1>

	</div>

</header>  