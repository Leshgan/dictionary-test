<template>
  <aside class="sidebar">
    <div class="sidebar__search">
      <input
        type="text"
        class="sidebar__search-input"
        :value="query"
        @input="setQuery({ type: 'query', value: $event.target.value, save: true })"
      >
      <search-icon class="icon sidebar__search-icon" />
    </div>
    <div v-if="filterVisible" class="sidebar__filter">
      <v-checkbox
        v-for="(item, index) in customFilter"
        :key="`${item.key}-${index}`"
        :value="item.value"
        @input="setFilter({ prop: item.key, value: $event })"
        :label="item.key"
      />
    </div>
  </aside>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import SearchIcon from '@/assets/search.svg';
import VCheckbox from '@/components/VCheckbox';

export default {
  name: 'BaseSidebar',
  components: { VCheckbox, SearchIcon },
  computed: {
    ...mapState('filter', {
      filter: 'filter',
      query: 'query',
    }),
    customFilter() {
      const filter = this.filter || {};
      return Object
        .entries(filter)
        .map(([key, value]) => ({ key, value }));
    },
    filterVisible() {
      const { filterVisible = false } = this.$route.meta;
      return !!this.query || filterVisible;
    },
  },
  methods: {
    ...mapMutations('filter', {
      setQuery: 'SET',
      setFilter: 'filter',
    }),
  },
};
</script>
