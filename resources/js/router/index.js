import { createRouter, createWebHistory } from 'vue-router'

import Index from '../components/events/Index.vue'
import Create from '../components/events/Create.vue'
import Edit from '../components/events/Edit.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'events.index',
        component: Index

    },
    {
        path: '/events/create',
        name: 'events.create',
        component: Create
    },
    {
        path: '/events/:id/edit',
        name: 'events.edit',
        component: Edit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
