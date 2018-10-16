import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/test'
import Autocomplete from '../components/autocomplete'
import Button from '../components/button'
import Checkbox from '../components/checkbox'
import Elrow from '../components/elrow'
import Icon from '../components/icon'
import Inputbox from '../components/inputbox'
import Radio from '../components/radio'
import Select from '../components/select'
import Template from '../components/template'
import New from '../components/new/new.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
        path: '/test',
        component: Test
    },{
        path: '/autocomplete',
        component: Autocomplete
    },{
        path: '/button',
        component: Button
    },{
        path: '/checkbox',
        component: Checkbox
    },{
        path: '/elrow',
        component: Elrow
    },{
        path: '/icon',
        component: Icon
    },{
        path: '/inputbox',
        component: Inputbox
    },{
        path: '/radio',
        component: Radio
    },{
        path: '/select',
        component: Select
    },{
        path: '/template',
        component: Template
    },{
        path: '/new',
        component: New
  }
  ]
})
