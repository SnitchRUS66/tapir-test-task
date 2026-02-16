<template>
  <div class="layout">
    <div class="layout__body">
      <AppHeader />
      <main class="layout__main">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;

  &__body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
}
</style>
