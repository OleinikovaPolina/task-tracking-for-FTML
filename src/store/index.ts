import Vue from 'vue'
import Vuex from 'vuex'

import { Module, createStore, createMapper } from 'vuex-smart-module'
import backlog from '@/store/modules/backlogModule'
import sprint from '@/store/modules/sprintModule'
import application from '@/store/modules/applicationModule'

Vue.use(Vuex)

const root = new Module({
    modules: {
        backlog,
        sprint,
        application
    },
})

const store = createStore(root)

export default store

export const backlogModule = backlog.context(store)
export const sprintModule = sprint.context(store)
export const applicationModule = application.context(store)

export const backlogMapper = createMapper(backlog)
export const sprintMapper = createMapper(sprint)
export const applicationMapper = createMapper(application)
