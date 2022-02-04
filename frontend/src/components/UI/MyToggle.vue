<template>
  <div class="toggle__container">
      <p id='toggle__left'> {{ leftLabel }}</p>
      <input type="checkbox" class="toggle" checked @click="change_status">
      <p id='toggle__right'>{{ rightLabel }}</p>
  </div>
</template>

<script>
export default {
    props:{
        modelValue:{
            type: String,
            require: true
        },
        leftLabel: {
            type: String,
            require: false,
            default: ''
        },
        rightLabel: {
            type: String,
            require: false,
            default: ''
        }
    },
    methods:{
        change_status(event){
            document.querySelector('#toggle__left').classList.toggle('bold');
            document.querySelector('#toggle__right').classList.toggle('bold');

            // console.log(this.)
            this.$emit('update:modelValue', this.modelValue == 'left' ? 'right' : 'left');
        }
    },
    mounted(){
        if(!document.querySelector('.toggle').checked){
            document.querySelector('#toggle__left').classList.add('bold');
            this.$emit('update:modelValue', 'left');
        }
        else{
            document.querySelector('#toggle__right').classList.add('bold');
            this.$emit('update:modelValue', 'right');
        }
    }
}
</script>

<style>
.toggle__container{
    justify-content: space-between;
    vertical-align: middle;
}

.toggle__container p{
    font-size: 30px;
    display: inline-block;
    vertical-align: middle;
}

input[type="checkbox"]:focus{
    outline: 0
}

.bold{
    font-weight: bold;
}

.toggle{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    height: 32px;
    width: 70px;
    border-radius: 16px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin: 0;
    border: 2px solid #474755;
    background: linear-gradient(180deg, #c4c4c4 0%, #bbbbbb 100%);
    transition: all .2s ease;
}

.toggle:after{
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44,44,44,.2);
    transition: all .25s cubic-bezier(.5,.1,.75,1.35);
}

.toggle:checked:after{
      transform: translatex(38px)
}
</style>