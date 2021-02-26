<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-6 px-5">
        <HelloWorld msg="Quick Retirement Calculator"/>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="col-sm-6 px-5">
        <h2 class="forminstructions">Please fill out the fields below and we'll give you a few illustrations on your retirement expectations.</h2>
        <retirement-form></retirement-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RetirementForm from '../components/RetirementForm.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    RetirementForm
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.forminstructions{
  font-size:16px !important;
  text-align:center;
}
</style>
