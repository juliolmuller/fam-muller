<script setup lang="ts">
import { Button } from '~/components';
</script>

<template>
  <div class="flex flex-col items-center gap-8 pb-16 pt-8">
    <p class="text-center text-4xl font-bold text-brand-800">Acessar a pplataforma</p>

    <Button
      class="px-8"
      to="/feed"
    >
      Entrar ou Registrar-se
    </Button>
  </div>
</template>
