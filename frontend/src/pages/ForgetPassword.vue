<template>
    <div>
        <header>
            <my-navbar :isVisible='false'/>
        </header>
        <main class="sign">
            <form @submit.prevent>
                <h1 class="sign-h">Восстановление пароля</h1>
                <p class="sign-p" v-if="emailEntered === false">
                    <my-input v-model='this.email'
                              type='email'
                              placeholder='Почта'
                              class="input"
                     />
                </p>
                <p class="sign-p" v-else>
                    <my-input v-model='this.password1'
                        type='password'
                        placeholder='Пароль' 
                        class="input"
                     />
                     <my-input v-model='this.password2'
                        type='password'
                        placeholder='Повторите пароль' 
                        class="input"
                     />
                </p>
                    <div>
                        <input type='submit' value='Далее' @click='submit' class="signIn-button">
                    </div>
            </form>
        </main>
    </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar'
import { db } from '@/main';
import cookie from 'js-cookie';

export default {
    components:{
        MyNavbar,
    },
    data(){
        return {
            emailEntered: false,
            email: '',
            password1: '',
            password2: '',
            documents: undefined,
        }
    },
    methods:{
        submit(){
            if(!this.emailEntered){
                db.collection('users').where('email', '==', this.email.toLowerCase()).get().then(querySnapshot => {
                    this.documents = querySnapshot.docs.map(doc => Object.assign({
                        id: doc.id,
                        ...doc.data()
                    }))

                    if(this.documents.length === 0){
                        document.querySelector('input[type="email"]').placeholder = 'Такой почты не существует';
                        document.querySelector('input[type="email"]').value = '';
                    }
                    else{
                        document.querySelector('input[type="submit"]').value = 'Восстановить';
                        this.emailEntered = true;
                    }
                });         
            }
            else{
                if(this.password1 != this.password2){
                    let inputs = document.querySelectorAll("input[type='password']");

                    inputs.forEach(elem => elem.style.borderColor = '#ff0000');
                    inputs[1].value = '';
                    inputs[1].placeholder = 'Пароли не совпадают';
                    return;
                }

                console.log(this.documents[0]);
                db.collection('users').doc(this.documents[0].id).update({
                    password: this.password1,
                    ...this.documents[0].data,
                });

                this.$store.commit('setAuth', true);
                cookie.set('userID', this.documents[0].id);
                this.$router.push(`/profile/${this.documents[0].id}`);
            }
        }
    }
}
</script>

<style>

</style>