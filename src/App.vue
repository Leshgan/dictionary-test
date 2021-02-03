<template>
  <div id="app">
    <base-header />
    <base-sidebar />
    <main :class="{'app-loading': loading}">
      <router-view />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader';
import BaseSidebar from '@/components/BaseSidebar';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { BaseSidebar, BaseHeader },
  computed: {
    ...mapState({
      loading: state => state.loading,
    }),
  },
};
</script>

<style scoped>
  .app-loading {
    opacity: 0.5;
  }
</style>
