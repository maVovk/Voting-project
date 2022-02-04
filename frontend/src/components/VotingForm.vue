<template>
  <form @submit.prevent>
            <h4>Создание голосования</h4>
            <my-input
                v-model="voting.title"
                type="text"
                placeholder="Описание"
            />
            <my-input
                v-model="voting.body"
                type="text"
                placeholder="Название"
            />
            <my-button 
                class="button"  
                @click="createVoting">
                Добавить
            </my-button>
        </form>
</template>

<script>
export default {
    data(){
        return{
            voting: {
                title: '',
                body: ''
            }
        }
    },
    methods:{  
        createVoting(){
            this.voting.id = Date.now();
            this.$emit('create', this.voting);
            this.voting = {
                title:'',
                body: '',
            }
        }
    }
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
}

</style>