<template>
  <div>
    <ol class="letters-container">
      <letter-box
        v-for="letter in scrambled"
        v-bind:class="getLetterClass()"
        v-bind:letter="letter">
      </letter-box>
    </ol>
    <input type="text" id="guess-input" autofocus @keydown="makeGuess" class="guess">
  </div>
</template>

<script>
import LetterBox from './letter-box';
import wordService from '../services/word-api';
import utils from '../utils';

export default {
  name: 'word-container',
  data() {
    return {
      word: 'xxxxxx',
      scrambled: 'xxxxxx',
      guess: '',
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
        this.scrambled = this.randomizeWord(word);
      });
    },
    randomizeWord(word) {
      return utils.randomizeWord(word);
    },
    makeGuess(evt) {
      const letter = evt.key.toLowerCase();
      if (letter === 'backspace') {
        this.guess = this.guess.substr(0, this.guess.length - 1);
        return;
      }
      let theRest = this.scrambled.replace(this.guess, '');
      if (theRest.includes(letter)) {
        theRest = theRest.replace(letter, '');
        this.guess += letter;
        this.scrambled = this.guess + theRest;
      }
    },
    getLetterClass() {
      if (this.scrambled === this.word) {
        return 'victory';
      }
      return 'guessing';
    },
  },
  components: {
    LetterBox,
  },
};
</script>

<style scoped>
.letters-container {
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: center;
}

.guess {
  text-align: center;
  padding: 0.6em;
  font-size: 1.6em;
}
</style>
