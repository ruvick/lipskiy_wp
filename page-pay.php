<?php

/*
Template Name: Страница Оплаты
Template Post Type: page
*/

get_header();
?>
<?php get_template_part('template-parts/header-section-tip');?>

<section class="contacts">
	<div class="container">
		<div data-mb-border-color="#8ab82d" data-mb-btn-color="#8ab82d" data-mb-btn-text-color="#fff" data-mb-btn-title="Оплатить" data-mb-description="Оплата услуг компании &quot;Липский Консалтинг&quot;. " data-mb-readdress="https://lipskiy-konsalting.ru/pay-ok" data-mb-widget-title="Оплато услуг " data-mb-widget-id="edb37535-e70e-4244-8090-f68c125aa53f" data-mb-nds-rate="none" data-mb-payment-method="full_payment" data-mb-tax="usn_income" data-mb-fio data-mb-mail data-mb-phone></div>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/modulbank-pay/modulbank-widget/modulbank-pay-widget-v1.0.0.js"></script>
	</div>

	<div class ="posts__content ">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<?php the_content();?>
			<?php endwhile;?>
		<?php endif; ?>

	</div>
</section>

<?php get_footer(); ?>  
