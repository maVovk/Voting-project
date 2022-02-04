<template>
    <div class="textfield">
        <input :id="`textfield__input__${element.id}`" placeholder="Вариант" @change="inputListener">
        <div :id="`textfield__elem__${element.id}`" class="hidden textfield-value">
            <p></p>
            <Icon @click="deleteElement" :icon="icons.trashIcon" style="width: 40px; height: 40px"/>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import trashIcon from '@iconify-icons/bi/trash';


export default {
    components:{
        Icon, 
    },
    props:{
        element:{
            type: Object,
            require: true
        }
    },
    data(){
        return {
            icons: {
                trashIcon
            }
        }
    },
    methods:{
        inputListener(event){
            document.querySelector(`#textfield__input__${this.element.id}`).classList.add('hidden');
            document.querySelector(`#textfield__elem__${this.element.id}`).classList.add('textfield__visible');
            document.querySelector(`#textfield__elem__${this.element.id}`).classList.remove('hidden');

            document.querySelector(`#textfield__elem__${this.element.id} p`).innerHTML = event.target.value;
            this.element.value = event.target.value;
            event.target.value = '';
            this.$emit('save');
        },
        deleteElement(){
            this.$emit('delete', this.element.id);
        }
    }
}
</script>

<style>
.textfield{
    background-color: #c4c4c4;
    padding: 1%;
    border-radius: 5px;
    width: 90%;
    margin-top: 15px;
    /* vertical-align: middle; */
}

.textfield-value{
    font-weight: bold;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
}

.textfield__visible p{
    margin: auto 0px;
}

.textfield__visible Icon{
    justify-self: flex-end;
}

/* .textfield__visible p, .textfield__visible Icon{
    display: inline-block;
    /* vertical-align: middle;
} */

.hidden{
    display: none;
}
</style>