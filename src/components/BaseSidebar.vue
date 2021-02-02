<template>
  <aside class="sidebar">
    <div class="sidebar__search">
      <input
        type="text"
        class="sidebar__search-input"
        v-model="query"
      >
      <search-icon class="icon sidebar__search-icon" />
    </div>
    <div v-if="query" class="sidebar__filter">
      <v-checkbox
        v-for="(item, index) in filter"
        :key="`${item.key}-${index}`"
        :value="item.value"
        @input="setFilter(item.key, $event)"
        :label="item.key"
      />
    </div>
  </aside>
</template>

<script>
import SearchIcon from '@/assets/search.svg';
import VCheckbox from '@/components/VCheckbox';

export default {
  name: 'BaseSidebar',
  components: { VCheckbox, SearchIcon },
  computed: {
    query: {
      get() {
        return this.$store.state.filter.query;
      },
      set(value) {
        this.$store.commit('filter/SET', { type: 'query', value, save: true });
      }
    },
    filter() {
      const filter = this.$store.state.filter.filter || {};
      return Object
        .entries(filter)
        .map(([key, value]) => ({ key, value }));
    },
  },
  methods: {
    setFilter(prop, value) {
      this.$store.commit('filter/filter', { prop, value });
    }
  },
}
</script>

<style scoped>

</style>
