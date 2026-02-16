<template>
  <NuxtLink v-if="to" :to="to" class="button" :class="variantClass">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" class="button" :class="variantClass">
    <slot />
  </a>
  <button v-else :type="type" class="button" :class="variantClass" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
  }>(),
  { type: 'button', variant: 'primary' }
)

const variantClass = computed(() =>
  props.variant === 'secondary' ? 'button--secondary' : ''
)

defineEmits<{
  click: []
}>()
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: ($spacing-unit * 2.5) ($spacing-unit * 7);
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: $color-red;
  color: $color-white;

  &:hover {
    background-color: darken($color-red, 10%);
  }

  &--secondary {
    border: 1px solid $color-text-dark;
    background-color: $color-white;
    color: $color-text-dark;

    &:hover {
      background-color: $color-text-dark;
      color: $color-white;
    }
  }
}
</style>
