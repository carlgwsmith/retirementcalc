<template>
    <b-form-group>
        <label :for="unique">{{ label }}</label>
        <currency-input class="form-control" currency="USD" v-model="value" @input="$emit('updated', value)" :placeholder="placeholder" :id="unique"/>
    </b-form-group>
</template>

<script>
// import { EventBus } from './event-bus.js';

export default {
     props: {
            label: String,
            unique: String,
            placeholder: Number,
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