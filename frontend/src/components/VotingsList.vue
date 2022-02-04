<template>
    <div v-if="votings.length > 0">
        <transition-group name="user-list">
            <voting-item
            v-for="voting in votings"
            :key="voting.id"
            :voting="voting"
            :isCreator="isCreator"
            @deleteVoting="deleteVoting"
            />
        </transition-group>
    </div>
    <h2 v-else>
        Тут ничего нет
    </h2>
</template>

<script>
import VotingItem from '@/components/VotingItem.vue'

export default {
    components:{
        VotingItem
    },
    props:{
        votings:{
            type: Array,
            require: true,
        },
        isCreator:{
            type: Boolean, 
            require: false, 
            default: false,
        }
    },
    methods:{
        deleteVoting(id){
            this.$emit('deleteVoting', id);
        }
    }
}
</script>

<style>
    .user-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .user-list-enter-active,
    .user-list-leave-active {
        transition: all 0.45s ease;
    }
    .user-list-enter-from,
    .user-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .user-list-move{
        transition: transform 0.8s ease;
    }
</style>