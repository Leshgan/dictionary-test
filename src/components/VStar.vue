<template>
  <span>
    <star-selected-icon v-if="active" class="icon star-icon" />
    <star-icon v-else class="icon star-icon" />
  </span>
</template>

<script>
import StarIcon from '@/assets/star.svg';
import StarSelectedIcon from '@/assets/star-selected.svg';

export default {
  name: 'VStar',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  components: { StarIcon, StarSelectedIcon },
};
</script>

<style scoped>

</style>
