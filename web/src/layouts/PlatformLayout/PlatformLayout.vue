<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Button } from '~/components';
</script>

<template>
  <div class="PlatformLayout-root">
    <header class="PlatformLayout-header">
      <RouterLink
        class="PlatformLayout-logo"
        to="/"
      >
        <img
          src="/img/logo.svg"
          alt="Müller logo"
          height="40"
          width="40"
        />
        Müller
      </RouterLink>

      <Button
        to="/feed"
        is-nav
        secondary
      >
        Feed
      </Button>

      <Button
        to="/timeline"
        is-nav
        secondary
      >
        Linha do Tempo
      </Button>

      <Button
        to="/genealogy"
        is-nav
        secondary
      >
        Árvore Genealógica
      </Button>
    </header>

    <main class="PlatformLayout-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.PlatformLayout-root {
  @apply flex-1;
}

.PlatformLayout-header {
  @apply flex items-center gap-4 border-b border-b-gray-200 bg-white px-8 py-4;

  .PlatformLayout-logo {
    @apply mr-8 inline-flex items-center gap-4 font-brand text-3xl;
  }
}

.PlatformLayout-content {
  @apply mt-8 px-8;
}
</style>
