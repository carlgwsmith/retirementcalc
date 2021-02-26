<template>
     <b-form-group>
        <label :for="unique">{{ label }}</label>
        <b-form-input type="number" :id="unique" v-model="value" @input="$emit('updated', value)"></b-form-input>
     </b-form-group>
</template>

<script>
// import { EventBus } from './event-bus.js';

export default {
     props: {
            label: String,
            unique: String,
    },
    data () {
        return {
            value: ''
        }
    }
}
</script>
<style scoped>
.form-group{
    margin: 5px;
}
label {
    margin-right: 5px;
}
</style>