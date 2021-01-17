<?php

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'theme_options', 'as_theme_options', 'Настройки темы' )
    ->add_tab('Главная', array(
      Field::make( 'image', 'as_logo', 'Логотип')
        ->set_width(30),
      Field::make( 'image', 'as_logo_white', 'Логотип белый')
        ->set_width(30),
      Field::make('text', 'about_home_title', 'Заголовок блока О нашей компании'),
      Field::make('rich_text', 'about_home', 'О нашей компании')
    ))
    ->add_tab('Баннер', array(
      Field::make('complex', 'auto_banner', 'Баннер')
        ->add_fields(array(
          Field::make('image', 'auto_banner_img', 'Картинка')
            ->set_width(30),
          Field::make('text', 'auto_banner_title', 'Заголовок')
            ->set_width(30),
          Field::make('text', 'auto_banner_subtitle', 'Подзаголовок')
            ->set_width(30),
        ))
    ))
    ->add_tab('Контакты', array(
        Field::make( 'text', 'as_company', __( 'Название' ) )
          ->set_width(50),
        Field::make( 'text', 'as_schedule', __( 'Режим работы' ) )
          ->set_width(50),
        Field::make( 'text', 'as_phones_1', __( 'Телефон' ) )
          ->set_width(50),
        Field::make( 'text', 'as_phone_2', __( 'Телефон дополнительный' ) )
          ->set_width(50),
        // Field::make( 'text', 'as_phone_4', __( 'instagram' ) )
        //   ->set_width(50),
        Field::make( 'text', 'as_email', __( 'Email' ) )
          ->set_width(50),
        Field::make( 'text', 'as_email_send', __( 'Email для отправки' ) )
          ->set_width(50),
        Field::make( 'text', 'as_inn', __( 'ИНН' ) )
          ->set_width(50),
        Field::make( 'text', 'as_orgn', __( 'ОРГН' ) )
          ->set_width(50),
        Field::make( 'text', 'as_kpp', __( 'КПП' ) )
          ->set_width(50),
        Field::make( 'text', 'as_address', __( 'Юридический адрес' ) )
          ->set_width(50),
        Field::make( 'text', 'as_address_fact', __( 'Фактический адрес' ) )
          ->set_width(50),
        Field::make( 'text', 'as_rs', __( 'р/с' ) )
          ->set_width(50),
        Field::make( 'text', 'as_ks', __( 'к/с' ) )
          ->set_width(50),
        Field::make( 'text', 'as_insta', __( 'instagram' ) )
          ->set_width(50),
        Field::make( 'text', 'as_face', __( 'facebook' ) )
          ->set_width(50),
        Field::make( 'text', 'as_vk', __( 'Вконтакте' ) )
          ->set_width(50),
        Field::make( 'text', 'as_director', __( 'Генеральный директор' ) ),
          // ->set_width(50),
        Field::make('text', 'map_point', 'Координаты карты')
          ->set_width(50),
        Field::make('text', 'text_map', 'Текст метки карты')
          ->set_width(50),
    ) );
Container::make('post_meta', 'resort_city', 'Доп. поля')
// ->show_on_template('page-services.php')
->add_fields(array(
  Field::make('image', 'resort_banner', 'Фото баннера')
  ->help_text( 'Изображение не менее 1070 х 758px'),
));
Container::make('post_meta', 'ca_product', 'Доп поля')
  ->where('post_template', '=', 'page-product.php')
  ->add_fields(array(
    Field::make('text', 'ca_product_price', 'Цена'),
  ));
Container::make('post_meta', 'ca_about', 'Доп поля')
  // ->where('post_template', '=', 'page-about.php')
  ->show_on_page('34')
  // ->show_on_template('page-about.php')
  ->add_fields(array(
    Field::make('complex', 'about_slider', 'Фото')
      ->add_fields(array(
        Field::make('image', 'image', 'Фото'),
      ))
  ));
Container::make('post_meta', 'as_cert', 'Сертификат/Инструкция')
  ->show_on_post_type('post')
  // ->where( 'post_term', '=', array(
  //       'field' => 'slug',
  //       'value' => 'sertifikaty',
  //       'taxonomy' => 'category',
  //   ) )
  ->add_fields(array(
    Field::make('text', 'cert_name', 'Название сертификата/инструкции')
      ->set_width(30),
    Field::make('file', 'cert_link', 'Файл')
      ->set_value_type( 'url' )
      ->set_width(30),
    Field::make('text', 'cert_link_text', 'Текст ссылки на файл')
      ->set_width(30),

  ));
Container::make('post_meta', 'as_product_cr', 'Характеристики товара')
  ->show_on_post_type(array( 'asgproduct'))
	//->where( 'post_template', '=', 'single-product.php' )
	->add_fields(array(
    Field::make('checkbox', 'is_available', 'Убрать текст "В наличии"')
      ->set_width(30),
    Field::make('checkbox', 'is_delivery', 'Скрыть блок "Доставка"')
      ->set_width(30),
    Field::make('text', 'text_delivery', 'Текст блока "Доставка"')
      ->set_width(30),
		 Field::make('text', 'product_subtitle', 'Подзаголовок (для карточки товара)'),
    Field::make( 'checkbox', 'hit', 'Хит')
      ->set_width(50),
    Field::make( 'checkbox', 'new_prod', 'Новый')
      ->set_width(50),
		Field::make('text', 'as_product_price', 'Цена')
			->set_width(50),
		Field::make('text', 'as_product_old_price', 'Старая цена')
			->set_width(50),
		Field::make('text', 'as_size', 'Размер')
			->set_width(50),
		Field::make('text', 'as_age', 'Возраст')
			->set_width(50),
    Field::make('rich_text', 'as_char', 'Характеристики товара'),
	Field::make( 'rich_text', 'as_short_derscr', __( 'Описание' ) ),
    Field::make('rich_text', 'as_complect', 'Комплектация товара'),
    // Field::make('rich_text', 'as_video_prod', 'Видео о товаре'),
    // Field::make('rich_text', 'as_reviews_prod', 'Отзывы о товаре'),
    // Field::make('rich_text', 'as_cert_prod', 'Сертификаты'),

		Field::make('text', 'as_product_weight', 'Вес (г)')
			->set_width(50),
		Field::make( 'text', 'as_sku', 'Артикул')
        	->set_width(50),
        Field::make('image', 'as_gallery_img_1', 'Фото 1')
          ->set_width(20),
        Field::make('image', 'as_gallery_img_2', 'Фото 2')
          ->set_width(20),
        Field::make('image', 'as_gallery_img_3', 'Фото 3')
          ->set_width(20),
        Field::make('image', 'as_gallery_img_4', 'Фото 4')
          ->set_width(20),
	));

Container::make('post_meta', 'page_instruction', 'Инструкции')
  // ->show_on_template('page-instruction.php')
  ->show_on_page('68')
  ->add_fields(array(
    Field::make('complex', 'complex_instruction', 'Инструкции')
      ->add_fields(array(
        Field::make('text', 'instruction_title', 'Название оборудования'),
        Field::make('rich_text', 'instruction_text', 'Инструкция'),
      )),
  ));
Container::make('term_meta', 'as_term_product', 'Дополнительные поля')
	->where('term_taxonomy', '=', 'asgproductcat')
	->add_fields(array(
		Field::make('image', 'term_product_icon', 'Иконка'),
    Field::make('image', 'term_product_photo', 'Фото категории'),
	) );

Container::make('term_meta', 'as_category', 'Дополнительные поля')
	->add_fields(array(
		Field::make('image', 'as_cat_image', 'Фото категории')
	));