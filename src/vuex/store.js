import Vue from 'vue'
import Vuex from 'vuex'

// state
import dctrl from './modules/dctrl'
import members from './modules/members'
import bounties from './modules/bounties'

import member from './modules/member'
import bounty from './modules/bounty'
import eventstream from './modules/eventstream'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { members, bounties, dctrl, member, bounty, eventstream },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
