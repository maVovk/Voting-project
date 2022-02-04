import axios from 'axios'
import { db } from '@/main'

export const votingsModule = {
    state: () => {
        return{
            votings: [],
            isVotingsLoading: false,
            page: 1,
            totalPages: 0
        }
    },
    getters: {

    },
    mutations:{
        setVotings(state, votings){
            state.votings = votings;
        },
        setLoading(state, isVotingsLoading){
            state.isVotingsLoading = isVotingsLoading;
        },
        setPage(state, page){
            state.page = page;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        }
    },
    actions:{
        async fetchVotings({state, commit}, limit){ // загрузка голосований с сервера
            try{
                commit('setLoading', true);


                // const response = await axios.get(
                //     `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${state.page}`);
                
                // console.log('Loading...');
                db.collection('votings').get().then(querySnapshot => {
                    const documents = querySnapshot.docs.map(doc => Object.assign(
                        {
                            id: doc.id, 
                            ...doc.data(),
                        }
                    ));

                    // console.log(documents);
                    commit('setVotings', documents);
                })
                
                // commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / limit));
                // commit('setVotings', response['data']);
            } catch (e){
                alert(`fetch ${e}`);
            } finally{
                commit('setLoading', false);
            }
        },
        async loadVotings({state, commit}, limit){ // подгрузка голосований, когда прослистали до конца страницы(пока не работает)
            return;

            try{
                commit('setPage', state.page + 1);
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${state.page}`);
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / limit));
                commit('setVotings', [...state.votings , ...response['data']]);
            } catch (e){
                alert(`load ${e}`);
            }
        }
    },
    namespaced: true
}