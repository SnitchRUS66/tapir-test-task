<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink class="header__logo" to="/" aria-label="Логотип" />
      <div class="header__spacer header__spacer--left" aria-hidden="true" />
      <nav class="header__nav">
        <a class="header__link" href="#">Мужчинам</a>
        <a class="header__link" href="#">Женщинам</a>
        <a class="header__link" href="#">Каталог</a>
        <a class="header__link" href="#">Доставка</a>
        <a class="header__link" href="#">Блог</a>
        <a class="header__link" href="#">О нас</a>
      </nav>
      <div class="header__spacer header__spacer--right" aria-hidden="true" />
      <div class="header__burger" aria-hidden="true">
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  min-height: $header-height-mobile;
  background-color: $color-white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;

  &__container {
    width: 100%;
    max-width: $breakpoint-desktop;
    margin: 0 auto;
    padding: 0 $container-padding-x-mobile;
    display: flex;
    align-items: center;

    @media (min-width: $breakpoint-mobile + 1px) {
      min-height: $header-height-desktop;
      padding: 0 $container-padding-x-desktop;
    }
  }

  &__spacer {
    display: none;
    flex: 1;
    min-width: 0;

    @media (min-width: $breakpoint-mobile + 1px) {
      display: block;
    }

    &--right {
      margin-left: 42px;
    }
  }

  &__breadcrumb {
    color: $color-white;
    font-size: 0.875rem;
  }

  &__logo {
    width: 28px;
    height: 28px;
    background-color: $color-red;
    flex-shrink: 0;

    @media (min-width: $breakpoint-mobile + 1px) {
      width: 42px;
      height: 42px;
    }
  }

  &__nav {
    display: none;
    align-items: center;
    justify-content: center;
    // flex-wrap: wrap; - на случай, если будут еще пункты меню и не влезет
    gap: ($spacing-unit * 2) ($spacing-unit * 10);
    padding: ($spacing-unit * 2.5) ($spacing-unit * 6);
    background-color: $color-bg-light;

    @media (min-width: $breakpoint-mobile + 1px) {
      display: flex;
    }
  }

  &__link {
    font-size: 1rem;
    color: $color-text-dark;
    white-space: nowrap;
    line-height: 20px;

    &:hover {
      opacity: .75;
    }
  }

  &__burger {
    width: 40px;
    height: 40px;
    background-color: $color-bg-light;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: auto;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: $breakpoint-mobile + 1px) {
      display: none;
    }

    &:hover {
      background-color: darken($color-bg-light, 10%);
    }
  }

  &__burger-line {
    width: 17px;
    height: 2px;
    background-color: $color-text-dark;
  }
}
</style>
