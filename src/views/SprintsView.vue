<template>
  <div class="about">
    <SprintFormComponent>
      <template #beforeForm="{isForm,changeIsForm}">
        <v-btn
          tile
          text
          class="text-capitalize px-1 font-weight-bold mb-2"
          @click="changeIsForm()"
        >
          <v-icon
            left
            :style="{transform: isForm?'rotate(135deg)':''}"
          >
            mdi-plus-circle-outline
          </v-icon>
          Add sprint
        </v-btn>
      </template>
    </SprintFormComponent>
    <SprintsComponent />
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'SprintsView',
  components: {
    SprintFormComponent: () => import( '@/components/SprintFormComponent.vue'),
    SprintsComponent: () => import('@/components/SprintsComponent.vue')
  },
})
export default class SprintsView extends Vue {
}
</script>