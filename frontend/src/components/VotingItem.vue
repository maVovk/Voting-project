<template>
    <div class="voting">
        <div @click="$router.push(`/voting/${ voting.id }`)"><b>{{ voting.title }}</b></div>

        <div v-show="isCreator === true">
            <Icon class="analytics" :icon="icons.analyticsIcon" @click="$router.push(`/results/${voting.id}`)"/>
            <Icon class="analytics" :icon="icons.trashIcon" @click="deleteVoting"/>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import analyticsIcon from '@iconify-icons/uil/analytics'; 
import trashIcon from '@iconify-icons/bi/trash';

export default {
    components:{
        Icon
    },
    props:{
        voting:{
            type: Object,
            require: true,
        },
        isCreator:{
            type: Boolean,
            require: true,
        },
    },
    data(){
        return{
            icons:{
                analyticsIcon, trashIcon
            }
        }
    },
    methods:{
        deleteVoting(){
            this.$emit('deleteVoting', this.voting.id);
        }
    },
    mounted(){
        this.voting.title = this.voting.title.toUpperCase();
        // console.log(this.voting.id);
    }
}
</script>

<style>
.voting{
    margin: 15px 5% 0px 5%;
    padding: 25px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    background: #c5c7d4;
    border: 0px;
    border-radius: 5px;
}

.voting:hover {
    background: #dcdee6;
    color: black;
}

.voting div b:hover {
    font-weight: bold;
}

.analytics{
    width: 40px;
    height: 35px;
    color: black;
    margin-left: 15px;
}

</style>