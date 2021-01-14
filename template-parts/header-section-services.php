<header class="header-services header">

	<div class="header__img">
		<div class="header__img-big header-services__img-big">
		</div>
		<div class="header__block-grey"></div>
		<div class="header__block-green-small"></div>
		<div class="header__block-green"></div> 
	</div>

	<div class="header__container container">

		<div class="header__row d-flex">
			<a href="http://lipskiy-konsalting.ru" class="header__logo icon-logo"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
			<!-- Меню с иконкой бургера -->
			<div class="header__menu menu d-flex">
				<div class="menu__icon icon-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<nav class="menu__body">
<!-- 					<ul class="menu__list d-flex">
						<li><a href="#">О нас</a></li>
						<li><a href="#">Стоимость</a></li>
						<li><a href="#">Публикации, статьи, исследования</a></li> 
						<li><a href="#">Блог</a></li>
						<li><a href="#">Контакты</a></li>
					</ul> -->
					<?php wp_nav_menu( array('theme_location' => 'menu-1','menu_class' => 'menu__list',
					'container_class' => 'menu__list','container' => false )); ?>
					<div class="mobile__contact d-flex">
						<a href="mailto:info@lipskiy-konsalting.ru" class="mobile-mail contact-mail">info@lipskiy-konsalting.ru</a>
						<a href="tel:88007006055" class="mobile-tel contact-tel">8 800 700 60 55</a>
					</div>
				</nav>
				<nav class="mob-menu">
<!-- 					<ul class="menu__list d-flex">
						<li><a href="#">О нас</a></li>
						<li><a href="#">Стоимость</a></li>
						<li><a href="#">Публикации, статьи, исследования</a></li>
						<li><a href="#">Блог</a></li>
						<li><a href="#">Контакты</a></li>
					</ul> -->
					<?php wp_nav_menu( array('theme_location' => 'menu-2','menu_class' => 'menu__list',
					'container_class' => 'menu__list','container' => false )); ?>
					<div class="mobile__contact d-flex">
						<a href="mailto:info@lipskiy-konsalting.ru" class="mobile-mail contact-mail">info@lipskiy-konsalting.ru</a>
						<a href="tel:88007006055" class="mobile-tel contact-tel">8 800 700 60 55</a>
					</div>
				</nav>
				<div class="header__contact d-flex">
					<a href="mailto:info@lipskiy-konsalting.ru" class="contact-mail">info@lipskiy-konsalting.ru</a>
					<a href="tel:88007006055" class="contact-tel">8 800 700 60 55</a>
				</div>
			</div>
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