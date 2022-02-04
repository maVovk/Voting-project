<template>
    <div>
    <header>
		<my-navbar @changeStatus="$store.commit('changeAuthStatus')" />
    </header>
	<main>
		<votings-list
			:votings="votings"
			v-show="isVotingsLoading === false"
		/>
		<div v-intersection:[limit]="loadVotings" class="observer hidden"></div>
		<div v-show="isVotingsLoading === true">Идёт загрузка...</div>
	</main>
	</div>
</template>

<script>
import VotingsList from "@/components/VotingsList";
import MyDialog from '@/components/UI/MyDialog';
import MyButton from '@/components/UI/MyButton';
import MySelect from '@/components/UI/MySelect';
import MyInput from '@/components/UI/MyInput.vue';
import MyNavbar from '@/components/UI/MyNavbar.vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default{
    components: {
        VotingsList, MyDialog, MyButton, MySelect, MyInput, MyNavbar
    },
    data(){
        return{
            limit: 10
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'voting/setPage',
        }),
        ...mapActions({
            fetchVotings: 'voting/fetchVotings',
            loadVotings: 'voting/loadVotings'
        }),
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    computed: {
        ...mapState({
            votings: state => state.voting.votings,
            isVotingsLoading: state => state.voting.isVotingsLoading,
            page: state => state.voting.page,
            totalPages: state => state.voting.totalPages
        })
    },
    mounted(){
        if(this.votings.length == 0){
            this.fetchVotings(this.limit);
        }

        // setTimeout(() => {
        //     document.querySelector('.observer').classList.remove('hidden');
        // }, 500);
    }
}
</script>

<style>
.app__btns{
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;
}

.page__wrapper{
    width: 30%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
}

.page{
    font-weight: bold;
}

.current-page{
    font-weight: bold;
}

.hidden{
    display: none;
}

.observer{
    height: 30px;
    background: transparent;
}
</style>