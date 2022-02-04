<template>
    <div>
        <header>
            <my-navbar :isVisible='false'/>
        </header>
        <main class="sign">
            <form @submit.prevent>
                <h1 class="sign-h">Войти</h1>
                <p class="sign-p">
                    <my-input v-model='this.email'
                              type='email'
                              placeholder='Почта'
                              class="input"
                     />
                </p>
                <p class="sign-p">
                    <my-input v-model='this.password'
                        type='password'
                        placeholder='Пароль' 
                        class="input sign-password"
                     />
                </p>
                    <div>
                        <my-button @click="$router.push('/restore')" class="sign-trouble-button">Забыли пароль?</my-button>
                        <input type='submit' value='Войти' class="signIn-button" @click='submit'>
                    </div>
            </form>
        </main>
    </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import { db } from '@/main';
import cookie from 'js-cookie';

export default {
    title: 'Вход',
    components:{
        MyNavbar, MyInput, MyButton
    },
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        submit(){
            if(this.email === '' || this.password === ''){
                return;
            }

            // тут будет код проверки данных
            // если они верны, по переход на страницу профиля

            db.collection('users').where('email', '==', this.email.toLowerCase()).get().then(querySnapshot => {
                const documents = querySnapshot.docs.map(doc => Object.assign(
                    {
                        id: doc.id, 
                        ...doc.data(),
                    }
                ))

                if(documents.length === 0){
                    let inputs = document.querySelectorAll('form > input');

                    inputs.forEach(elem => {
                        elem.style.borderColor = '#ff0000';
                    });

                    return;
                }

                if(documents[0]['password'] === this.password){
                    this.$store.commit('setAuth', true);
                    this.$store.commit('setUserId', documents[0].id);

                    // сохраняем id пользователя в cookie файл
                    cookie.set('userId', documents[0].id, {'path': '/'})

                    this.$router.push(`/profile/${this.$store.state.userId}`);
                    this.email = '';
                    this.password = '';
                }
            })

            
        }
    }
}
</script>

<style>
    
</style>