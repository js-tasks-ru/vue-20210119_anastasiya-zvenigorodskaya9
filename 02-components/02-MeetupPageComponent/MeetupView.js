import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <!-- meetup cover -->
      <meetup-cover :title="meetup.title" :link="coverLink"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <meetup-description v-if="meetup.description" :description="meetup.description"></meetup-description>
            <!-- meetup description -->

            <h3 v-if="meetup.agenda.length > 0">Программа</h3>
            <!-- meetup agenda -->
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetupDate"></meetup-info>
            <!-- meetup info -->
          </div>
        </div>
      </div>
    </div>`,

  components: {
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
    MeetupInfo,
  },
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  computed: {
    coverLink() {
      return this.meetup.imageId ? getMeetupCoverLink(this.meetup) : null;
    },
    meetupDate() {
      return this.meetup.date ? new Date(this.meetup.date) : null;
    },
  },
};
