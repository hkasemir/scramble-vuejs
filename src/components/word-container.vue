<template>
  <div class="main-container">
    <h1>{{ word }}</h1>
  </div>
</template>

<script>
import wordService from '../services/word-api';

export default {
  name: 'word-container',
  data() {
    return {
      word: 'xxxxxx',
    };
  },
  created() {
    this.fetchNewWord();
  },
  methods: {
    fetchNewWord() {
      wordService.fetchRandomWord()
      .then((word) => {
        this.word = word;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  border: 1px solid gray;
}
</style>
