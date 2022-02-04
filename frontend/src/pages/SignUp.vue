<template>
  <div>
      <header>
          <my-navbar :isVisible='false'/>
      </header>
      <main class="sign" style="margin-top: 25px">
            <h1 class="sign-h">Регистрация</h1>
            <form @submit.prevent>
                <p class="sign-p"><my-input v-model="surname" placeholder="Фамилия" /></p>
                <p class="sign-p"><my-input v-model="name" placeholder="Имя" /></p>
                <p class="sign-p"><my-input v-model="email" placeholder="Email" type='email' /></p>
                <p class="sign-p"><my-input v-model="password1" placeholder="Пароль" type='password' /></p>
                <p class="sign-p"><my-input v-model="password2" placeholder="Повторите пароль" type='password' /></p>

                <h2 class="sign-p">Пол:</h2>
                <p class="sign-p inline">
                    <input type="radio" name="sex" value="male" class="sign-radio" id="sex1">
                    <label for="sex1">Мужчина</label>
                </p>

                <p class="sign-p inline">
                    <input type="radio" name="sex" value="female" class="sign-radio" id="sex2">
                    <label for="sex2">Женщина</label>
                </p>

                    <my-input type="submit" id="signUp-button" @click='submit' value="Регистрация" />
            </form>
      </main>
  </div>
</template>

<script>
import axios from 'axios'
import MyNavbar from '@/components/UI/MyNavbar.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import { db } from '@/main';

export default {
    components: {
        MyInput, MyButton, MyNavbar
    },
    data(){
        return {
            email: '',
            password1: '',
            password2: '',
            name: '',
            surname: '',
            sex: '',
        }
    },
    methods:{
        capitalize(string){
            return string.trim().toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
        },
        clearField(){
            Object.keys(this.$data).forEach(key => {
                this.$data[key] = '';
            });
            document.querySelector("input[name='sex']:checked").checked = false;
        },
        submit(){           
            try{
                this.sex = document.querySelector("input[name='sex']:checked").value;

                this.name = this.capitalize(this.name);
                this.surname = this.capitalize(this.surname);

                if(this.password1 != this.password2){
                    let inputs = document.querySelectorAll("input[type='password']");

                    inputs.forEach(elem => elem.style.borderColor = '#ff0000');
                    inputs[1].value = '';
                    inputs[1].placeholder = 'Пароли не совпадают';
                    return;
                }

                const user = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email.toLowerCase(),
                    password: this.password1,
                    sex: this.sex,
                }

                db.collection('users').where('email', '==', user.email).get().then(querySnapshot => {
                    const documents = querySnapshot.docs.map(doc => doc.data())

                    if(documents){
                        let emailField = document.querySelector('form input:nth-of-type(3)');

                        emailField.style.borderColor = '#ff0000';
                        emailField.value = '';
                        emailField.placeholder = 'Данная почта уже используется';
                    }
                })

                db.collection('users').add(user).then( docRef => {
                    this.clearField();
                    this.$store.commit('setAuth', true);
                    this.$store.commit('setUserId', docRef.id);

                    this.$router.push(`/profile/${docRef.id}`);
                });
            }
            catch(e){
                console.log(e);
                return;
            }
        }
    }
}
</script>

<style>

</style>