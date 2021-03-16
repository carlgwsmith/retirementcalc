<template>
  <div>
     <!-- AGE: {{retireage}}
     life: {{lifespan}}
     spend: {{retirementspending}}
     saved: {{retirementwithsavings}}
     retirementincome: {{retirementincome}}
     retirementsalary: {{retirementsalary}}
     years: {{retirementyears}} -->
      <longevity-chart :chart-data="getLongevityChartData" :options="getSSBenefitsChartOptions" :width="500" :height="400" />
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
    retirementsalary: 0,
    // ageArray: [],
    //retirementYearly: [],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltipenabled: false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 8,
            fontSize: 14
          }
        },
        title: {
          display: true,
          text: "Retirement Portfolio Value Over Time with Spending ",
          fontSize: "16",
        },
        pointLabels: {
          display: false
        },
        scales: {
          xAxes: [{
            id: 'default',
            ticks: {
              min: 0
            }
          }],
          yAxes: {
            
          }
        }
      },
    
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
    var retireage = this.retireage;
    var deadage = this.lifespan;
    var rspend = this.retirementspending / this.retirementyears;
    var yearlyspendingamount = 0;
    var rsalary = this.retirementsalary * this.retirementyears;
    var rsaving = this.retirementwithsavings + rsalary;
    var ageArray = Array.apply(null, Array(this.retirementyears)).map(function (x, i) { return i; })

    var yearlySpending = [rsaving];
    var bgColors = []

    for (var x = retireage; x < deadage; x++){
      rsaving = rsaving - rspend;
      yearlyspendingamount = rsaving - rspend;
      rsaving = yearlyspendingamount ;
      yearlySpending.push(yearlyspendingamount );

    }

    for (var u = 0; u < yearlySpending.length; u++){
      if (yearlySpending[u] <= 0){
        bgColors.push('#ea7171')
      }
      else {
        bgColors.push('#71eabb')
      }
    }

    console.log(bgColors);
    datasets.push({ data: yearlySpending, backgroundColor: bgColors, label: 'Retirement Value Over Time' })

//console.log(retirementYearly);

    chartData.labels =  ageArray
    chartData.datasets = datasets
    return chartData
  },
  getSSBenefitsChartOptions: function () {
      let opts = this.options
      return opts
    },
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
    this.retirementsalary = this.$store.getters.getRetirementSalary;
},
}
</script>

<style>

</style>