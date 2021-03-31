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
    currentage:0,
    currentsavings: 0,
    retireage:0,
    lifespan:0,
    annualincome:0,
    retirementspending: 0,
    retirementwithsavings:0,
    retirementincome: 0,
    retirementyears: 0,
    retirementsalary: 0,
    retirementsavings:0,
    spending:0,
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
    //var currentsavings = this.currentsavings
    var annualincome = this.annualincome * 0.15;
    var currentage = this.currentage;
    var yearlySaving = [retirementsavings];
    var yearlySaving2 = [retirementsavings];


    
    for (var i = currentage; i <= retireage; i++) {
    ageArray.push(i);
    }
    for (var x = currentage; x <= retireage; x++) {
    yearlySaving.push(retirementsavings * yearlySaving.length );
    }

    for (var y = currentage; y < retireage; y++){
      yearlySaving2.push(annualincome * yearlySaving2.length);
    }
    console.log(yearlySaving2);

    datasets.push({ data: yearlySaving, label: 'Current Retirement Savings', borderColor: '#71eabb', fill: true, backgroundColor: "rgba(113,234,187,0.25)", pointBorderColor: "#2DE199" },
     {data: yearlySaving2, borderColor: '#19afff', label: 'Optimal Retirement Savings', fill: false})


    chartData.labels =  ageArray
    chartData.datasets = datasets
    return chartData
  },
  getAddedSavingsChartOptions: function () {
      let opts = this.options
      return opts
    },
},
mounted() {

    this.currentage = this.$store.getters.getCurrentAge;
    this.currentsavings = this.$store.getters.getCurrentSavings;
    this.retireage = this.$store.getters.getRetireAge;
    this.lifespan = this.$store.getters.getLifeSpan;
    this.annualincome = this.$store.getters.getAnnualIncome;
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