import AllUsers from './components/AllUsers.vue';
import AddUser from './components/AddUser.vue';
import EditUser from './components/EditUser.vue';
import UserView from './components/UserView.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllUsers
    },
    {
        name: 'add',
        path: '/add',
        component: AddUser
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditUser
    },
    {
      name:'view',
      path:'/view/:id',
      component:UserView
    }
];
