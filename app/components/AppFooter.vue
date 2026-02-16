<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__column">
        <h3 class="footer__title">Каталог</h3>
        <ul class="footer__list">
          <li><a class="footer__link" href="#">Все бренды</a></li>
          <li><a class="footer__link" href="#">Nike</a></li>
          <li><a class="footer__link" href="#">Adidas</a></li>
          <li><a class="footer__link" href="#">Puma</a></li>
          <li><a class="footer__link" href="#">New Balance</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">Помощь</h3>
        <ul class="footer__list">
          <li><a class="footer__link" href="#">Доставка</a></li>
          <li><a class="footer__link" href="#">Заказ и оплата</a></li>
          <li><a class="footer__link" href="#">Обмен и Возврат</a></li>
          <li><a class="footer__link" href="#">F. A. Q.</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">Информация</h3>
        <ul class="footer__list">
          <li><a class="footer__link" href="#">Преимущества</a></li>
          <li><a class="footer__link" href="#">Гарантия и безопасность</a></li>
          <li><a class="footer__link" href="#">Индивидуальный заказ</a></li>
          <li><a class="footer__link" href="#">Акции</a></li>
        </ul>
      </div>
      <div class="footer__column">
        <h3 class="footer__title">Компания</h3>
        <ul class="footer__list">
          <li><a class="footer__link" href="#">О нас</a></li>
          <li><a class="footer__link" href="#">Блог</a></li>
          <li><a class="footer__link" href="#">Отзывы</a></li>
          <li><a class="footer__link" href="#">Контакты</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-header-footer-bg;
  color: $color-white;

  &__container {
    max-width: $breakpoint-desktop;
    margin: 0 auto;
    padding: ($spacing-unit * 25) $container-padding-x-mobile;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ($spacing-unit * 15) ($spacing-unit * 5);

    @media (min-width: $breakpoint-mobile + 1px) {
      padding: ($spacing-unit * 25) $container-padding-x-desktop;
    }

    @media (max-width: $breakpoint-mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: $spacing-unit * 2;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    color: $color-text-muted;
    line-height: 1.4;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: $spacing-unit;

    li {
      margin-top: 14px;
    }
  }

  &__link {
    color: $color-white;
    line-height: 1.4;

    &:hover {
      opacity: .66;
    }
  }
}
</style>
