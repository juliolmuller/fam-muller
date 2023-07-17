<script setup lang="ts">
import { ref } from 'vue';

import { Button } from '~/components';

import { mockedEvents } from './mocks';

const timelineEvents = ref(mockedEvents);
</script>

<template>
  <div class="TimelinePage-root">
    <div class="TimelinePage-header">
      <h2>Linha do Tempo</h2>

      <Button>Adicionar Evento</Button>
    </div>

    <ul class="TimelinePage-body">
      <li
        v-for="event in timelineEvents"
        :key="event.id"
      >
        <h3>{{ event.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.TimelinePage-root {
  @apply flex h-[60vh] flex-col gap-8 lg:container;
}

.TimelinePage-header {
  @apply sticky top-0 flex w-full items-center justify-between;

  h2 {
    @apply text-4xl text-brand-800;
  }
}

.TimelinePage-body {
  @apply px-8;

  li {
    @apply relative pb-8;

    &::before {
      content: '•';
      @apply inline-block mr-8 ml-[0.06rem] text-white font-bold scale-150 -translate-y-1;
    }

    &::after {
      content: '';
      @apply absolute top-0 bottom-0 left-0 -z-10 w-2 bg-brand-800;
    }

    &:first-of-type::after {
      @apply top-2 rounded-t-full;
    }

    &:last-of-type::after {
      @apply bottom-auto h-[1.1rem] rounded-b-full;
    }

    h3 {
      @apply inline-block text-xl;
    }
  }
}
</style>
