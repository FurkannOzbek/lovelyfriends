import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Rehome from '../components/Rehome.vue';
import CatBlogs from '../components/CatBlogs.vue';
import Closestvet from '../components/Closestvet.vue';
import Contact from '../components/Contact.vue';
import Cats from '../components/Cats.vue';
import Dogs from '../components/Dogs.vue';
import Others from '../components/Others.vue';
import DogBlogs from '../components/DogBlogs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path:'/Rehome',
      name:'Rehome',
      component:Rehome,
    },
    {
      path:'/Cats',
      name:'Cats',
      component:Cats,
    },
    {
      path:'/Dogs',
      name:'Dogs',
      component:Dogs,
    },
    {
      path:'/CatBlogs/:id',
      name:'CatBlogs',
      component:CatBlogs,
    },
    {
      path:'/DogBlogs/:id',
      name:'DogBlogs',
      component:DogBlogs,
    },
    {
      path:'/Closestvet',
      name:'Closestvet',
      component:Closestvet,
    },
    {
      path:'/Contact',
      name:'Contact',
      component:Contact,
    },
    {
      path:'/Others',
      name:'Others',
      component:Others,
    },
  ],
  mode: 'history',
});
