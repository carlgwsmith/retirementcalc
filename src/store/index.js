import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentage: 0,
    retireage: 0,
    lifespan: 0,
    annualincome: 0,
    currentsavings: 0,
    retirementyears: 0,
    yearstilretire: 0,
    moneyatretirement: 0,
    moneymade:0,
    incomelongevity: 0,
    retirementincome: 0,
    retirementsavings:0,
    retirementwithsavings: 0,
    retirementspending: 0,
    retirementsalary: 0,
    nonrannualspending:0,
  },
  mutations: {
    setState(state, payload){
      state.currentage = payload.currentage;
      state.retireage = payload.retireage;
      state.currentsavings = payload.currentsavings;
      state.lifespan = payload.lifespan;
      state.annualincome = payload.annualincome;
      state.retirementyears = payload.retirementyears;
      state.yearstilretire = payload.yearstilretire;
      state.moneyatretirement = payload.moneyatretirement;
      state.moneymade = payload.moneymade;
      state.incomelongevity = payload.incomelongevity;
      state.retirementincome = payload.retirementincome;
      state.retirementsavings = payload.retirementsavings;
      state.retirementwithsavings = payload.retirementwithsavings;
      state.retirementspending = payload.retirementspending;
      state.retirementsalary = payload.retirementsalary;
      state.nonrannualspending = payload.nonrannualspending;
    }
    ,
    setCurrentAge(state, payload){
      state.currentage = payload.currenteage;
    },
    setRetireAge(state, payload){
      state.retireage = payload.retireage;
    },
    setLifeSpan(state, payload){
      state.lifespan = payload.lifespan;
    },
    setAnnualIncome(state, payload){
      state.annualincome = payload.annualincome;
    },
    setCurrentSavings(state, payload){
      state.currentsavings = payload.currentsavings
    },
    setRetirementYears(state, payload){
      state.retirementyears = payload.retirementyears;
    },
    setYearsTilRetire(state, payload){
      state.yearstilretire = payload.yearstilretire;
    },
    setMoneyAtRetirement(state, payload){
      state.moneyatretirement = payload.moneyatretirement;
    },
    setMoneyMade(state, payload){
      state.moneymade = payload.moneymade;
    },
    setIncomeLongevity(state, payload){
      state.incomelongevity = payload.incomelongevity;
    },
    setRetirementSavings(state, payload){
      state.retirementsavings = payload.retirementsavings;
    },
    setRetirementIncome(state, payload){
      state.retirementincome = payload.retirementincome;
    },
    setRetirementWithSavings(state, payload){
      state.retirementwithsavings = payload.retirementwithsavings;
    },
    setRetirementSpending(state, payload){
      state.retirementspending = payload.retirementspending;
    },
    setRetirementSalary(state, payload){
      state.retirementsalary = payload.retirementsalary;
    },
    setNonRetirementSpending (state, payload){
      state.nonrannualspending = payload.nonrannualspending;
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getState (state){
      return state
    },
    getCurrentAge (state){
      return state.currentage
    },
    getRetireAge (state){
      return state.retireage
    },
    getCurrentSavings (state){
      return state.currentsavings
    },
    getLifeSpan(state) {
      return state.lifespan
    },
    getAnnualIncome (state){
      return state.annualincome
    },
    getRetirementYears (state){
      return state.retirementyears
    },
    getYearsTilRetire(state){
      return state.yearstilretire
    },
    getMoneyAtRetirement(state){
      return state.moneyatretirement
    },
    getMoneyMade(state){
      return state.moneymade
    },
    getIncomeLongevity(state){
      return state.incomelongevity
    },
    getRetirementSavings(state){
      return state.retirementsavings;
    },
    getRetirementIncome(state){
      return state.retirementincome
    },
    getRetirementWithSavings(state){
      return state.retirementwithsavings
    },
    getRetirementSpending(state){
      return state.retirementspending
    },
    getRetirementSalary(state){
      return state.retirementsalary
    },
    getNonRetirementSpending(state){
      return state.nonrannualspending
    }
  }
})
