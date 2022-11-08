import * as VueRouter from 'vue-router';
import MainPage from '../components/MainPage.vue';
import Registration from '../components/Registration.vue';
import ProfilePage from '../components/ProfilePage.vue';

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Registration
        },
        {
            path: '/Main',
            component: MainPage
        },
        {
            path: '/Profile',
            component: ProfilePage 
        }
    ]
})