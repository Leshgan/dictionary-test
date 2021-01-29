<template>
  <div id="app">
    <base-header />
    <base-sidebar @input="q = $event" />
    <main>
      <router-view :q="q" />
    </main>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader';
import BaseSidebar from '@/components/BaseSidebar';

export default {
  name: 'App',
  components: { BaseSidebar, BaseHeader },
  data() {
    return {
      q: null,
    }
  },
}
</script>
