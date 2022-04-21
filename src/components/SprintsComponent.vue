<template>
  <div>
    <div
      v-if="!sprints.length"
      class="pt-3"
    >
      You don't have any sprints yet
    </div>
    <v-card
      v-for="sprint in sprints"
      :key="sprint.id"
      class="mt-4 pb-2"
      :sprint="sprint"
    >
      <v-card-title class="d-flex justify-space-between">
        <SprintFormComponent
          class="pr-8"
          :form-data="sprint"
        >
          <template #beforeForm="{isForm,changeIsForm}">
            <div
              v-if="!isForm"
              class="d-flex"
            >
              <router-link
                class="text-decoration-none"
                style="color: inherit"
                :to="'sprint/'+sprint.id"
              >
                {{ sprint.name }}
              </router-link>
              <v-btn
                class="ml-1"
                icon
                small
                @click="changeIsForm()"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
          </template>
        </SprintFormComponent>
        <v-btn
          style="position: absolute;  top:16px;  right: 16px;"
          icon
          small
          @click="deleteSprint(sprint.id)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text
        v-if="!sprint.tasks.length"
        class="py-0"
      >
        <span>You don't have any tasks yet</span>
      </v-card-text>

      <draggable
        :delay="50"
        :list="Object.assign([],sprint.tasks)"
        group="id"
        class="ma-2"
        @change="(v)=>changeTaskInSprint(sprint.id,v)"
      >
        <SprintTaskComponent
          v-for="task in sprint.tasks"
          :key="task.id"
          :task="task"
          :sprint-id="sprint.id"
        />
      </draggable>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {DraggableInterface, SprintInterface} from '@/interfaces'
import {sprintMapper, sprintModule} from '@/store'
import draggable from 'vuedraggable'

@Component({
  name: 'SprintsComponent',
  components: {
    draggable,
    SprintFormComponent: () => import('@/components/SprintFormComponent.vue'),
    SprintTaskComponent: () => import('@/components/SprintTaskComponent.vue')
  },
  computed: sprintMapper.mapGetters(['sprints'])
})
export default class SprintsComponent extends Vue {
  @Prop() sprint!: SprintInterface

  deleteSprint(sprintId: number): void {
    sprintModule.actions.deleteSprint(sprintId)
  }

  changeTaskInSprint(sprintId: number, val: DraggableInterface): void {
    if (val.added) {
      sprintModule.actions.addTaskForSprint({
        sprintId: sprintId || 0,
        newIndex: val.added.newIndex,
        task: val.added.element
      })
    }
    if (val.removed) {
      sprintModule.actions.deleteTaskFromSprint({
        sprintId: sprintId || 0,
        taskId: val.removed.element.id || 0
      })
    }
    if (val.moved) {
      sprintModule.actions.moveTaskFromSprint({
        sprintId: sprintId || 0,
        newIndex: val.moved.newIndex,
        oldIndex: val.moved.oldIndex
      })
    }
  }
}
</script>
