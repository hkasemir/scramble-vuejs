<template>
  <div id="app">
    <word-container></word-container>
  </div>
</template>

<script>
import WordContainer from './components/word-container';

export default {
  name: 'app',
  components: {
    WordContainer,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
