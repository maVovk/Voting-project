<template>
  <div class="main-voting">
        <div  v-show="isLoading === true">
            Загрузка...
        </div>
        <div v-show="isLoading === false">
            <h2 class="header-voting">{{ voting.title }} </h2>

            <div id="voting">
                <form v-if="single == false">
                    <div v-for="variant in variants" :key="variant.id" class="voting-div">
                        <input type="checkbox" :value="variant.title" v-model="results" class="vote-button">
                        <label >{{ variant.title }}</label>
                    </div>
                    <input type="reset" value="Проголосовать" @click="sendResults" class="signIn-button">
                </form>

                <form v-else>
                    <div v-for="variant in variants" :key="variant.id" class="voting-div">
                        <input type="radio" :value="variant.title" v-model="results"  class="vote-button">
                        <label>{{ variant.title }}</label>
                    </div>
                    <input type="reset" value="Проголосовать"  @click="sendResults" class="signIn-button">
                </form>
            </div>
            <my-dialog v-model:show="isVoted">
                <p>{{ dialogWindowText }}</p>
                <button @click="$router.push('/')">На главную</button>
            </my-dialog>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase/compat/app';
import { db } from '@/main';
import { mapState } from 'vuex';
import MyButton from '@/components/UI/MyButton.vue';
import MyDialog from '@/components/UI/MyDialog.vue';

export default {
    components: { 
        MyButton, MyDialog 
    },
    data(){
        return {
            voting: {},
            single: Boolean,
            variants: [],
            results: [],
            isLoading: true,
            isVoted: false,
            dialogWindowText: "Спасибо за ваш голос",
            votingRef: {},
        }
    },
    methods:{
        getVoting(id){
            try{
                this.votingRef = db.collection('votings').doc(id);

                this.votingRef.get().then(snapshot => {
                    const result = snapshot.data();

                    if(result['votedUsers'].includes(this.$store.state.userId)){
                        this.dialogWindowText = "Вы уже голосовали";
                        this.showDialog();
                        // return;
                    }

                    // console.log(result);
                    this.voting = result;
                    if(result['type'] == 'single'){
                        this.single = true;
                    }
                    else{
                        this.single = false;
                    }

                    for(let i = 0; i < result['options'].length; i++){
                        this.variants.push({
                            'id': i,
                            'title': result['options'][i]
                        });
                    }

                    this.isLoading = false;
                    // console.log(this.variants);
                });
            }
            catch(e){
                console.log(e);
                this.$router.push('/404');
            }
        },
        sendResults(){
            if(this.results.length === 0){
                return;
            }

            if(!this.single){
                this.results.forEach(elem => {
                    let index = this.variants.find(e => {
                        return e.title === elem;
                    }).id;

                    this.voting['results'][index]++;
                });
            }
            else{
                this.voting['results'][ this.variants.find(e => {
                        return e.title === this.results;
                    }).id]++;
            }

            // тут код отправки результатов на сервер
            if(this.$store.state.isSignedIn){
                this.votingRef.update({
                    votedUsers:
                        firebase.firestore.FieldValue.arrayUnion(this.$store.state.userId)
                });
            }

            this.votingRef.update({
                results:
                    this.voting['results']
            });

            // console.log('results were sent: ', this.results);
            this.results = [];    
            this.showDialog();
        },
        showDialog(){
            this.isVoted = true;

            // отключение формы, если уже проголосовали
            document.querySelector('#voting').setAttribute('disabled', true);
            console.log('Disabled');
        }
    },
    computed:{
        ...mapState({
            votings: state => state.voting.votings,
        })
    },
    mounted(){
        this.getVoting(this.$route.params.id);
    }
}
</script>

<style>
    div[disabled]{
        pointer-events: none;

        opacity: 0.7;
    }
    .main-voting {
        /* background: #c4c4c4; */
        /* border-radius: 10px; */
        /* margin: 1%; */
        /* padding: 1%; */
        font-weight: bolder;
        font-size: 30px;
    }
    .header-voting {
        background: #c4c4c4;
        border-radius: 10px;
        margin: 1%;
        padding: 1%;
        /* font-weight: bolder; */
        /* font-size: 30px; */
    }
    #voting{
        margin-left: 30px;
    }
    .voting-div{
        margin: 2px;
    }
    .vote-button{
        margin-right: 20px;
        margin-bottom: 10px;
        width: 15px;
        height: 15px;
    }
</style>