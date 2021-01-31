export const CounterButton = {
  // Шаблон потребуется отредактировать
  template:
    '<button type="button" @click="increment(count)">{{ count }}</button>',

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    increment(val) {
      this.$emit('increment', ++val);
    },
  },
};
