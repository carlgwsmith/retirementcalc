
<script>
// import { Bar, mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins

// export default {
//   extends: Bar,
// data: () => ({
//     retirementyears: 0,
//     yearstilretire:0,
//     moneyatretirement: 0,
//     moneymade:0,
//     incomelongevity: 0,
//     retirementincome: 0,
//     retirementwithsavings: 0,
//     retirementspending: 0,
//     ageArray: [],
// }),
//   computed: {
//     returnState () {
//     return this.$store.getters.getState;
//   },
//   returnLabels () {
//     var ageArray = [];
//   var retireage = this.retireage
//   var deadage = this.lifespan;
//   for(var i= retireage; i <= deadage; i++){
//     ageArray.push([i]);
//   }
//    console.log('Hello' + this.ageArray);
//   return ageArray;
//   }
// }
// };


import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}
</script>

// 