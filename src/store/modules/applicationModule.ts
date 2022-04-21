import {Getters, Module} from 'vuex-smart-module'
import {PriorityInterface, StatusInterface} from '@/interfaces'

class ApplicationState {
    priority: Array<PriorityInterface> = [
        {id: 1, name: 'low', color: '#7c63e8', icon: 'mdi-speedometer-slow'},
        {id: 2, name: 'medium', color: '#7932a8', icon: 'mdi-speedometer-medium'},
        {id: 3, name: 'high', color: '#d00379', icon: 'mdi-speedometer'},
    ]
    status: Array<StatusInterface> = [
        {id: 1, name: 'to do', color: '#7c63e8', icon: 'mdi-message'},
        {id: 2, name: 'research', color: '#6432bb', icon: 'mdi-message-question'},
        {id: 3, name: 'in progress', color: '#7932a8', icon: 'mdi-message-processing'},
        {id: 4, name: 'review', color: '#3749b5', icon: 'mdi-message-draw'},
        {id: 5, name: 'complete', color: '#3e793b', icon: 'mdi-message-star'},
    ]
}

class ApplicationGetters extends Getters<ApplicationState> {
    get priority() : Array<PriorityInterface>{
        return this.state.priority
    }

    get status(): Array<StatusInterface> {
        return this.state.status
    }

    getPriority(payload: number): PriorityInterface {
        return this.state.priority[payload - 1]
    }

    getStatus(payload: number): StatusInterface {
        return this.state.status[payload - 1]
    }
}

const application = new Module({
    state: ApplicationState,
    getters: ApplicationGetters
})

export default application