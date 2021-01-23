import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

var app = new Vue({
  el: '#app',
  data: {
    message: 'click on me!',
    value: 0,
  },
  methods: {
    onBtnClick() {
      return this.value++;
    },
  },
});
