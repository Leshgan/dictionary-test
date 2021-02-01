<template>
  <div>
    <h1 class="main-title">Starred Words</h1>
  </div>
</template>

<script>
import { filter } from '@/mixins/filter';

export default {
  name: 'Favorites',
  mixins: [ filter ],
}
</script>

<style scoped>

</style>
