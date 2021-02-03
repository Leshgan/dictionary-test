<template>
  <div
    class="list__item"
    :class="{expandable}"
    @click="expanded = !expanded"
  >
    <div
      class="list__item_first"
      :class="{expanded, draggable}"
    >
      <span class="list__item_first_burger" v-if="draggable">&#9776;</span>
      <span class="list__item_first_word">{{ word.word }}</span>
      <span class="list__item_first_part_of_speech">{{ speechPart }}</span>
      <span class="list__item_first_value">
        <span v-for="value in description" :key="value">{{ value }}</span>
      </span>
      <span class="list__item_first_icon">
        <button
          class="list__item_star-button"
          @click.stop="toggle(word)"
        >
          <star-icon v-if="!inFavorites(word)" class="icon star-icon" />
          <star-selected-icon v-else class="icon star-icon" />
        </button>
      </span>
    </div>
    <span
      v-show="expanded"
    >
      {{ word.description }}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import StarIcon from '@/assets/star.svg';
import StarSelectedIcon from '@/assets/star-selected.svg';
import { transformTag } from '@/utils';

export default {
  name: 'VWord',
  props: {
    word: {
      type: Object,
      required: true,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
  },
  components: { StarIcon, StarSelectedIcon },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    ...mapGetters('favorites', {
      inFavorites: 'inFavorites',
    }),
    speechPart() {
      return this.word.tags && this.word.tags.map(transformTag).join(', ');
    },
    description() {
      if (!this.word.defs) {
        return null;
      }
      return this.expanded && this.word.defs.length > 1
        ? this.word.defs.map(def => def.split('\t'))
          .map(([tag, d]) => [transformTag(tag), d].join(', '))
        : [this.word.defs[0].split('\t')[1]];
    },
    expandable() {
      return this.word.defs
        && Array.isArray(this.word.defs)
        && this.word.defs.length > 1;
    },
  },
  methods: {
    ...mapActions('favorites', {
      toggle: 'toggleAction',
    }),
  },
};
</script>
