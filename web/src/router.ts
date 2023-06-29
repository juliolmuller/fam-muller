import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { HomeLayout } from '~/layouts';
import { HomePage } from '~/pages';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        component: HomePage,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
