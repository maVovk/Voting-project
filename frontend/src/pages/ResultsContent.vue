<template>
    <div class="main-voting">
        <div v-show="isLoading === true">
            Загрузка...
        </div>
        <div v-show="isLoading === false">
            <h2 class="header-voting">{{ voting.title }} </h2>
            <div id="voting">
                <div v-for="result in results" :key="result.id">
                    <div class="results-div">
                        <p>{{ result.title }}</p>
                        <p>{{ result.percent }}%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/main';
import VotingsList from '@/components/VotingsList';

export default {
    components:{
        VotingsList
    },
    data(){
        return {
            voting: {},
            results: [],
            isLoading: true,
        }
    },
    methods:{
        getVoting(id){
            try{
                this.votingRef = db.collection('votings').doc(id);

                this.votingRef.get().then(snapshot => {
                    const result = snapshot.data();

                    this.voting = result;
                    let sum = 0;

                    this.voting['results'].forEach(element => {
                        sum += element;
                    });

                    // console.log(sum);
                    // console.log(this.voting['results']);

                    for(let i = 0; i < this.voting['results'].length; i++){
                        this.results.push({
                            'id': i,
                            'title': this.voting['options'][i],
                            'percent': Math.round(this.voting['results'][i] / (sum == 0 ? 1 : sum) * 100, -2)
                        });
                    }

                    this.isLoading = false;
                    // console.log(this.results);
                });
            }
            catch(e){
                console.log(e);
                this.$router.push('/404');
            }
        },
    },
    mounted(){
            this.getVoting(this.$route.params.id);
        },
}
</script>

<style>
.results-div{
    display: flex;
    justify-content: space-between;
    margin-right: 25px;
}
</style>