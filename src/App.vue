<template>
  <div id="app">
    <base-header />
    <base-sidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader';
import BaseSidebar from '@/components/BaseSidebar';

export default {
  name: 'App',
  components: { BaseSidebar, BaseHeader },
}
</script>
