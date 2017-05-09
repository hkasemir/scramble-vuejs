import Vue from 'vue';
import WordContainer from '@/components/word-container';

describe('word-container.vue', () => {
  it('renders a blank 6-letter word on start', () => {
    const Constructor = Vue.extend(WordContainer);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.main-container h1').textContent)
      .to.equal('xxxxxx');
  });
});
