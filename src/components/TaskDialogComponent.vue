<template>
  <div class="text-center">
    <v-dialog
      v-if="Object.keys(task).length"
      :value="dialog"
      max-width="700"
      @input="$emit('changeDialog',$event)"
    >
      <v-card>
        <v-card-title :style="{borderBottom: '3px solid '+ getStatus(task.status).color}">
          <v-sheet
            class="rounded mr-1"
            :color="getStatus(task.status).color"
            width="15"
            height="15"
          />
          <span class="text-h6">{{ task.name }}</span>
          <v-btn
            icon
            @click="$emit('openForm',task)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="mt-2">
          <div>
            <v-icon
              left
              :color="getPriority(task.priority).color"
            >
              {{ getPriority(task.priority).icon }}
            </v-icon>
            Priority: {{ getPriority(task.priority).name }}
          </div>
          <div>
            <v-icon
              left 
              :color="getStatus(task.status).color"
            >
              {{ getStatus(task.status).icon }}
            </v-icon>
            Status: {{ getStatus(task.status).name }}
          </div>
          <div>
            <v-icon
              left
            >
              mdi-clock-plus-outline
            </v-icon>
            Date creation: {{ $moment(task.dateCreation).format('DD.MM.YYYY') }}
          </div>
          <div>
            <v-icon
              left
              color="red"
            >
              mdi-fire
            </v-icon>
            Deadline: {{ $moment(task.deadline).format('DD.MM.YYYY') }}
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="ql-editor px-0"
            style="min-height: 0"
            v-html="task.descriptionLong"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {TaskInterface} from '@/interfaces'
import {applicationMapper} from '@/store'

@Component({
  name: 'TaskDialogComponent',
  computed: applicationMapper.mapGetters({getPriority: 'getPriority', getStatus: 'getStatus'})
})
export default class TaskDialogComponent extends Vue {
  @Prop() task!: TaskInterface
  @Prop() dialog!: boolean
}
</script>