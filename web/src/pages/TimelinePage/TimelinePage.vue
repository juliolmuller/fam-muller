<script setup lang="ts">
import { ref } from 'vue';

import { Button } from '~/components';

import { mockedEvents } from './mocks';

const timelineEvents = ref(mockedEvents);

function formatDate(date: Date) {
  return date.toLocaleDateString('pt-BR', {
    dateStyle: 'long',
  });
}
</script>

<template>
  <div class="TimelinePage-root">
    <div class="TimelinePage-header">
      <h2>Linha do Tempo</h2>

      <Button type="button">Adicionar Evento</Button>
    </div>

    <ul class="TimelinePage-body">
      <li
        v-for="event in timelineEvents"
        :key="event.id"
      >
        <time>{{ formatDate(event.startDate) }}</time>
        <h3>{{ event.name }}</h3>

        <div v-if="event.description">
          <p
            v-for="(paragraph, index) in event.description.split('\n')"
            :key="index"
          >
            {{ paragraph }}
          </p>
        </div>

        <div v-if="event.attachments.length">
          <img
            v-for="attachment in event.attachments"
            :key="attachment.id"
            :src="attachment.url"
            :alt="attachment.name"
          />
        </div>
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
    @apply relative flex flex-col pl-8 pb-8;

    &::before {
      content: '•';
      @apply absolute left-0 px-[0.06rem] text-white font-bold scale-150 -translate-y-1.5;
    }

    &::after {
      content: '';
      @apply absolute top-0 bottom-0 left-0 -z-10 w-2 bg-brand-800;
    }

    &:first-of-type::after {
      @apply top-0.5 rounded-t-full;
    }

    &:last-of-type::after {
      @apply rounded-b-full;
    }

    time {
      @apply flex items-center gap-2 w-full text-brand-800 font-bold text-xs;

      &::after {
        content: '';
        @apply flex-1 opacity-20 border-b border-b-brand-800;
      }
    }

    h3 {
      @apply text-xl;
    }

    p {
      @apply max-w-2xl mt-2 text-gray-600 text-sm leading-relaxed;
    }

    div:has(img) {
      @apply mt-4;

      img {
        @apply inline-block h-24 w-24 object-cover transition-transform;

        &:hover {
          @apply scale-105 cursor-pointer;
        }
      }
    }
  }
}
</style>
