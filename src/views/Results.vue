<template>
<div>
  <h1>Results Page</h1>
        retirement years: {{ retirementyears }} <br/>
        {{ yearstilretire }} years til retirement <br/>
        money made from now until retirement: {{moneymade}}<br/>
        money at retirement beginning: {{ moneyatretirement}}<br/>
        retirement income (for {{ retirementyears}} years of: {{retirementincome}} <br/>
        retirement total with no spending: {{retirementwithsavings}}<br/>
        money spent during retirement: {{retirementspending}}<br/>
        your money will last: {{ incomelongevity }}
        <longevity-results></longevity-results>
</div>
</template>

<script>
// import EventBus from "../eventBus"
import LongevityResults from '../components/LongevityResults.vue';

export default {
  Name:'Results',
  components: {
  LongevityResults
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

</style>