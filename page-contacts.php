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
			<li>Юридический адрес: <? echo carbon_get_theme_option("as_address"); ?></li>
			<li>Фактический адрес: <? echo carbon_get_theme_option("as_address_fact"); ?></li>
			<li>ИНН: <? echo carbon_get_theme_option("as_inn"); ?></li>
			<li>КПП: <? echo carbon_get_theme_option("as_kpp"); ?></li>
			<li>ОРГН: <? echo carbon_get_theme_option("as_orgn"); ?></li>
			<li>р/с: <? echo carbon_get_theme_option("as_rs"); ?></li>
			<li>к/с: <? echo carbon_get_theme_option("as_ks"); ?></li>
			<li>email: <? echo carbon_get_theme_option("as_email"); ?></li>
			<li>тел: <? echo carbon_get_theme_option("as_phones_1"); ?></li>
			<li>Режим работы: <? echo carbon_get_theme_option("as_schedule"); ?></li>
		</ul>

		<div class="block__map" id="map"></div>
		<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>

		<script>
			ymaps.ready(init); 

			function init () {
				var myMap = new ymaps.Map("map", {
        // Координаты центра карты
        center:<?php echo carbon_get_theme_option('map_point') ?>,
        // Масштаб карты
        zoom: 17,
        // Выключаем все управление картой
        controls: []
      }); 

				var myGeoObjects = [];

    // Указываем координаты метки
    myGeoObjects = new ymaps.Placemark(<?php echo carbon_get_theme_option('map_point') ?>,{
    								// hintContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
    								balloonContent: '<div class="map-hint"><?php echo carbon_get_theme_option('text_map') ?>', },{
    								iconLayout: 'default#image',
                    // Путь до нашей картинки
                    iconImageHref:  '<?php bloginfo("template_url"); ?>/img/icons/map-marker.svg',  
                    // Размеры иконки
                    iconImageSize: [65, 65],
                    // Смещение верхнего угла относительно основания иконки
                    iconImageOffset: [-25, -100]
                  });

    var clusterer = new ymaps.Clusterer({
    	clusterDisableClickZoom: false,
    	clusterOpenBalloonOnClick: false,
    });
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отключим zoom
    myMap.behaviors.disable('scrollZoom');

  }
</script>

</div>

</section>



<?php get_footer(); ?>  