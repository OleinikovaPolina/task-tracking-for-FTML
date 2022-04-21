import {Getters, Mutations, Actions, Module} from 'vuex-smart-module'
import {TaskInterface} from '@/interfaces'

class BacklogState {
    tasks: Array<TaskInterface> = JSON.parse(localStorage.getItem('tasks') || '[]')
}

class BacklogGetters extends Getters<BacklogState> {
    get tasks(): Array<TaskInterface> {
        return this.state.tasks
    }

    task(payload: number): TaskInterface {
        return this.state.tasks[payload]
    }
}

class BacklogMutations extends Mutations<BacklogState> {
    ADD_TASK(payload: TaskInterface): void {
        this.state.tasks.unshift(payload)
    }

    DELETE_TASK(payload: number): void {
        this.state.tasks = this.state.tasks.filter((task: TaskInterface) => task.id !== payload)
    }

    CHANGE_TASKS(payload: Array<TaskInterface>): void {
        this.state.tasks = payload
    }
}

class BacklogActions extends Actions<BacklogState,
    BacklogGetters,
    BacklogMutations,
    BacklogActions> {
    /**
     * Add task for backlog
     * @param payload
     * @example backlogModule.actions.addTask({
     *     name: 'Create backlog Module',
     *     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, fugiat.',
     *     descriptionLong: '<p>lorem200</p>',
     *     dateCreation: '2022-02-02',
     *     deadline: '2022-02-02',
     *     priority: 0,
     *     status: 0
     * })
     */
    addTask(payload: TaskInterface): void {
        payload.id = new Date().getTime()
        this.commit('ADD_TASK', payload)
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    /**
     * Delete task from backlog
     * @param payload
     * @example backlogModule.actions.deleteTask(1)
     */
    deleteTask(payload: number): void {
        this.commit('DELETE_TASK', payload)
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    /**
     * Change tasks from backlog
     * @param payload
     */
    changeTasks(payload: Array<TaskInterface>): void {
        this.commit('CHANGE_TASKS', payload)
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    /**
     * Change task from backlog
     * @param payload
     */
    changeTask(payload: TaskInterface): void {
        const newVal = this.state.tasks.map(task => task.id === payload.id ? payload : task)
        this.commit('CHANGE_TASKS', newVal)
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
}

const backlog = new Module({
    state: BacklogState,
    getters: BacklogGetters,
    mutations: BacklogMutations,
    actions: BacklogActions
})

export default backlog