import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

const MEETUP_ID = 6;
const fetchMeetup = () =>
  fetch(`${API_URL}/meetups/${MEETUP_ID}`).then((res) => res.json());

const getDateTimeString = (date) => {
  const YYYY = date.getUTCFullYear();
  const MM = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const DD = date.getUTCDate().toString().padStart(2, '0');
  const HH = date.getHours().toString().padStart(2, '0');
  const MIN = date.getMinutes().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}, ${HH}:${MIN}`;
};

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
      rawMeetup: null,
    };
  },

  async mounted() {
    // Требуется получить данные митапа с API
    this.rawMeetup = await fetchMeetup();
  },
  computed: {
    meetup() {
      return this.rawMeetup;
    },
  },

  methods: {
    makeMeetupCoverLink(imageId) {
      return `url(${API_URL}/images/${imageId})`;
    },
    // getMeetupData() {
    //   return this.rawMeetup.map((meetup) => ({
    //     ...meetup,
    //     cover: meetup.imageId
    //       ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
    //       : undefined,
    //     coverStyle: meetup.imageId
    //       ? {
    //           '--bg-url': `url('https://course-vue.javascript.ru/api/images/${meetup.imageId}')`,
    //         }
    //       : {},
    //     date: new Date(meetup.date),
    //     localDate: new Date(meetup.date).toLocaleString(navigator.language, {
    //       year: 'numeric',
    //       month: 'long',
    //       day: 'numeric',
    //     }),
    //     getDateTimeString: getDateTimeString(new Date(meetup.date)),
    //   }));
    // },
  },
});
