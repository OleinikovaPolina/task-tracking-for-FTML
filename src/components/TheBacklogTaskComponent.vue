<template>
  <v-card
    class="mt-4"
    dense
  >
    <v-card-title>
      <div class="d-flex pr-8">
        <div class="d-flex align-start">
          <v-icon
            class="pt-1"
            left
            :color="getPriority(task.priority).color "
          >
            {{ getPriority(task.priority).icon }}
          </v-icon>
          <span
            class="text-h6"
            style="cursor: pointer"
            @click="$emit('openDialog',task)"
          >{{ task.name }}</span>
        </div>
        <v-btn
          class="ml-1"
          small
          icon
          @click="$emit('openForm',task)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <v-btn
        style="position: absolute;  top:16px;  right: 16px;"
        icon
        small
        @click="deleteTask(task.id)"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      {{ task.descriptionShort }}
    </v-card-text>

    <v-card-actions class="px-4">
      <v-icon
        left
        :color="getStatus(task.status).color"
      >
        {{ getStatus(task.status).icon }}
      </v-icon>
      <span>{{ getStatus(task.status).name }}</span>

      <v-spacer />

      <v-icon
        class="mr-1"
        color="red"
      >
        mdi-fire
      </v-icon>
      <span class="subheading">{{ $moment(task.deadline).format('DD.MM.YYYY') }}</span>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {TaskInterface} from '@/interfaces'
import {applicationMapper, backlogModule} from '@/store'

@Component({
  name: 'TheBacklogTaskComponent',
  computed: applicationMapper.mapGetters({getPriority: 'getPriority', getStatus: 'getStatus'})
})
export default class TheBacklogTaskComponent extends Vue {
  @Prop() task!: TaskInterface
  @Prop() dialog!: boolean

  deleteTask(taskId: number):void {
    backlogModule.actions.deleteTask(taskId)
  }
}
</script>