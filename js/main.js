
//BURGER
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".mob-menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

// Маска телефона
	var inputmask_phone = {"mask": "+9(999)999-99-99"};
	jQuery("input[type=tel]").inputmask(inputmask_phone);

// Яндекс карта
ymaps.ready(init);

   function init () {

    var myMap = new ymaps.Map("map", {
     center: [51.703154, 36.140598],
     zoom: 12,
           			// Выключаем все управление картой
           			controls: []

           		}); 


    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark([51.703154, 36.140598],{
                                // Свойства. 
                                // hintContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
                                balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [36, 55],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-18, -26]
                            });

    myGeoObjects[1] = new ymaps.Placemark([51.720771, 36.195773],{
                                // Свойства. 
                                // hintContent: '<div class="map-hint">Авто профи , Курск, ул.Гунатовская, 32</div>',
                                balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Гунатовская, 32</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [151, 41],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-18, -26]
                            });

    myGeoObjects[2] = new ymaps.Placemark([51.715085, 36.133600],{
                                // Свойства. 
                                hintContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
                                balloonContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [151, 41],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-18, -26]
                            });

    myGeoObjects[3] = new ymaps.Placemark([51.675220, 36.158690],{
                                // Свойства. 
                                // hintContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
                                balloonContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [165, 40],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-18, -26]
                            });

    myGeoObjects[4] = new ymaps.Placemark([51.650963, 36.140104],{
                                // Свойства. 
                                // hintContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
                                balloonContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [165, 40],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-18, -26]
                            });

    myGeoObjects[5] = new ymaps.Placemark([51.718193, 36.083160],{
                                // Свойства. 
                                // hintContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
                                balloonContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
                            },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'img/icons/map-marker.svg',
                                // Размеры метки.
                                iconImageSize: [165, 40],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-16, -42]
                            });

// var clusterIcons=[{
//         href:'img/map-marker.svg',
//         size:[31,40],
//         offset:[0,0]
// }];

var clusterer = new ymaps.Clusterer({
	clusterDisableClickZoom: false,
	clusterOpenBalloonOnClick: false,
        // Устанавливаем стандартный макет балуна кластера "Карусель".
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        // Устанавливаем собственный макет.
           // clusterBalloonItemContentLayout: customItemContentLayout,
        // Устанавливаем режим открытия балуна. 
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
        // Устанавливаем размеры макета контента балуна (в пикселях).
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
        clusterBalloonPagerSize: 5
        // Настройка внешего вида нижней панели.
        // Режим marker рекомендуется использовать с небольшим количеством элементов.
        // clusterBalloonPagerType: 'marker',
        // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
        // clusterBalloonCycling: false,
        // Можно отключить отображение меню навигации.
        // clusterBalloonPagerVisible: false
    });

clusterer.add(myGeoObjects);
myMap.geoObjects.add(clusterer);
myMap.behaviors.disable('scrollZoom');
}


//POPUP
// $('.pl').click(function (event) {
// 	var pl = $(this).attr('href').replace('#', '');
// 	var v = $(this).data('vid');
// 	popupOpen(pl, v);
// 	return false;
// });
// function popupOpen(pl, v) {
// 	$('.popup').removeClass('active').hide();
// 	if (!$('.menu__body').hasClass('active')) {
// 		//$('body').data('scroll',$(window).scrollTop());
// 	}
// 	if (!isMobile.any()) {
// 		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
// 		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
// 	} else {
// 		setTimeout(function () {
// 			$('body').addClass('lock');
// 		}, 300);
// 	}
// 	history.pushState('', '', '#' + pl);
// 	if (v != '' && v != null) {
// 		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
// 	}
// 	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

// 	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
// 		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
// 	}
// }
// function openPopupById(popup_id) {
// 	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
// }
// function popupClose() {
// 	$('.popup').removeClass('active').fadeOut(300);
// 	if (!$('.menu__body').hasClass('active')) {
// 		if (!isMobile.any()) {
// 			setTimeout(function () {
// 				$('body').css({ paddingRight: 0 });
// 				$('.pdb').css({ paddingRight: 0 });
// 			}, 200);
// 			setTimeout(function () {
// 				$('body').removeClass('lock');
// 				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
// 			}, 200);
// 		} else {
// 			$('body').removeClass('lock');
// 			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
// 		}
// 	}
// 	$('.popup-video__value').html('');

// 	history.pushState('', '', window.location.href.split('#')[0]);
// }
// $('.popup-close,.popup__close').click(function (event) {
// 	popupClose();
// 	return false;
// });
// $('.popup').click(function (e) {
// 	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
// 		popupClose();
// 		return false;
// 	}
// });
// $(document).on('keydown', function (e) {
// 	if (e.which == 27) {
// 		popupClose();
// 	}
// });






