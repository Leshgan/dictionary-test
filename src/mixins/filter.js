import { mapActions, mapState } from 'vuex';
import debounce from 'lodash.debounce';

export const filter = {
  data() {
    return {
      debounce: debounce(async () => {
        // call mapped action
        await this[this.$options.name]({
          q: this.query,
          filter: this.filter,
        });
      }, 300),
    };
  },
  computed: {
    ...mapState('filter', {
      query: state => state.query,
      filter: state => state.filter,
    }),
  },
  watch: {
    query(val, oldVal) {
      if (val !== oldVal) {
        this.search();
      }
    },
    filter: {
      deep: true,
      handler() {
        this.search();
      },
    },
  },
  created() {
    // if query string was saved to localStorage, restore data from API
    if (this.query) {
      this.search();
    }
  },
  async beforeRouteLeave(to, from, next) {
    // clear search to disable unnecessary filtering
    await this.$store.dispatch('filter/clear');
    next();
  },
  methods: {
    ...mapActions('filter', {
      Home: 'Home',
      Favorites: 'Favorites',
    }),
    search() {
      if (this.$options.name) {
        this.debounce();
      }
    },
  },
};
