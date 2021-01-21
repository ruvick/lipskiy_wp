<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lipskiy
 */

?>

<!DOCTYPE html>
<html lang="ru">

<head>
  <title><?php wp_title(); ?></title>
  <meta charset="UTF-8">
  <meta name="format-detection" content="telephone=no">

  <link rel="icon" type="image/png" sizes="256x256" href="<?php echo get_template_directory_uri();?>/img/favicons/icon256.png">
  <link rel="icon" type="image/png" sizes="128x128" href="<?php echo get_template_directory_uri();?>/img/favicons/icon128.png">
  <link rel="icon" type="image/png" sizes="64x64" href="<?php echo get_template_directory_uri();?>/img/favicons/icon64.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri();?>/img/favicons/icon32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri();?>/img/favicons/icon16.png">
  <link rel="icon" type="image/svg+xml" sizes="any" href="<? echo get_template_directory_uri();?>/image/favicons/icon-faw.svg">

  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  
  <?php wp_head();?> 
  
</head>

<body>
  <div id="content" class="wrapper">
    <!-- Подключение  модальных окон-->
    <? include "modal-win.php";?>

