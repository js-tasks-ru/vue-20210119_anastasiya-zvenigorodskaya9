import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

const MEETUP_ID = 6;

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data() {
    return {
      meetup: null,
    };
  },

  async mounted() {
    // Требуется получить данные митапа с API
    this.meetup = await this.fetchMeetup();
    return this.meetup;
  },
  computed: {
    meetupCover() {
      return this.meetup.imageId
        ? `url(${API_URL}/images/${this.meetup.imageId})`
        : null;
    },
    localDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    meetupTime() {
      return this.getTimeString(new Date(this.meetup.date));
    },
    agendaItemTitles() {
      return agendaItemTitles;
    },
    agendaItemIcons() {
      return agendaItemIcons;
    },
  },

  methods: {
    fetchMeetup() {
      return fetch(`${API_URL}/meetups/${MEETUP_ID}`).then((res) => res.json());
    },
    getTimeString(date) {
      const HH = date.getHours().toString().padStart(2, '0');
      const MIN = date.getMinutes().toString().padStart(2, '0');
      return `${HH}:${MIN}`;
    },
  },
});
