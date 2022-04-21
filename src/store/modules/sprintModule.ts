import {Getters, Mutations, Actions, Module} from 'vuex-smart-module'
import {SprintInterface, TaskInterface} from '@/interfaces'
import {applicationModule} from '@/store'

class SprintState {
    sprints: Array<SprintInterface> = JSON.parse(localStorage.getItem('sprints') || '[]')
}

class SprintGetters extends Getters<SprintState> {
    get sprints(): Array<SprintInterface> {
        return this.state.sprints
    }

    sprint(payload: number): SprintInterface | null {
        return this.state.sprints.find(sprint => sprint.id === payload) || null
    }

    sprintTaskBoard(payload: number): Array<Array<TaskInterface>> {
        const tasks = this.state.sprints.find(sprint => sprint.id === payload)?.tasks
        const res: Array<Array<TaskInterface>> = [...Array(applicationModule.state.status.length)].map(() => [])
        if (tasks) {
            for (const task of tasks) {
                res[task.status - 1].push(task)
            }
        }
        return res
    }
}

class SprintMutations extends Mutations<SprintState> {
    ADD_SPRINT(payload: SprintInterface): void {
        this.state.sprints.unshift(payload)
    }

    DELETE_SPRINT(payload: number): void {
        this.state.sprints = this.state.sprints.filter((sprint: SprintInterface) => sprint.id !== payload)
    }

    CHANGE_SPRINT(payload: SprintInterface): void {
        this.state.sprints = this.state.sprints.map(sprint => sprint.id === payload.id ? payload : sprint)
    }

    DELETE_TASK_FROM_SPRINT(payload: { sprintId: number, taskId: number }): void {
        const sprint = this.state.sprints.find(sprint => sprint.id === payload.sprintId)
        if (sprint) {
            sprint.tasks = sprint.tasks.filter((task: TaskInterface) => task.id !== payload.taskId)
        }
    }

    ADD_TASK_FOR_SPRINT(payload: { sprintId: number, newIndex: number, task: TaskInterface }): void {
        this.state.sprints.find(sprint => sprint.id === payload.sprintId)?.tasks.splice(payload.newIndex, 0, payload.task)
    }

    MOVE_TASK_FROM_SPRINT(payload: { sprintId: number, newIndex: number, oldIndex: number }): void {
        const sprint = this.state.sprints.find(sprint => sprint.id === payload.sprintId)
        if (sprint) {
            sprint.tasks.splice(payload.newIndex, 0, sprint.tasks.splice(payload.oldIndex, 1)[0])
        }
    }

    CHANGE_TASK_FROM_SPRINT(payload: { sprintId: number, task: TaskInterface }): void {
        const sprint = this.state.sprints.find(sprint => sprint.id === payload.sprintId)
        if (sprint) {
            sprint.tasks = sprint.tasks.map(task => task.id === payload.task.id ? payload.task : task)
        }
    }
}

class SprintActions extends Actions<SprintState,
    SprintGetters,
    SprintMutations,
    SprintActions> {
    /**
     * Add sprint
     * @param payload
     * @example sprintModule.actions.addSprint({
     *     name: 'Create backlog Module',
     * })
     */
    addSprint(payload: SprintInterface): void {
        payload.id = new Date().getTime()
        payload.tasks = []
        this.commit('ADD_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Delete sprint
     * @param payload
     * @example backlogModule.actions.deleteSprint(1)
     */
    deleteSprint(payload: number): void {
        this.commit('DELETE_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Change sprints
     * @param payload
     */
    changeSprint(payload: SprintInterface): void {
        this.commit('CHANGE_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Delete task from sprint
     * @param payload
     */
    deleteTaskFromSprint(payload: { sprintId: number, taskId: number }): void {
        this.commit('DELETE_TASK_FROM_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Move task from sprint
     * @param payload
     */
    moveTaskFromSprint(payload: { sprintId: number, newIndex: number, oldIndex: number }): void {
        this.commit('MOVE_TASK_FROM_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Change task from sprint
     * @param payload
     */
    changeTaskFromSprint(payload: { sprintId: number, task: TaskInterface }): void {
        this.commit('CHANGE_TASK_FROM_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }

    /**
     * Add task for sprint
     * @param payload
     */
    addTaskForSprint(payload: { sprintId: number, newIndex: number, task: TaskInterface }): void {
        this.commit('ADD_TASK_FOR_SPRINT', payload)
        localStorage.setItem('sprints', JSON.stringify(this.state.sprints))
    }
}

const sprint = new Module({
    state: SprintState,
    getters: SprintGetters,
    mutations: SprintMutations,
    actions: SprintActions
})

export default sprint