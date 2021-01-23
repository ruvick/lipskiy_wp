<header id="header" class="header header_thank">

	<div class="header__img">
		<div class="header__img-big header_thank-img-big">
		</div>
		<div class="header__block-grey"></div>
		<div class="header__block-green-small"></div>
		<div class="header__block-green" style="background-image: url(<?php echo get_template_directory_uri();?>/img/angle.png);"></div>
	</div>

	<div class="header__container container">

		<div class="header__row d-flex">
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

		<h1> Благодарим ВАС <br>
				 ЗА ОБРАЩЕНИЕ! 
		</h1>

		<div class="header-services-sub header_thank_sub">
			<p>
				Наши менеджеры свяжуться с Вами <br>
  			в ближайшее время
  		</p>
		</div>

	</div>

</header>  