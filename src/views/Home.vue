<template>
  <div class="home">
    <div class="row pad30">
      <div class="col-sm-12">
        <Banner msg="Quick Retirement Calculator"/>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-xs-12 col-sm-8 fade-in">
        <retirement-form></retirement-form>
      </div>
      <div class="col-xs-12 col-sm-4 fade-in">
        <div class="advert">
          <img src="../assets/retirees.png" width="100%">
        </div>
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
.pad30{
  padding-top:40px !important;
}
/* .advert{
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: 6px solid #0de4b5;
  border-radius: 20px;
  padding: 20px;
} */
.advert > img {
      margin-top: 50px !important;
}
</style>
