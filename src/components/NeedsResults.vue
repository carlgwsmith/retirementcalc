<template>
<div>
    <needs-chart  :chart-data="getNeedsChartData" :options="getNeedsChartOptions" :width="500" :height="400" />
</div>
</template>

<script>
import NeedsChart from './charts/NeedsChart.vue';
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
    spending:0,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltipenabled: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
              }
            }
        },
        title: {
          display: true,
          text: "How Much Money Do You Need to Retire?",
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
          yAxes: [{
            ticks:{
            beginAtZero: true,
            min:0
            }
          }]
        }
      },
    
}),
    components: {
        NeedsChart
    },
      computed: {
          returnState () {
    return this.$store.getters.getState;
  },
  getNeedsChartData: function () {
    let chartData = {};
    let datasets = [];

    var spending = this.retirementyears * this.spending;
    var retiresavings = this.retirementwithsavings - spending;
    var rsalary = this.retirementsalary * this.retirementyears;

    var haveAmount = retiresavings + rsalary;
    var needAmount = this.retirementspending


    var yearlySpending = [haveAmount, needAmount];
    var bgColors = ['#71eabb', '#ea7171']
    
    datasets.push({ data: yearlySpending, backgroundColor: bgColors, label: '' })


    chartData.labels =  ['How much you have', 'How much you need']
    chartData.datasets = datasets
    return chartData
  },
  getNeedsChartOptions: function () {
      let opts = this.options
      return opts
    },
},
mounted() {
    this.retireage = this.$store.getters.getRetireAge;
    this.lifespan = this.$store.getters.getLifeSpan;
    this.retirementwithsavings = this.$store.getters.getRetirementWithSavings;
    this.retirementincome = this.$store.getters.getRetirementIncome;
    this.retirementspending = this.$store.getters.getRetirementSpending;
    this.retirementyears = this.$store.getters.getRetirementYears;
    this.retirementsalary = this.$store.getters.getRetirementSalary;
    this.spending = this.$store.getters.getNonRetirementSpending;
},
}
</script>

<style>

</style>