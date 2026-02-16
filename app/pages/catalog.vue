<template>
  <div class="catalog">
    <div class="catalog__container">
      <h1 class="catalog__title">КАТАЛОГ</h1>
      <div class="catalog__grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="catalog__actions">
        <template v-if="loadState === 'idle' && hasNextPage">
          <AppButton variant="secondary" @click="loadMore">
            Показать ещё
          </AppButton>
        </template>
        <template v-else-if="loadState === 'loading'">
          <p class="catalog__loading">Загрузка...</p>
        </template>
        <template v-else-if="loadState === 'error'">
          <div class="catalog__error">
            <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
            <AppButton variant="secondary" @click="retry">
              Повторить
            </AppButton>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { products, loadState, hasNextPage, loadMore, retry } = await useCatalogProducts(16)
</script>

<style lang="scss" scoped>
.catalog {
  background-color: $color-white;

  &__container {
    max-width: $breakpoint-desktop;
    margin: 0 auto;
    padding-left: $container-padding-x-mobile;
    padding-right: $container-padding-x-mobile;

    @media (min-width: $breakpoint-mobile + 1px) {
      padding-left: $container-padding-x-desktop;
      padding-right: $container-padding-x-desktop;
    }
  }

  &__title {
    font-size: clamp(29px, 5vw, 46px);
    font-weight: 500;
    margin: 40px 0 20px 0;
    letter-spacing: 0.02em;
    text-align: center;

    @media (min-width: $breakpoint-mobile + 1px) {
      margin: 100px 0 110px 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-unit * 5;
    margin-bottom: $spacing-unit * 4;

    @media (min-width: $breakpoint-mobile + 1px) {
      grid-template-columns: repeat(4, 1fr);
      gap: $spacing-unit * 10;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    padding: clamp(40px, 10vw, 110px) clamp(40px, 6vw, 100px);
  }

  &__error .button {
    margin-top: $spacing-unit * 2;
  }

  &__loading {
    min-height: 38px;
    padding-top: 9px;
    margin: 0;
    color: $color-text-muted;
    font-size: 1rem;
  }

  &__error {
    padding-top: 9px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-unit;
  }

  &__error-text {
    margin: 0;
    color: $color-text-dark;
    font-size: 1rem;
  }
}
</style>
