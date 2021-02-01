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
        v-for="item in Object.entries(filter)"
        :key="item[0]"
        :value="item[1]"
        @input="setFilter(item[0], $event)"
        :label="item[0]"
      />
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex';
import SearchIcon from '@/assets/search.svg';
import VCheckbox from "@/components/VCheckbox";

export default {
  name: 'BaseSidebar',
  components: { VCheckbox, SearchIcon },
  computed: {
    query: {
      get() {
        return this.$store.state.filter.query;
      },
      set(value) {
        this.$store.commit('filter/SET', { type: 'query', value });
      }
    },
    ...mapState('filter', {
      filter: state => state.filter,
    }),
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
