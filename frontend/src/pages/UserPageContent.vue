<template>
  <main>
        <div class="profile__info">
            <img class='avatar' src='@/assets/placeholder.jpg' @click='print'>
            <div class="username">
                <h2>{{ user.name }}</h2>
                <h2>{{ user.surname }}</h2>
            </div>
        </div>
        <div class="voting__line">
            <h2 class="voting-header">Мои голосования:</h2>
            <button @click="$router.push('/creation')" class="add-button"><Icon class='addIcon' :icon='icons.addIcon'/></button>
        </div>
        <votings-list :votings='votings' :isCreator='true' @deleteVoting="deleteVoting"/>
    </main>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import VotingsList from '@/components/VotingsList.vue';
import { Icon } from '@iconify/vue';
import addIcon from '@iconify-icons/carbon/add'; 
import { db } from '@/main';
// import MyButton from '@/components/UI/MyButton.vue';

export default {
    title: 'Профиль',
    components:{
        VotingsList, Icon
        // MyButton
    },
    data(){
        return{
            user: {},
            icons:{
                addIcon,
            },
            votings: [],
            isLoading: false,
            limit: 4,
            page: 1
        }
    },
    methods: {
        print(){
            console.log(this.user);
        },
        loadUsersInfo(){
            db.collection('users').doc(this.id).get().then(snapshot => {
                const info = snapshot.data();
                
                if(info){
                    this.user = info;
                }
                else{
                    this.$router.push('/404')
                    console.log('None');
                }

                cookie.set('loadedUserInfo', true);
                cookie.set('userInfo', JSON.stringify(info));
            });
        },
        fetchVotings(){
            try{
                db.collection('votings').where('author', '==', this.$store.state.userId).get().then(querySnapshot => {
                    const documents = querySnapshot.docs.map(doc => Object.assign({
                        id: doc.id,
                        ...doc.data(),
                    }))

                    this.votings = documents;
                })
            } catch(e){
                console.log(e);
            }
        },
        deleteVoting(votingId){
            try{
                this.votings = this.votings.filter(elem => elem.id != votingId);

                db.collection('votings').doc(votingId).delete();
            } catch(e){
                console.log(e);
            }
        }
    },
    mounted(){
        let isLoaded = cookie.get('loadedUserInfo');

        if(isLoaded == undefined){
            this.loadUsersInfo();
        }
        else{
            const info = JSON.parse(cookie.get('userInfo'));

            if(info == undefined){
                this.loadUsersInfo();
            }
            else{
                this.user = info;
            }
        }

        this.fetchVotings();
    },
    computed:{
        id(){ // функция, которая возвращает id пользователя
            return this.$route.params.id;
        }
    }
}
</script>

<style>
.avatar{
    width: 175px;
    height: 175px;
    border-radius: 100%;
}

.profile__info{
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin: 2% auto;
    width: 90%;
}

.addIcon{
    width: 55px;
    height: 55px;
    color: black;
}

.voting__line{
    display: flex;
    justify-content: space-between;
}

main{
    margin-top: 10px;
}

.voting-header {
    margin-left: 4%;
}
</style>