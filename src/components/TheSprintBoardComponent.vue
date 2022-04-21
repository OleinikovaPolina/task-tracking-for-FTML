<template>
  <div class="pt-3 d-flex align-center">
    <v-slide-group :show-arrows="$vuetify.breakpoint.smAndDown?false:'always'">
      <v-slide-item
        v-for="(taskArray,n) in tasks"
        :key="n"
      >
        <v-card
          v-if="itemBoardStatus[n].status"
          class="mr-6"
          min-width="150"
          outlined
          :max-width="$vuetify.breakpoint.xs?'80vw':$vuetify.breakpoint.sm?'40vw':'25vw'"
        >
          <v-card-title
            class="py-1"
            :style="{borderBottom: '3px solid '+ getStatus(n+1).color}"
          >
            <v-sheet
              class="rounded mr-1"
              :color="getStatus(n+1).color"
              width="15"
              height="15"
            />
            <span>{{ getStatus(n + 1).name }}</span>
            <v-spacer />
            <v-btn
              x-small
              icon
              @click="itemBoardStatus[n].status=false"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-card-title>
          <draggable
            :list="tasks[n]"
            group="id"
            class="ma-2"
            @change="(v)=>changeTaskInSprint(v,n + 1)"
          >
            <SprintTaskComponent
              v-for="task in taskArray"
              :key="task.id"
              :task="task"
              :sprint-id="parseInt($route.params.id)"
              :small="true"
              :full="true"
            />
          </draggable>
        </v-card>
        <v-card
          v-else
          outlined
          class="mr-6"
        >
          <v-card-title
            style="height: 42px"
            class="py-1 "
            :style="{borderBottom: '3px solid '+getStatus(n+1).color}"
          >
            <v-sheet
              class="rounded"
              :color="getStatus(n+1).color"
              width="15"
              height="15"
            >
              <v-btn
                style="position: absolute"
                x-small
                icon
                width="15"
                height="15"
                @click="itemBoardStatus[n].status=true"
              >
                <v-icon color="white">
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </v-sheet>
          </v-card-title>
          <v-card-title
            class="px-2"
            style="writing-mode: vertical-rl;"
          >
            {{ getStatus(n + 1).name }}
          </v-card-title>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {DraggableInterface, TaskInterface, ItemBoardStatusInterface} from '@/interfaces'
import {applicationMapper, sprintModule} from '@/store'
import draggable from 'vuedraggable'

@Component({
  name: 'TheSprintBoardComponent',
  components: {
    draggable, SprintTaskComponent: () => import('@/components/SprintTaskComponent.vue')
  },
  computed: applicationMapper.mapGetters(['getPriority', 'getStatus'])
})
export default class TheSprintBoardComponent extends Vue {
  @Prop() tasks!: Array<Array<TaskInterface>>
  @Prop() sprintId!: number
  itemBoardStatus: Array<ItemBoardStatusInterface> = [{status: true}, {status: true}, {status: true}, {status: true}, {status: true}]

  private changeTaskInSprint(v: DraggableInterface, status: number): void {
    if (v.added) {
      let newTask = v.added.element
      newTask.status = status
      sprintModule.actions.changeTaskFromSprint({
        sprintId: parseInt(this.$route.params.id.toString()),
        task: newTask
      })
    }
  }
}
</script>