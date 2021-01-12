<?php
/**
 * lipsky functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package lipsky
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release. 
	define( '_S_VERSION', '1.0.1' );
}

if ( ! function_exists( 'lipsky_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function lipsky_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on lipsky, use a find and replace
		 * to change 'lipsky' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'lipsky', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' ); 

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
// add_action( 'after_setup_theme', function(){
// 	register_nav_menus( [
// 		'menu-1' => 'Меню в шапке',
// 		'menu-2' => 'Мобильное меню',
// 	] ); 
// } );
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Меню в шапке', 'lipsky' ),
				'menu-2' => esc_html__( 'Мобильное меню', 'lipsky' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'lipsky_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'lipsky_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lipsky_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'lipsky_content_width', 640 );
}
add_action( 'after_setup_theme', 'lipsky_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lipsky_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'lipsky' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'lipsky' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'lipsky_widgets_init' ); 

/**
 * Enqueue scripts and styles.
 */
function lipsky_scripts() {
	wp_enqueue_style( 'lipsky-style', get_stylesheet_uri() );

	wp_enqueue_script( 'jquery');

	wp_enqueue_script( 'lipsky-inputmask', get_template_directory_uri() . '/js/jquery.inputmask.bundle.js', array(), 1.0, true );

	wp_enqueue_script( 'lipsky-main', get_template_directory_uri() . '/js/main.js', array(), 1.0, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) { 
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'lipsky_scripts' );


