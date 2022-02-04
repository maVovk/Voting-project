<template>
    <div>
        <header>
            <my-navbar @changeStatus="$store.commit('changeAuthStatus')"/>
        </header>
        <button @click="$router.go(-1)" class="button">
            &#8592; Назад
        </button>
        <router-view>
        </router-view>
    </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue'

export default {
    components: { 
      MyNavbar 
    },
}
</script>

<style>

</style>