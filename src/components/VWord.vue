<template>
  <div
    class="list__item"
    @click="showMore = !showMore"
  >
    <div
      class="list__item_first"
      :class="{'show-more': showMore}"
    >
      <span class="list__item_first_word">{{ word.name }}</span>
      <span class="list__item_first_part_of_speech">{{ word.speech }}</span>
      <span class="list__item_first_value">{{ word.value }}</span>
      <span class="list__item_first_icon">
        <button
          class="list__item_star-button"
          @click.stop="toggleFavorite"
        >
          <star-icon v-if="!inFavorites" class="icon star-icon" />
          <star-selected-icon v-else class="icon star-icon" />
        </button>
      </span>
    </div>
    <span
      v-show="showMore"
      class=x
    >
      {{ word.description }}
    </span>
  </div>
</template>

<script>
import StarSelectedIcon from '@/assets/star-selected.svg';
import StarIcon from '@/assets/star.svg';

export default {
  name: 'VWord',
  props: {
    word: {
      type: Object,
      required: true,
    }
  },
  components: { StarIcon, StarSelectedIcon },
  data() {
    return {
      showMore: false,

    };
  },
  computed: {
    inFavorites() {
      return false;
    }
  },
  methods: {
    toggleFavorite() {
      //
    }
  },
}
</script>

<style scoped>

</style>
