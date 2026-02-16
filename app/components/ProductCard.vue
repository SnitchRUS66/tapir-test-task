<template>
  <a class="product-card" href="#">
    <div class="product-card__image-wrap">
      <img
        class="product-card__image"
        :src="product.image"
        :alt="product.name"
        loading="lazy"
      />
      <span class="product-card__favorite" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="1.5" fill="none"/>
        </svg>
      </span>
    </div>
    <p class="product-card__price">
      {{ formattedPrice }}
      <span class="product-card__price-installment">{{ priceX2 }} ₽ x 2</span>
    </p>
    <p class="product-card__name">{{ product.name }}</p>
  </a>
</template>

<script setup lang="ts">
import type { Product } from '~/types/api'

const props = defineProps<{
  product: Product
}>()

const formattedPrice = computed(() => {
  return `${props.product.price.toLocaleString('ru-RU')} ₽`
})

const priceX2 = computed(() => {
  return Math.ceil(props.product.price / 2).toLocaleString('ru-RU')
})
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  color: $color-text-dark;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;

    img {
      transform: scale(1.04) rotate(-3deg);
    }
  }

  img {
    transition: transform 100ms ease-in-out;
  }

  &__image-wrap {
    position: relative;
    width: 100%;
    max-width: 290px;
    aspect-ratio: 290 / 180;
    background-color: #f5f5f5;
    margin-bottom: $spacing-unit * 4; // тут из-за нестандартной высоты картинок слишком большой отступ
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  &__favorite {
    position: absolute;
    top: $spacing-unit * 2;
    right: $spacing-unit * 2;
    color: $color-text-dark;
    pointer-events: none;
  }

  &__price {
    font-size: (24px / $root-font-size) * 1rem;
    font-weight: 500;
    margin: 0 0 $spacing-unit;
    line-height: 1;
  }

  &__price-installment {
    font-size: 1rem;
    font-weight: 500;
    color: $color-white;
    background-color: $color-black;
    display: block;
    padding: 3px 4px;
    margin-top: 9px;
    width: fit-content;
    transform: translateY(-2px);

    @media (min-width: $breakpoint-mobile + 1px) {
      display: inline-block;
      margin-top: 0;
    }
  }

  &__name {
    font-size: (16px / $root-font-size) * 1rem;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
  }
}
</style>
