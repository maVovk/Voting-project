import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import directives from '@/components/directives'
import store from '@/store'
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/compat/firestore'
import titleMixin from '@/mixins/titleMixin'

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app.use(router);
app.use(store);
app.mixin(titleMixin);

firebase.initializeApp({
    projectId: 'voting-project-1c40e'
});

export const db = firebase.firestore();

app.mount('#app');
