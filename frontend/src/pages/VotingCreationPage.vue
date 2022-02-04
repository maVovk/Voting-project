<template>
  <div>
      <my-navbar/>
      <main>
          <button @click="$router.go(-1)" class=button>&#8592; Назад</button>
          <div class="voting-creation-form">
            <div class="upper">
                <my-input placeholder='Название' class="title__input" v-model="votingTitle"/>
                <my-toggle leftLabel='Один вариант' rightLabel="Несколько вариантов" class="title__toggle" v-model="votingType"/>
            </div>
            <div class="create-form">
                <div class="voting-creation__label">
                    <h4 class ="variant-label">Варианты</h4>
                    <p> {{ amount }}/10 </p>
                </div>
                <div id="variants__container">
                    <my-textfield-list :fields="votingVariants" @delete="eraseVariant" @save="this.isAddButtonEnabled = true"/>
                    <Icon @click="addVariant" class='addIcon creation__add__button' :icon='icons.addIcon'/>
                </div>
            </div>
            <button @click="submitVoting" class="button" id="create-voting">Создать</button>
          </div>
      </main>
  </div>
</template>

<script>
import MyNavbar from '@/components/UI/MyNavbar.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyToggle from '@/components/UI/MyToggle.vue';
import MyTextfieldList from '@/components/MyTextfieldList.vue';
import { Icon } from '@iconify/vue';
import { db } from '@/main';
import addIcon from '@iconify-icons/carbon/add'; 

export default {
    title: 'Создать голосование',
    components: { 
        MyNavbar, MyInput, MyToggle,  Icon, MyTextfieldList,
    },
    data(){
        return{
            votingTitle: '',
            votingType: '',
            icons:{
                addIcon
            },
            isAddButtonEnabled: true,
            amount: 0,
            votingVariants: [],
        }
    },
    methods:{
        addVariant(){
            if(!this.isAddButtonEnabled) return;

            if(this.amount >= 10){
                document.querySelector('.voting-creation__label p').style = "color: red";
                return;
            }

            this.isAddButtonEnabled = false;
            this.votingVariants.push({
                id: this.amount,
                value: ''
            });
            this.amount++;
        },
        eraseVariant(id){
            this.amount--;
            document.querySelector('.voting-creation__label p').style = "color: black";

            this.votingVariants = this.votingVariants.filter(elem => elem.id !== id);
        },
        submitVoting(){
            // данные отправляются на сервер

            if(this.votingTitle === '' || this.votingVariants.length == 0){
                return;
            }

            let options = []
            this.votingVariants.forEach(element => {
                options.push(element.value);
            });

            if(this.votingType == 'right'){
                this.votingType = 'multiple';
            }
            else{
                this.votingType = 'single';
            }

            let voting = {
                'author': this.$store.state.userId,
                'title': this.votingTitle,
                'type': this.votingType,
                'options': options,
                'results': new Array(this.votingVariants.length).fill(0),
                'votedUsers': [],
            }

            console.log(voting);

            db.collection('votings').add(voting);

            this.$router.go(-1);
        }
    }
}
</script>

<style>
.upper{
    /* vertical-align: middle; */
    /* display: block; */
    height: 100px;
}

.voting-creation__label {
    display: flex;
    font-weight: bold;
    font-size: 25px;
}

.title__input, .title__toggle {
    display: inline-block;
    position: absolute;
}

.title__input {
    width: 388px;
    left: 15%;
    border: 1px gray solid;
}

.title__toggle {
    right: 2%;
    transform:translateY(60%);
}

.variant-label{
    font-weight: bold;
    font-size: 25px;
    margin-right: 30px;
}

#create-voting{
    position: absolute;
    bottom: 50px;
}

.creation__add__button {
    background-color: transparent;
    border: none;
}
.create-form {
    display: block;
    padding-left: 225px;
}
</style>