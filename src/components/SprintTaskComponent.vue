<template>
  <v-card
    class="mt-2"
    tile
    outlined
  >
    <v-card-title :class="small?'pb-0':''">
      <div class="d-flex pr-8">
        <div class="d-flex align-start">
          <v-icon
            class="pt-1"
            left
            :small="small"
            :color="getPriority(task.priority).color "
          >
            {{ getPriority(task.priority).icon }}
          </v-icon>
          <span
            :class="small?'text-body-1':'text-h6'"
            style="cursor: pointer"
            @click="changeDialog(true)"
          >{{ task.name }}</span>
        </div>
        <v-btn
          icon
          :small="!small"
          :x-small="small"
          @click="changeDialogForm(true)"
        >
          <v-icon
            class="ml-1"
            :x-small="small"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
      </div>
      <v-btn
        style="position: absolute;  top:16px;  right: 16px;"
        icon
        :small="!small"
        :x-small="small"
        @click="deleteTaskInSprint(task)"
      >
        <v-icon :small="small">
          mdi-close
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text
      v-if="full"
      :class="small?'pb-0':''"
    >
      {{ task.descriptionShort }}
    </v-card-text>

    <v-card-actions
      v-if="full"
      class="px-4"
    >
      <div v-if="!small">
        <v-icon
          :small="small"
          left
          :color="getStatus(task.status).color"
        >
          {{ getStatus(task.status).icon }}
        </v-icon>
        <span>{{ getStatus(task.status).name }}</span>
      </div>
      <v-spacer />

      <v-icon
        :small="small"
        class="mr-1"
        color="red"
      >
        mdi-fire
      </v-icon>
      <span class="text-body-2">{{ $moment(task.deadline).format('DD.MM.YYYY') }}</span>
    </v-card-actions>

    <TaskDialogComponent
      :dialog="dialog"
      :task="task"
      @changeDialog="changeDialog"
      @openForm="changeDialogForm(true)"
    />
    <TaskDialogFormComponent
      :dialog="dialogForm"
      :form-prop="task"
      @changeDialog="changeDialogForm"
      @submit="changeTaskInSprint"
    />
  </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {TaskInterface} from '@/interfaces'
import {applicationMapper, backlogModule, sprintModule} from '@/store'

@Component({
  name: 'SprintTaskComponent',
  components: {
    TaskDialogComponent: () => import('@/components/TaskDialogComponent.vue'),
    TaskDialogFormComponent: () => import('@/components/TaskDialogFormComponent.vue')
  },
  computed: applicationMapper.mapGetters({getPriority: 'getPriority', getStatus: 'getStatus'})
})
export default class SprintTaskComponent extends Vue {
  @Prop() task!: TaskInterface
  @Prop() sprintId!: number
  @Prop() small!: boolean
  @Prop() full!: boolean
  private dialogForm = false
  private dialog = false

  private changeDialogForm(val: boolean): void {
    this.dialogForm = val
  }

  private changeDialog(val: boolean): void {
    this.dialog = val
  }

  private deleteTaskInSprint(task: TaskInterface): void {
    backlogModule.actions.addTask(task)
    sprintModule.actions.deleteTaskFromSprint({sprintId: this.sprintId, taskId: task.id || 0})
  }

  private changeTaskInSprint(form: TaskInterface): void {
    sprintModule.actions.changeTaskFromSprint({sprintId: this.sprintId, task: form})
  }
}
</script>