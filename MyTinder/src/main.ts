import { createApp } from 'vue';
import './style.css';
import MyTinder from './MyTinder.vue';
import "bootstrap/dist/css/bootstrap.css";
import router from './router/Router.js'

const app = createApp(MyTinder)

app.use(router)
app.mount('#app')
