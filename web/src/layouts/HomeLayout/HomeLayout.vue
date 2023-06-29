<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { Button } from '~/components';
</script>

<template>
  <div class="flex-1 lg:container">
    <header class="flex items-center justify-between gap-4 p-4 md:py-8">
      <RouterLink
        class="inline-flex items-center gap-4 font-brand text-5xl"
        to="/"
      >
        <img
          src="/img/logo.svg"
          alt="Müller logo"
          height="60"
          width="60"
        />
        Müller
      </RouterLink>

      <div class="flex items-center gap-4">
        <Button
          secondary
          href="#about"
        >
          Sobre a Família
        </Button>

        <Button
          secondary
          href="#stats"
        >
          Recursos da Plataforma
        </Button>

        <Button href="/feed">Entrar</Button>
      </div>
    </header>

    <main class="px-4">
      <RouterView />
    </main>
  </div>
</template>
