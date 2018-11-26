import Vue from 'vue'
import Router from 'vue-router'
import Aaa from '../components/new/src/aaa.vue'
import New from '../components/new/src/new.vue'
import Elements from '../components/elements/src/element.vue'
import Welcome from '../components/welcome/src/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {
        path: '/new',
        component: New
    },{
      path: '/aaa',
      component: Aaa
    },{
      path: '/element',
      component: Elements
    },{
      path: '/welcome',
      component: Welcome
    }
  ]
})
