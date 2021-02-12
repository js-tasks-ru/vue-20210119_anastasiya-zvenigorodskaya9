import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div v-if='meetup'>
                <meetup-view :meetup="meetup"></meetup-view>
            </div>`,

  components: {
    MeetupView,
  },
  data() {
    return {
      meetup: null,
    };
  },

  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },

  methods: {
    fetchData(meetupId) {
      return fetchMeetup(meetupId);
    },
  },
};
