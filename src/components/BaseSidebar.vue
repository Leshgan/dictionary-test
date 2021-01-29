<template>
  <aside class="sidebar">
    <div class="sidebar__search">
      <input type="text" class="sidebar__search-input">
      <search-icon class="icon sidebar__search-icon" />
    </div>
    <div class="sidebar__filter">
      <v-checkbox v-model="filter.adjective" label="adjective"/>
      <v-checkbox v-model="filter.verb" label="verb"/>
      <v-checkbox v-model="filter.noun" label="noun"/>
    </div>
  </aside>
</template>

<script>
import SearchIcon from '@/assets/search.svg';
import VCheckbox from "@/components/VCheckbox";

export default {
  name: 'BaseSidebar',
  components: { VCheckbox, SearchIcon },
  data() {
    return {
      filter: {
        adjective: false,
        verb: false,
        noun: false,
      },
    }
  },
}
</script>

<style scoped>

</style>
