<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Button } from '~/components';
</script>

<template>
  <header class="flex items-center gap-4 border-b border-b-gray-200 bg-white px-8 py-4">
    <RouterLink
      class="mr-8 inline-flex items-center gap-4 font-brand text-3xl"
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

  <main class="px-8">
    <RouterView />
  </main>
</template>
