<template>
<div>
  <h1>Results Page</h1>
  <p>years til = {{ yearstilretire }}</p>
  good: {{ success }}
</div>
</template>

<script>
import EventBus from "../eventBus"

export default {
  Name:'Results',
data () {
  return {
    success:'',
    yearstilretire:0,
    returnedData:{
        retirementyears: 0,
        yearstilretire:0,
        moneyatretirement: 0,
        moneymade:0,
        incomelongevity: 0,
        retirementincome: 0,
        retirementwithsavings: 0,
        retirementspending: 0
    }
  }
},
created() {
    EventBus.$on('returnData', (payload) => {
      this.success = "success!"
      console.log(payload);
      this.yearstilretire = (payload);
    });
  }
}
</script>

<style>

</style>