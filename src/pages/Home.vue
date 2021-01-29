<template>
  <div class="list">
    <v-word
      v-for="word in words"
      :key="word.id"
      :word="word"
    />
  </div>
</template>

<script>
import VWord from '@/components/VWord';

export default {
  name: 'Home',
  components: { VWord },
  data() {
    return {
      words: [
        {
          id: 1,
          name: 'word 1',
          speech: 'noun',
          value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi consequatur nostrum odit sunt voluptates. Accusantium fugiat ipsa iure provident, quidem quisquam tempora vero? Cumque deserunt eos numquam quas.',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi consequatur nostrum odit sunt voluptates. Accusantium fugiat ipsa iure provident, quidem quisquam tempora vero? Cumque deserunt eos numquam quas.'
        },
        {
          id: 2,
          name: 'word 2',
          speech: 'verb',
          value: 'lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi consequatur nostrum odit sunt voluptates. Accusantium fugiat ipsa iure provident, quidem quisquam tempora vero? Cumque deserunt eos numquam quas.'
        },
        {
          id: 3,
          name: 'word 3',
          speech: 'adjective',
          value: 'lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi consequatur nostrum odit sunt voluptates. Accusantium fugiat ipsa iure provident, quidem quisquam tempora vero? Cumque deserunt eos numquam quas.'
        },
        {
          id: 4,
          name: 'word 4',
          speech: 'noun',
          value: 'lorem ipsum',
          description: 'Lorem ipsum dolor sit amet'
        }
      ],
    };
  },
}
</script>

<style scoped>

</style>
