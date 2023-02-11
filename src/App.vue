<script setup>
import { RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue';
</script>

<template>
  <NavbarItem />
  <RouterView />
  <FooterItem />
</template>
