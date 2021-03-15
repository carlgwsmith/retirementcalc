<template>
  <div>
     AGE: {{retireage}}
     life: {{lifespan}}
     spend: {{retirementspending}}
     saved: {{retirementwithsavings}}
     retirementincome: {{retirementincome}}
     years: {{retirementyears}}
      <longevity-chart :chart-data="getLongevityChartData"/>
  </div>
</template>

<script>
import LongevityChart from "../components/charts/LongevityChart"
export default {
    Name: 'Longevity Results',
    data: () => ({
    retireage:0,
    lifespan:0,
    retirementspending: 0,
    retirementwithsavings:0,
    retirementincome: 0,
    retirementyears: 0,
    ageArray: [],
    retirementYearly: [],
}),
    components: {
        LongevityChart
    },
      computed: {
          returnState () {
    return this.$store.getters.getState;
  },
  getLongevityChartData: function () {
    let chartData = {};
    let datasets = [];
    
    var ageArray = [];
    var retireage = this.retireage;
    var deadage = this.lifespan;
    for(var i= retireage; i <= deadage; i++){
    ageArray.push([i]);
    console.log(ageArray);
    }
    
    

    // var spending = this.retirementspending;
    // var rsavings = this.retirementwithsavings;
    // var rincome = this.retirementincome;
    // var ryears = this.retirementyears;

    var rspend = this.retirementspending;
    var rsaving = this.retirementwithsavings;
    var yearlyspending = rsaving;
    var retirementYearly = [];

    for(var x = retireage; x < deadage; x++ ){
        rsaving = rsaving - rspend;
    yearlyspending = (rsaving - rspend);
    retirementYearly.push(yearlyspending);
    }

// console.log(retirementYearly);

    chartData.labels = ageArray
    chartData.datasets = datasets


    return chartData
  }
},
mounted() {
    // EventBus.$on('returnData', (payload) => {
    //   this.success = "success!"
    //   console.log(payload);
    // });
    this.retireage = this.$store.getters.getRetireAge;
    this.lifespan = this.$store.getters.getLifeSpan;
    this.retirementwithsavings = this.$store.getters.getRetirementWithSavings;
    this.retirementincome = this.$store.getters.getRetirementIncome;
    this.retirementspending = this.$store.getters.getRetirementSpending;
    this.retirementyears = this.$store.getters.getRetirementYears;
},
}
</script>

<style>

</style>