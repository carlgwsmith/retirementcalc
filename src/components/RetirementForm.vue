<template>
  <div class="formContainer">
     <form method="post" action="#">
            <input-field unique="currentage" label="Current Age" v-on:updated="form.currentage = $event"></input-field>
            <input-field unique="retireage" label="Retirement Age" v-on:updated="form.retireage = $event"></input-field>
            <input-field unique="totalsavings" label="Current Total Savings" v-on:updated="form.totalsavings = $event"></input-field>
            <input-field unique="annualincome" label="Annual Household Income" v-on:updated="form.annualincome = $event"></input-field>
            <input-field unique="yearlyinterest" label="Expected Yearly Interest" v-on:updated="form.yearlyinterest = $event"></input-field>
            <input-field unique="annualspending" label="What is your expected annual spending in retirement?" v-on:updated="form.annualspending = $event"></input-field>
            <input-field unique="retirementsalary" label="Expected Annual Income in Retirement" v-on:updated="form.retirementsalary = $event"></input-field>
            <input-field unique="lifespan" label="Expected Lifespan" v-on:updated="form.lifespan = $event"></input-field>
            <div class="input-wrapper">
                <b-button block @click.prevent="emitData">Calculate</b-button>
            </div>
        </form>
        
        retirement years: {{ returnedData.retirementyears }} <br/>
        {{ returnedData.yearstilretire }} years til retirement <br/>
        money made from now until retirement: {{returnedData.moneymade}}<br/>
        money at retirement beginning: {{ returnedData.moneyatretirement}}<br/>
        retirement income (for {{ returnedData.retirementyears}} years of {{form.retirementsalary}}): {{returnedData.retirementincome}} <br/>
        retirement total with no spending: {{returnedData.retirementwithsavings}}<br/>
        money spent during retirement: {{returnedData.retirementspending}}<br/>
        your money will last: {{ returnedData.incomelongevity }}

  </div>
</template>

<script>
import InputField from '../components/InputField.vue'
// import EventBus from '../eventBus'

export default {
  components: {
    InputField
  },
  data() {
    return {
        form: {
          currentage:0,
          retireage: 0,
          annualincome: 0,
          yearlyinterest: 0,
          totalsavings:0,
          annualspending: 0,
          retirementsalary: 0,
          lifespan: 0
        },
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
watch: {
    form: {
      handler: function(newValue) {
        this.returnedData.retirementyears = parseInt(newValue.lifespan) - parseInt(newValue.retireage);
        this.returnedData.yearstilretire = parseInt(newValue.retireage) - parseInt(newValue.currentage);
        this.returnedData.moneymade = parseInt(newValue.annualincome) * parseInt(this.returnedData.yearstilretire);
        this.returnedData.moneyatretirement = parseInt(this.returnedData.moneymade) + parseInt(newValue.totalsavings);
        this.returnedData.retirementincome = parseInt(newValue.retirementsalary) * parseInt(this.returnedData.retirementyears);
        this.returnedData.retirementwithsavings = parseInt(this.returnedData.moneyatretirement) + parseInt(newValue.retirementsalary);
        this.returnedData.retirementspending= parseInt(this.returnedData.retirementwithsavings) - (parseInt(newValue.annualspending) * parseInt(this.returnedData.retirementyears));
        this.returnedData.incomelongevity = parseInt(this.returnedData.retirementwithsavings) / parseInt(newValue.annualspending); 
      },
      deep: true
    }
  },
  methods: {
    emitData () {
      const payload = {
        retirementyears: this.returnedData.retirementyears,
        yearstilretire: this.returnedData.yearstilretire,
        moneymade: this.returnedData.moneymade,
        moneyatretirement: this.returnedData.moneyatretirement,
        retirementincome: this.returnedData.retirementincome,
        retirementwithsavings: this.returnedData.retirementwithsavings,
        incomelongevity: this.returnedData.incomelongevity,
        retirementspending: this.returnedData.retirementspending
      }

      // EventBus.$emit("returnData", this.returnedData.yearstilretire);
      // console.log('emit!');
      this.$store.commit('setState', payload);
      this.$router.push('/Results');
    }
  }
}
</script>

<style scoped>
.formContainer{
border: 6px solid rgb(230, 230, 230);
padding: 20px;
border-radius: 15px;
box-shadow: 2px 2px 2px rgb(240, 240, 240);
}
</style>