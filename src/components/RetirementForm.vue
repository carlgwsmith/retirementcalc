<template>
  <div class="formContainer">
     <form method="post" action="#">
       <form-wizard color="#0de4b5" @on-complete="emitData">
         <h5 slot="title">Fill out a few simple questions and we'll give you a rundown of your retirement expectations.</h5>   
        <tab-content title="Personal details">
          <input-field unique="currentage" label="Current Age" v-on:updated="form.currentage = $event" placeholder="35"></input-field>
          <input-field unique="retireage" label="Retirement Age" v-on:updated="form.retireage = $event" placeholder="64"></input-field>
          <input-field unique="lifespan" label="Expected Lifespan" v-on:updated="form.lifespan = $event" placeholder="84"></input-field>
        </tab-content>
        <tab-content title="Additional Info">
          <currency-field unique="totalsavings" label="Current Total Savings" v-on:updated="form.totalsavings = $event" placeholder="200000"></currency-field>
          <currency-field unique="retirementsavings" label="Annual Retirement Savings" v-on:updated="form.retirementsavings = $event" placeholder="125000"></currency-field>
          <currency-field unique="annualincome" label="Annual Household Income" v-on:updated="form.annualincome = $event" placeholder="125000"></currency-field>
        </tab-content>
        <tab-content title="Last step">
          <currency-field unique="nonrannualspending" label="What is your expected annual spending?" v-on:updated="form.nonrannualspending = $event" placeholder="20000"></currency-field>
          <currency-field unique="annualspending" label="What is your expected annual spending in retirement?" v-on:updated="form.annualspending = $event" placeholder="20000"></currency-field>
          <currency-field unique="retirementsalary" label="Expected Annual Income in Retirement" v-on:updated="form.retirementsalary = $event" placeholder="15000"></currency-field>
        </tab-content>
        </form-wizard>
            <!-- <div class="input-wrapper">
                <b-button block @click.prevent="emitData">Calculate</b-button>
            </div> -->
      </form>
  </div>
</template>

<script>
import InputField from '../components/InputField.vue'
import CurrencyField from '../components/CurrencyField.vue'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import EventBus from '../eventBus'

export default {
  components: {
    InputField,
    FormWizard,
    TabContent,
    CurrencyField
  },
  data() {
    return {
        form: {
          currentage:0,
          retireage: 0,
          annualincome: 0,
          yearlyinterest: 0,
          totalsavings:0,
          retirementsavings:0,
          annualspending: 0,
          nonrannualspending:0,
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
        retirementspending: 0,
        nonrannualspending:0,
        retirementsavings:0,
        }
    }
  },
watch: {
    form: {
      handler: function(newValue) {
        this.returnedData.retirementyears = parseInt(newValue.lifespan) - parseInt(newValue.retireage);
        this.returnedData.yearstilretire = parseInt(newValue.retireage) - parseInt(newValue.currentage);
        this.returnedData.moneymade = (parseInt(newValue.annualincome) - parseInt(newValue.nonrannualspending)) * parseInt(this.returnedData.yearstilretire);
        this.returnedData.moneyatretirement = parseInt(this.returnedData.moneymade) + parseInt(newValue.totalsavings);
        this.returnedData.retirementincome = parseInt(newValue.retirementsalary) * parseInt(this.returnedData.retirementyears);
        this.returnedData.retirementsavings = parseInt(newValue.retirementsavings);
        this.returnedData.nonrannualspending = parseInt(newValue.nonrannualspending);
        this.returnedData.retirementwithsavings = parseInt(this.returnedData.moneyatretirement) + parseInt(newValue.retirementsalary);
        //this.returnedData.retirementspending= parseInt(this.returnedData.retirementwithsavings) - (parseInt(newValue.annualspending) * parseInt(this.returnedData.retirementyears));
        this.returnedData.retirementspending= parseInt(newValue.annualspending) * parseInt(this.returnedData.retirementyears);
        this.returnedData.incomelongevity = parseInt(this.returnedData.retirementwithsavings) / parseInt(newValue.annualspending); 
      },
      deep: true
    }
  },
  methods: {
    emitData () {
      const payload = {
        retireage: this.form.retireage,
        lifespan: this.form.lifespan,
        retirementyears: this.returnedData.retirementyears,
        yearstilretire: this.returnedData.yearstilretire,
        moneymade: this.returnedData.moneymade,
        moneyatretirement: this.returnedData.moneyatretirement,
        retirementincome: this.returnedData.retirementincome,
        retirementwithsavings: this.returnedData.retirementwithsavings,
        retirementsavings: this.returnedData.retirementsavings,
        incomelongevity: this.returnedData.incomelongevity,
        retirementspending: this.returnedData.retirementspending,
        retirementsalary: this.form.retirementsalary,
        nonrannualspending: this.form.nonrannualspending,
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
  border-radius: 20px;
  box-shadow: 5px 4px 8px rgb(97 97 97 / 43%);
  background: white;
}
.vue-form-wizard .wizard-icon-circle {
    border: 5px solid #0de4b5;
    background-color:#0de4b5;
}
.finish-button{
  background-color:#43A047 !important;
  border-color: #43A047 !important;
}
</style>