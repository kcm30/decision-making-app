<template>
  <div>
  <h3 style="padding-left:10px;">Select Dates</h3>
    <div class="datepicker-trigger" style="padding-left:10px;">
      <button id="datepicker-button-trigger" class="btn btn-primary">{{ formatDates(dateOne, dateTwo) || 'Date Range' }}</button>

      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-button-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
        :date-one="dateOne"
        :date-two="dateTwo"
        :offset-y="10"
        @date-one-selected="val => { dateOne = val }"
        @date-two-selected="val => { dateTwo = val }"
        @apply="postDates(dateOne, dateTwo)"
      />
    </div>
    <br>
    <div>
    <h3 style="padding-left:10px;">Select Player</h3>
    <v-select
      :options="['Wil Trapp','Alphonso Davies','Zlatan']"
      :style="{width:'20%',
               paddingLeft:'10px'}"
      @input="inputChange">
    </v-select>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format';
import axios from 'axios';

export default {
  data() {
    return {
      dateFormat: 'MM-DD-YYYY',
      dateOne: '',
      dateTwo: '',
    };
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = '';
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat);
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat);
      }
      return formattedDates;
    },
    postDates(dateOne, dateTwo) {
      const path = 'http://127.0.0.1:5000/dates';
      const dt = {
        minDate: dateOne,
        maxDate: dateTwo,
      };
      axios.post(path, dt);
    },
    inputChange: (selected) => {
      if (selected != null) {
        const path = 'http://127.0.0.1:5000/player';
        console.log(selected);
        axios.post(path, {selected});
      }
    },
  },
};
</script>
