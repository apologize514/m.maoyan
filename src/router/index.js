import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Cinema from '../views/cinema'
import City from '../views/city'
import Error from '../views/error'
import Mine from '../views/mine'
import Search from '../views/search'
import HomeHot from '../views/home/HomeHot.vue'
import HomeComing from '../views/home/HomeComing.vue'


Vue.use( VueRouter )


const router = new VueRouter({
    mode: 'history',
    routes:[
        // {
        //     path: '/',
        //     redirect: '/home'
        // }
        ,{
            path:'/home',
            component:Home,
            redirect:'/home/f-hot',
            children:[
                {
                    path:'f-coming',
                    component:HomeComing,
                    name:'f-coming'
                },
                {
                    path:'f-hot',
                    component:HomeHot,
                    name:'f-hot'
                }
            ]

        },{
            path:'/cinema',
            component:Cinema
        },{
            path:'/mine',
            component: Mine
        },{
            path:'/city',
            component:City
        },{
            path: '/search',
            component:Search
        },{
            path:'*',
            component:Error
        }
    ]
})

export default router 