<template>
  <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
      <AppButton to="/catalog">В каталог</AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero {
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ($spacing-unit * 5) $container-padding-x-mobile;
  width: 100%;
  max-width: $breakpoint-desktop;
  background-color: $color-white;
  margin: 0 auto;

  @media (min-width: $breakpoint-mobile + 1px) {
    padding: ($spacing-unit * 5) $container-padding-x-desktop;
  }

  &__inner {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ($spacing-unit * 10) 0;
  }

  &__title {
    font-size: clamp(26px, 9vw, 64px);
    font-weight: 500;
    color: $color-text-dark;
    margin: 0;
    letter-spacing: 0.02em;
    line-height: 1.1;
  }
}
</style>
