<template>
<div class="px-4">
  <h1 class="headertext">Retirement Analysis</h1>
  <div class="row px-4" >
      <div class="col-sm-12 col-md-6">
        <number-roller></number-roller>
        <!-- retirement years: {{ retirementyears }} <br/>
      {{ yearstilretire }} years til retirement <br/>
      money made from now until retirement: {{moneymade}}<br/>
      money at retirement beginning: {{ moneyatretirement}}<br/>
      retirement income (for {{ retirementyears}} years of: {{retirementincome}} <br/>
      retirement total with no spending: {{retirementwithsavings}}<br/>
      money spent during retirement: {{retirementspending}}<br/>
      your money will last: {{ incomelongevity }} -->
      </div>
      <div class="col-sm-12 col-md-6">
        <longevity-results></longevity-results>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        Based on your spending of {{retirementspending / 12}} per month. You will need {{retirementspending * retirementyears}} to last the duration of your planned retirement.
      </div>
      <div class="col-sm-12 col-md-6">
        <needs-results/>
      </div>
    </div>
</div>
</template>

<script>
// import EventBus from "../eventBus"
import LongevityResults from '../components/LongevityResults.vue';
import NeedsResults from '../components/NeedsResults.vue';
import numberRoller from '../components/numberRoller.vue';

export default {
  Name:'Results',
  components: {
  LongevityResults,
  numberRoller,
  NeedsResults
  },
data: () => ({
    retirementyears: 0,
    yearstilretire:0,
    moneyatretirement: 0,
    moneymade:0,
    incomelongevity: 0,
    retirementincome: 0,
    retirementwithsavings: 0,
    retirementspending: 0
}),
mounted() {
    // EventBus.$on('returnData', (payload) => {
    //   this.success = "success!"
    //   console.log(payload);
    // });
    this.retirementyears = this.$store.getters.getRetirementYears;
    this.yearstilretire = this.$store.getters.getYearsTilRetire;
    this.moneyatretirement = this.$store.getters.getMoneyAtRetirement;
    this.moneymade = this.$store.getters.getMoneyMade;
    this.incomelongevity = this.$store.getters.getIncomeLongevity;
    this.retirementincome = this.$store.getters.getRetirementIncome;
    this.retirementwithsavings = this.$store.getters.getRetirementWithSavings;
    this.retirementspending = this.$store.getters.getRetirementSpending;
},
computed: {
  returnState () {
    return this.$store.getters.getState;
  }
}
}
</script>

<style>
.headertext{
  border-bottom:1px solid #c9c9c9;
}
.row {
  border-bottom:1px solid #c9c9c9;
  margin:20px 0;
  padding:15px 0;
}
</style>