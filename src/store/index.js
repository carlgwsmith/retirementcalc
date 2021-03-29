import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    retireage: 0,
    lifespan: 0,
    retirementyears: 0,
    yearstilretire: 0,
    moneyatretirement: 0,
    moneymade:0,
    incomelongevity: 0,
    retirementincome: 0,
    moneysavedforretirement:0,
    retirementwithsavings: 0,
    retirementspending: 0,
    retirementsalary: 0,
  },
  mutations: {
    setState(state, payload){
      console.log (payload);
      state.retireage = payload.retireage;
      state.lifespan = payload.lifespan;
      state.retirementyears = payload.retirementyears;
      state.yearstilretire = payload.yearstilretire;
      state.moneyatretirement = payload.moneyatretirement;
      state.moneymade = payload.moneymade;
      state.incomelongevity = payload.incomelongevity;
      state.retirementincome = payload.retirementincome;
      state.moneysavedforretirement = payload.moneysavedforretirement;
      state.retirementwithsavings = payload.retirementwithsavings;
      state.retirementspending = payload.retirementspending;
      state.retirementsalary = payload.retirementsalary;
    },
    setRetireAge(state, payload){
      state.retireage = payload.retireage;
    },
    setLifeSpan(state, payload){
      state.lifespan = payload.lifespan;
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
    setMoneySavedForRetirement(state, payload){
      state.moneysavedforretirement = payload.moneysavedforretirement;
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
    getRetireAge (state){
      return state.retireage
    },
    getLifeSpan(state) {
      return state.lifespan
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
    getMoneySavedForRetirement(state){
      return state.moneysavedforretirement;
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
  }
})
