<template>
<div>
    <navbar>
	    <my-button @click="$router.push('/')" class="logo">
			<Icon class="icon" :icon='icons.vectorlogozoneIcon'/>
		</my-button>
	    <div v-show='isVisible === true' class="nav__btns">
			<my-button v-if="$store.state.isSignedIn === true && profilePage === false" @click="$router.push(`/profile/${$store.getters.userId}`)" class="logo">
				<Icon class="profile__icon" :icon="icons.profileIcon"/>
			</my-button>
			<my-button v-else-if="profilePage === true" class="logo" @click="logOut">
				<Icon class="profile__icon" :icon="icons.bxLogOut"/>
			</my-button>
			<div v-else>
				<my-button @click="$router.push('/login')">Вход</my-button>
				<my-button @click="$router.push('/register')">Регистрация</my-button>
			</div>
		</div>
	</navbar>
</div>
</template>

<script>
import { Icon } from '@iconify/vue';
import MyButton from '@/components/UI/MyButton.vue';
import vectorlogozoneIcon from '@iconify-icons/simple-icons/vectorlogozone';
import profileIcon from '@iconify-icons/gg/profile';
import bxLogOut from '@iconify-icons/bx/bx-log-out';
import cookie from 'js-cookie';

export default {
	components:{
		Icon, MyButton
	},
    props:{
		isVisible:{
			type: Boolean,
			require: false,
			default: true
		}
    }, 
	data(){
		return {
			icons:{
				vectorlogozoneIcon,
				profileIcon,
				bxLogOut,
			},
			profilePage: false,
		}
	},
    methods:{
        changeStatus(){
            this.$emit('changeStatus');
        },
		logOut(){
			this.$store.commit('setAuth', false);
			this.$router.push('/');
			cookie.remove('userId');
			cookie.remove('loadedUserInfo');
		}
    },
	mounted(){
		this.profilePage = this.$route.path.includes('profile');
	}
}
</script>

<style>
navbar{
	display: flex;
	justify-content: space-between;
	background: #c4c4c4;
	margin: 0px -15px;
	padding: 15px 30px;
}

.logo{
	border: 0px;
	background-color: transparent;
}

.logo:hover{
	background-color: transparent;
}

.icon, .profile__icon{
	color: black;
}

.icon{
	width: 60px;
	height: 60px;
}

.profile__icon{
	width: 45px;
	height: 45px;
}

.nav__btns{
	display: flex;
	justify-content: space-around;
	margin: 10px 5px;
}
</style>