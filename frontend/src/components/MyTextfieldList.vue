<template>
  <div>
      <transition-group name="user-list">
        <my-textfield 
            v-for="field in fields"
            :key="field.id"
            :element="field"
            @delete="deleteElement"
            @save="saveElement"
        />
      </transition-group>
  </div>
</template>

<script>
import MyTextfield from '@/components/UI/MyTextfield';

export default {
    components:{
        MyTextfield,
    },
    props:{
        fields:{
            type: Array,
            require: true,
        }
    },
    methods:{
        deleteElement(id){
            this.$emit('delete', id);
        },
        saveElement(){
            this.$emit('save');
        }
    }
}
</script>

<style>

</style>