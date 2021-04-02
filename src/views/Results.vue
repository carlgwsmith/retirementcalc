<template>
<div class="px-4 fade-in">
  <div class="row">
    <div class="col-sm-6 text-left">
      <h1 class="headertext slide-in-left">Retirement Analysis</h1>
    </div>
    <div class="col-sm-6 text-right">
      <h6 class="retiredate">Target Retirement Date: {{ new Date().getFullYear() + yearstilretire}}</h6>
    </div>
  </div>
  <div class="row px-4">
      <div class="col-sm-12 col-md-6 content-middle">
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
        <longevity-results class="chartcontainer"></longevity-results>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 content-middle">
       <p class="needs-text">Based on your spending of <strong>${{formatCurrency(retirementspending / retirementyears)}}</strong> per year. You will need <strong>${{formatCurrency(retirementspending)}}</strong> to last the duration of your planned retirement</p>
      </div>
      <div class="col-sm-12 col-md-6">
        <needs-results class="chartcontainer"/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 content-middle">
        <p class="needs-text">You are off to a decent chart with your savings of <strong>${{formatCurrency(currentsavings)}}</strong> per month. Ideally, the optimal retirement savings is 15% of your current income. For you 15% of ${{formatCurrency(annualincome)}} comes out to <strong>${{formatCurrency(annualincome * .15)}}</strong> a year.</p>
      </div>
      <div class="col-sm-12 col-md-6">
        <added-savings-results class="chartcontainer"></added-savings-results>
      </div>
    </div>
</div>
</template>

<script>
// import EventBus from "../eventBus"
import LongevityResults from '../components/LongevityResults.vue';
import NeedsResults from '../components/NeedsResults.vue';
import numberRoller from '../components/numberRoller.vue';
import AddedSavingsResults from '../components/AddedSavingsResults.vue';

export default {
  Name:'Results',
  components: {
  LongevityResults,
  numberRoller,
  NeedsResults,
  AddedSavingsResults
  },
data: () => ({
    retirementyears: 0,
    yearstilretire:0,
    moneyatretirement: 0,
    moneymade:0,
    incomelongevity: 0,
    retirementincome: 0,
    retirementwithsavings: 0,
    retirementspending: 0,
    retirementsavings:0,
    currentage: 0,
    currentsavings: 0,
    annualincome:0

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
    this.retirementsavings = this.$store.getters.getRetirementSavings;
    this.retirementspending = this.$store.getters.getRetirementSpending;
    this.currentage = this.$store.getters.getCurrentAge;
    this.currentsavings = this.$store.getters.getCurrentSavings;
    this.annualincome = this.$store.getters.getAnnualIncome;

},
computed: {
  returnState () {
    return this.$store.getters.getState;
  }
},
methods: {
    formatCurrency(value) {
        let val = (value/1).toFixed(0).replace('.', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}
}
</script>

<style scoped>
.chartcontainer{
    border: 6px solid rgb(248, 248, 248);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 4px 8px #e8e8e86e;
    background: white;
}
.content-middle{
    margin-top: auto !important;
    margin-bottom: auto !important;
}
.headertext{
    font-family: 'Work Sans', sans-serif;
    font-size: 3em;
    font-weight: 800;
}
.row {
  border-bottom:1px solid #c9c9c9;
  margin:20px 0;
  padding:15px 0;
}
.needs-text{
  font-size: 1.8em;
  padding: 20px;
}
.retiredate{
  color:#848484;
  font-family: 'Brygada 1918', serif;
  font-weight: 600;
  font-size:1.5em;
  padding-top: 10px;
}
</style>