import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'backlogs',
        component:  () => import('../views/BacklogsView.vue'),
    },
    {
        path: '/sprints',
        name: 'sprints',
        component: () => import('../views/SprintsView.vue'),
    },
    {
        path: '/sprint/:id',
        name: 'sprint',
        component: () => import('../views/SprintView.vue'),
    },
    {
        path: '/relax',
        name: 'relax',
        component: () => import('../views/RelaxView.vue'),
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('../views/NotFoundView.vue'),
    },
]

const router = new VueRouter({
    mode:'hash',
    routes,
})

export default router
