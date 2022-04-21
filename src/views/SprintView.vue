<template>
  <div v-if="sprint">
    <div class="text-h5">
      {{ sprint.name }}
    </div>

    <v-tabs
      v-model="tab"
      color="#9e4dd6"
    >
      <v-tabs-slider />

      <v-tab
        class="px-0"
        @click="clickTab(0)"
      >
        TaskBoard
      </v-tab>
      <v-tab
        class="px-0"
        @click="clickTab(1)"
      >
        Backlog
      </v-tab>
    </v-tabs>

    <v-tabs-items
      v-model="tab"
      class="pt-4"
    >
      <v-tab-item>
        <TheSprintBoardComponent :tasks="sprintTaskBoard(sprint.id)" />
      </v-tab-item>
      <v-tab-item>
        <div>
          <div class="d-flex align-center flex-wrap">
            <div class="pr-4">
              Sort by:
            </div>
            <v-radio-group
              :value="filter"
              class="pt-0 mt-0"
              row
              hide-details
            >
              <v-radio
                v-for="item in filterItems"
                :key="item.id"
                :value="item.id"
                :label="item.name"
                class="mr-1"
                @click="clickFilter(item.id)"
              >
                <template #label>
                  <div>{{ item.name }}</div>
                  <v-icon
                    :style="{opacity:filter===item.id?1:0}"
                    small
                  >
                    {{ reverse ? 'mdi-arrow-down-thin' : 'mdi-arrow-up-thin' }}
                  </v-icon>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
          <div
            v-if="!sortTasks().length"
            class="pt-3"
          >
            You don't have any sprints yet
          </div>
          <SprintTaskComponent
            v-for="task in sortTasks()"
            :key="task.id"
            :task="task"
            :full="true"
            :sprint-id="sprint.id"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import {sprintMapper, sprintModule} from '@/store'
import {SprintInterface, TaskInterface} from '@/interfaces'

@Component({
  name: 'SprintView',
  components: {
    TheSprintBoardComponent: () => import('@/components/TheSprintBoardComponent.vue'),
    SprintTaskComponent: () => import('@/components/SprintTaskComponent.vue')
  },
  computed: sprintMapper.mapGetters({sprintTaskBoard: 'sprintTaskBoard', getSprint: 'sprint'})
})
export default class SprintView extends Vue {
  private sprint: SprintInterface | null = null
  private tab = 0
  private reverse = false
  private filter = 0
  private filterItems = [
    {id: 0, name: 'Name'},
    {id: 1, name: 'Creation date'},
    {id: 2, name: 'Deadline'},
    {id: 3, name: 'Priority'}
  ]

  private mounted(): void {
    this.sprint = sprintModule.getters.sprint(parseInt(this.$route.params.id))
    if (!this.sprint) {
      this.$router.push({path: '/notFound'})
    }
    this.routeChange()
  }

  @Watch('$route', {immediate: true, deep: true})
  routeChange() {
    this.filter = parseInt(this.$route.query.filter?.toString()) || 0
    this.reverse = this.$route.query.reverse === 'true'
    this.tab = parseInt(this.$route.query.tab?.toString()) || 0
  }

  private clickTab(newVal: number): void {
    this.$router
        .push({query: {tab: newVal.toString()}})
        .catch(() => ({}))
  }

  private clickFilter(newVal: number): void {
    if (newVal !== this.filter) {
      this.reverse = false
    } else {
      this.reverse = !this.reverse
    }
    this.filter = newVal
    this.$router
        .push({query: {...this.$route.query, filter: this.filter.toString(), reverse: this.reverse.toString()}})
        .catch(() => ({}))
  }

  private sortTasks(): Array<TaskInterface> {
    let sprintTasks: Array<TaskInterface> = Object.assign([], this.sprint?.tasks)
    switch (this.filter) {
      case 0:
        sprintTasks.sort((a, b) => a.name > b.name ? 1 : -1)
        break
      case 1:
        sprintTasks.sort((a, b) => a.dateCreation > b.dateCreation ? 1 : -1)
        break
      case 2:
        sprintTasks.sort((a, b) => a.deadline > b.deadline ? 1 : -1)
        break
      case 3:
        sprintTasks.sort((a, b) => a.priority < b.priority ? 1 : -1)
        break
    }
    if (this.reverse) {
      sprintTasks.reverse()
    }
    return sprintTasks
  }
}
</script>
