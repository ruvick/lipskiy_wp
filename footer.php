    <footer id="footer" class="footer">
      <div class='container'>
        <div class="footer__row d-flex">
          <a href="http://lipskiy-konsalting.ru" class="header__logo footer__logo icon-logo-f"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
          <div class="footer__contact d-flex">
            <div class="footer__social d-flex">
              <a href="tg://msg?text=<?php echo urlencode( 'Добрый день, мне нужна консультация.' ); ?>&to=79852332867" aria-label="telegram" class="footer__icon icon-telegr"></a>
              <a href="<? echo carbon_get_theme_option("as_insta"); ?>" aria-label="instagram" class="footer__icon icon-insta"></a>
              <a href="<? echo carbon_get_theme_option("as_face"); ?>" aria-label="facebook" class="footer__icon icon-face"></a>
              <a href="<? echo carbon_get_theme_option("as_vk"); ?>" aria-label="ВКонтакте" class="footer__icon icon-vk"></a>
            </div>
            <a href="tel:<? echo preg_replace('/[^0-9]/', '', $tel); ?>" class="footer__tel"><? echo $tel = carbon_get_theme_option("as_phones_1"); ?></a> 
          </div>
        </div>
      </div>
    </footer>  
</div>

<?php wp_footer(); ?>
</body>

</html> 
