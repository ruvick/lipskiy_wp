<header id="header" class="header">

	<div class="header__img">
		<div class="header__img-big" >
			<!-- <img src="<?php echo get_template_directory_uri();?>/img/header-01.jpg)" class="header__img-big-before" alt=""> -->
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

		<h1>Липский и партнеры <br>
			консультации <br>
			для бизнеса
		</h1>

		<form class="header__form" action="#">
			<input type="text" name="name" placeholder="Имя" class="input">
			<input type="email" name="email" placeholder="e-mail" class="input__phone">
			<input type="tel" name="tel" placeholder="Телефон" class="input__phone">
			<button type="submit" class="form__btn btn">Жду звонка</button>
			<p>
				Нажимая на кнопку "Позвоните мне" я даю свое
				согласие на обработку персональных данных и
				принимаю условия соглашения
			</p>
		</form>

	</div>

</header>