import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'
import './utils/rem'
import store from './store'

import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import Fw from './freamwork'

Vue.use( Fw )

import { homeFilter } from './filters/index'

for( var key in homeFilter ){
  Vue.filter( key, homeFilter[ key ] )
}

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
