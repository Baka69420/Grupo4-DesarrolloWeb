import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TextInterpolationView from '../views/SintaxisViews/TextInterpolationView.vue'
import RawHTMLView from '../views/SintaxisViews/RawHTMLView.vue'
import AttributeBindingsView from '../views/SintaxisViews/AttributeBindingsView.vue'
import JavaScriptExpressionsView from '../views/SintaxisViews/JavaScriptExpressionsView.vue'
import DirectivesView from '../views/SintaxisViews/DirectivesView.vue'
import ConditionalRenderingView from '../views/SintaxisViews/ConditionalRenderingView.vue'
import ListRenderingView from '../views/SintaxisViews/ListRenderingView.vue'
import EventHandlingView from '../views/SintaxisViews/EventHandlingView.vue'
import FormInputBindingsView from '../views/SintaxisViews/FormInputBindingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/text-interpolation',
      name: 'text-interpolation',
      component: TextInterpolationView
    },
    {
      path: '/raw-html',
      name: 'raw-html',
      component: RawHTMLView
    },
    {
      path: '/attribute-bindings',
      name: 'attribute-bindings',
      component: AttributeBindingsView
    },
    {
      path: '/javascript-expressions',
      name: 'javascript-expressions',
      component: JavaScriptExpressionsView
    },
    {
      path: '/directives',
      name: 'directives',
      component: DirectivesView
    },
    {
      path: '/conditional-rendering',
      name: 'conditional-rendering',
      component: ConditionalRenderingView
    },
    {
      path: '/list-rendering',
      name: 'list-rendering',
      component: ListRenderingView
    },
    {
      path: '/event-handling',
      name: 'event-handling',
      component: EventHandlingView
    },
    {
      path: '/form-input-bindings',
      name: 'form-input-bindings',
      component: FormInputBindingsView
    },
  ]
})

export default router
