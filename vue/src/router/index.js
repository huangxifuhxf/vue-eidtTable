import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Table from '@/views/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    }
  ]
})
