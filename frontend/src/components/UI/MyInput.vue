<template>
  <input :value="modelValue" @input="updateValue" class="input">
</template>

<script>
export default {
    name: 'my-input',

    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateValue(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style>
.input{
    width: 100%;
    padding: 10px 15px;
    margin-top: 15px;
    border: none;

    font-weight: bold;
    font-size: 28px;
    color: #828282
}
</style>