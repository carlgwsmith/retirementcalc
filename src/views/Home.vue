<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12 col-md-12 px-5">
        <Banner msg="Quick Retirement Calculator"/>
      </div>
      <div class="col-sm-12 col-md-12 px-5">
        <h2 class="forminstructions">Please fill out the fields below and we'll give you a few illustrations on your retirement expectations.</h2>
        <retirement-form></retirement-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/banner.vue'
import RetirementForm from '../components/RetirementForm.vue'

export default {
  name: 'Home',
  components: {
    Banner,
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
}
</style>
