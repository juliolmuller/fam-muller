<script setup lang="ts">
import { ButtonHTMLAttributes, computed } from 'vue';
import { RouterLink, RouterLinkProps, useRoute } from 'vue-router';

import { clsx } from '~/utils/styles';

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  href?: string;
  isNav?: boolean;
  to?: RouterLinkProps['to'];
  secondary?: boolean;
}

export interface ButtonSlots {
  default: (props: unknown) => string;
}

const props = defineProps<ButtonProps>();
defineSlots<ButtonSlots>();

const route = useRoute();

const actualClasses = computed(() => {
  return clsx(
    'flex items-center justify-center h-12 rounded-md px-4 transition-colors font-bold text-center active:scale-[98%] active:filter active:brightness-[96%]',
    props.secondary
      ? 'text-brand-800 hover:text-brand-900 hover:bg-gray-100'
      : 'bg-brand-800 text-white hover:bg-brand-900',
    props.isNav && !route.matched && 'font-normal text-gray-950 opacity-60 hover:opacity-100',
    props.class,
  );
});
</script>

<template>
  <RouterLink
    v-if="to"
    v-bind="$attrs"
    :class="actualClasses"
    :to="to"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    v-bind="$attrs"
    :class="actualClasses"
    :href="href"
  >
    <slot />
  </a>

  <button
    v-else
    v-bind="$attrs"
    :class="actualClasses"
    :type="type ?? 'button'"
  >
    <slot />
  </button>
</template>