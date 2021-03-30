<template>
  <div>
     <!-- AGE: {{retireage}}
     life: {{lifespan}}
     spend: {{retirementspending}}
     saved: {{retirementwithsavings}}
     retirementincome: {{retirementincome}}
     retirementsalary: {{retirementsalary}}
     years: {{retirementyears}} -->
      <additional-savings :chart-data="getAddedSavingsChartData" :options="getAddedSavingsChartOptions" :width="500" :height="400" />
  </div>
</template>

<script>
import AdditionalSavings from './charts/AdditionalSavings.vue';
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
    retirementsavings:0,
    spending:0,
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
          text: "The Potential of More Savings",
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
        AdditionalSavings
    },
      computed: {
        AdditionalSavingseturnState () {
    return this.$store.getters.getState;
  },
  getAddedSavingsChartData: function () {
    let chartData = {};
    let datasets = [];
    let ageArray =[];
    var retireage = this.retireage;
    var retirementsavings = this.retirementsavings;
    var deadage = this.lifespan;
    var rspend = this.retirementspending / this.retirementyears;
    var yearlysavingamount = 0;
    var rsalary = this.retirementsalary * this.retirementyears;
    var rsaving = this.retirementwithsavings + rsalary;
    
    for (var i = retireage; i <= deadage; i++) {
    ageArray.push(i);
    }

    // var ageArray = Array.apply(null, Array(this.retirementyears)).map(function (x, i) { return i; })

    var yearlySpending = [rsaving];
    var yearlySpending2 = [rsaving]
    var bgColors = []

    for (var x = retireage; x < deadage; x++){
      rsaving = rsaving - rspend;
      yearlysavingamount = (rsaving - rspend);
      rsaving = yearlysavingamount ;
      yearlySpending.push(yearlysavingamount + retirementsavings );
    }

    for (var y = retireage; y < deadage; y++){
      rsaving = rsaving - rspend;
      yearlysavingamount = rsaving - rspend;
      rsaving = yearlysavingamount ;
      yearlySpending2.push(yearlysavingamount);
    }

    for (var u = 0; u < yearlySpending.length; u++){
      if (yearlySpending[u] <= 0){
        bgColors.push('#ea7171')
      }
      else {
        bgColors.push('#71eabb')
      }
    }

    console.log(this.retirementsavings);
    datasets.push({ data: yearlySpending, label: 'Retirement Value Over Time' }, {data: yearlySpending2, label: 'Retirement Value Over Time 2'})

//console.log(retirementYearly);

    chartData.labels =  ageArray
    console.log(ageArray);
    chartData.datasets = datasets
    return chartData
  },
  getAddedSavingsChartOptions: function () {
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
    this.retirementsavings = this.$store.getters.getRetirementSavings;
    this.spending = this.$store.getters.getNonRetirementSpending;
},
}
</script>

<style>

</style>