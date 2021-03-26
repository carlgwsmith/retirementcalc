<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
        <Banner msg="Quick Retirement Calculator"/>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-xs-12 col-sm-4 fade-in">
        Advertising Content
      </div>
      <div class="col-xs-12 col-sm-8 fade-in">
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
  padding-left: 20px;
}
</style>
