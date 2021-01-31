<?php

/*
Template Name: Страница результатов платежа
Template Post Type: page
*/

get_header();
?>
<?php get_template_part('template-parts/header-section-tip');?>

<section class="contacts">
	<div class="container">
        <div class ="posts__content ">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php the_content();?>
                <?php endwhile;?>
            <?php endif; ?>
        </div>
    </div>

	
</section>

<?php get_footer(); ?>  
