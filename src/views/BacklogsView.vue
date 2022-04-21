<template>
  <div>
    <v-btn
      tile
      text
      class="text-capitalize px-1 font-weight-bold"
      @click="openForm()"
    >
      <v-icon left>
        mdi-plus-circle-outline
      </v-icon>
      Add Task
    </v-btn>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <div v-if="!tasks.length">
          You don't have any tasks yet
        </div>
        <draggable
          v-model="tasks"
          :delay="50"
          group="id"
          style="min-height: 100px"
        >
          <TheBacklogTaskComponent
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @openForm="openForm"
            @openDialog="openDialog"
          />
        </draggable>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <SprintsComponent />
      </v-col>
    </v-row>
    <TaskDialogFormComponent
      :dialog="dialogForm"
      :form-prop="activeTask"
      @changeDialog="changeDialogForm"
      @submit="addOrChangeTask"
    />
    <TaskDialogComponent
      :dialog="dialog"
      :task="activeTask"
      @changeDialog="changeDialog"
      @openForm="openForm"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {TaskInterface} from '@/interfaces'
import {backlogModule} from '@/store'
import draggable from 'vuedraggable'

@Component({
  name: 'BacklogsView',
  components: {
    draggable,
    TheBacklogTaskComponent: () => import('@/components/TheBacklogTaskComponent.vue'),
    TaskDialogComponent: () => import('@/components/TaskDialogComponent.vue'),
    TaskDialogFormComponent: () => import('@/components/TaskDialogFormComponent.vue'),
    SprintsComponent: () => import('@/components/SprintsComponent.vue')
  }
})
export default class BacklogsView extends Vue {
  private dialog = false
  private dialogForm = false
  private activeTask: TaskInterface | object = {}

  public get tasks(): Array<TaskInterface> {
    return backlogModule.getters.tasks
  }

  public set tasks(newTasks: Array<TaskInterface>) {
    backlogModule.actions.changeTasks(newTasks)
  }

  private changeDialog(newVal: boolean): void {
    this.dialog = newVal
  }

  private changeDialogForm(newVal: boolean): void {
    this.dialogForm = newVal
  }

  private openDialog(task: TaskInterface): void {
    this.activeTask = task
    this.changeDialog(true)
  }

  private openForm(task: TaskInterface | object = {}): void {
    this.activeTask = task
    this.changeDialogForm(true)
  }

  addOrChangeTask(form: TaskInterface): void {
    if (form.id) {
      backlogModule.actions.changeTask(form)
      this.activeTask = form
    } else {
      backlogModule.actions.addTask(form)
    }
  }
}
</script>
