import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ModuleEdit from '@/components/ModuleEdit'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/module/edit',
      name: 'ModuleEdit',
      component: ModuleEdit
    }
  ]
})
