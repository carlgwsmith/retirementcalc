<template>
    <div class="retirementyears">
        <h4 v-if="retirementyears > 20" class="mediumtitle tracking-in-expand-fwd">Not Bad!</h4>
        <h4 v-if="retirementyears < 20" class="badtitle tracking-in-expand-fwd">You may have some work to do!</h4>
        <p class="toptext">Retiring at {{retireage}} will get you</p>
        <h1 class="rollertext">
            <Roller :text="retirementyears" :transition="1.45"></Roller>
        </h1>
        <p class="bottomtext">Years of Retirement!</p>
    </div>
</template>
<script>
import Roller from "vue-roller";

export default {
    data: () => ({
        retirementyears: 0,
        retireage: 0,
    }),
        components:{
            Roller
        },
        computed: {
    returnState () {
        return this.$store.getters.getState;
    }
    },
    mounted() {
        this.retirementyears = this.$store.getters.getRetirementYears;
        this.retireage = this.$store.getters.getRetireAge;
    }
}
</script>
<style scoped>
.roller .rollerBlock {
	margin: 20px;
    font-size:35px;
	}
div.roller{
    margin-left: auto !important;
    margin-right: auto !important;
}
    .retirementyears{
    padding: 4rem 0rem;
    color: rgb(21, 182, 120);
    text-align: center;
    }
    .rollertext{
        font-size:7em;
    }
    .toptext{
        margin-bottom:-3em;
        font-weight:600;
    }
    .bottomtext{
        margin-top:-3rem;
        font-weight: 600;
    }
    .mediumtitle{
        color:rgb(0, 176, 230);
    }
    .badtitle{
        color: rgb(228, 76, 76)
    }
    .tracking-in-expand-fwd {
	-webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    @-webkit-keyframes tracking-in-expand-fwd {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
                transform: translateZ(-700px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
    }
    }
    @keyframes tracking-in-expand-fwd {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
                transform: translateZ(-700px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
    }
    }
</style>