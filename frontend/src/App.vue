<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import cookie from 'js-cookie'

export default{
    mounted(){
        if(cookie.get('userId')){
            this.$store.commit('setUserId', cookie.get('userId'));
            this.$store.commit('setAuth', true)
        }
    }
}
</script>

<style>
@import "pages/css/reset.css";
@import "pages/css/style.css";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap');

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 20px;
    font-family: 'Roboto';
}

h1 {
	font-size:2.5rem;
	line-height: 1.2;
}
h2 {
	font-size:2rem;
	line-height: 1.2;
}
h3 {
	font-size:1.5rem;
	line-height:1.2;
}
h4 {
	font-size:1rem;
	line-height:1.2;
}
h5 {
	font-size:0.5rem;
	line-height:1.2;
}
h6 {
	font-size:0.2rem;
	line-height:1.2;
}
.app{
    padding: 15px;
}
</style>