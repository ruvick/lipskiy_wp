    <footer id="footer" class="footer">
      <div class='container'>
        <div class="footer__row d-flex">
          <a href="http://lipskiy-konsalting.ru" class="header__logo footer__logo icon-logo-f"><p>ЛИПСКИЙ <br> <span>И ПАРТНЕРЫ</span></p></a>
          <div class="footer__contact d-flex">
            <div class="footer__social d-flex">
              <a href="<? echo carbon_get_theme_option("as_telegr"); ?>" aria-label="telegram" class="footer__icon icon-telegr"></a>
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
