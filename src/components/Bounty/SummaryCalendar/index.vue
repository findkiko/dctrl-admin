<template lang="jade">

#calendar
    .row.legend
        .nine.columns &nbsp;
        .three.columns
            table
                tr
                    td.paidbox.signcell
                    td Paid
    .row.menu
        .three.columns(@click='prevMonth')
            img(src='../../../assets/images/left.svg')
        .six.columns {{ monthName }} - {{year}}
        .three.columns(@click='nextMonth')
            img(src='../../../assets/images/right.svg')
    slot
    .weekday(v-for='dayName in DAYS_OF_WEEK') {{dayName}}
    .placeholder(v-for='placeholder in firstDay')
    day(v-for='day in days', :day="day", :month='month', :year='year')

</template>

<script>
import Day from './Day.vue'

export default {
  components: {
    Day
  },
  methods:  {
      nextMonth(){
          if (this.month == 11){
            this.year++
            this.month = 0
          }
            else {
              this.month++
          }
      },
      prevMonth(){
          if (this.month == 0){
              this.year--
              this.month = 11
          }
          else {
              this.month--
          }
      },
      nextYear(){
          this.year++
      },
      prevYear(){
          this.year--
      }
  },
  computed: {
    firstDay(){
      let date = new Date(this.year, this.month, 1)
      let firstDay = date.getDay()
      console.log({date, firstDay})
      return firstDay
    },
    days(){
      return  new Date(this.year, this.month, 0).getDate()
    },
    monthName(){
        var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return mL[this.month]
    }
  },
  data () {
    let current = new Date
    let year = current.getFullYear()
    let month = current.getMonth()
    return {
      DAYS_OF_WEEK:['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      month,
      year
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '../../../styles/colours'
#calendar
    color: accent1
    font-size:2em

.menu
    text-align: center
    color: accent4

.calendar-column
    float: left
    box-sizing: border-box
    width: (96/7)%
    height: 100px
    border-style:solid
    border-width: 1px
    border-color: accent4
.placeholder
    @extends .calendar-column
.day
    @extends .calendar-column
.weekday
    @extends .calendar-column
    height: 40px
    text-align: center
    font-weight:lighter
    font-size: .7em
    border-style:solid
    color:accent4
.date
    background-color: white
    float: right
    font-weight: bolder
    font-size: .666em

.legend
    margin-top: -70px

td
    border: none

.paidbox, .chargedbox
    height: 20px
    width: 20px

.paidbox
    background-color: accent1
.chargedbox
    background-color: accent2
.signcell
    max-width: 0px

table
    font-size: .7em

tr, td
    padding:0
    padding-left: 11px
.ch
    color: accent2

img
    height: 30px
</style>
