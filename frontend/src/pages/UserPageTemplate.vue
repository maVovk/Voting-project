<template>
  <div>
        <header>
            <my-navbar/>
        </header>
        <router-view/>
  </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue';

export default {
    components:{
        MyNavbar
    }
}
</script>

<style>

</style>