<template>
  <div>
    <div class="text-body-1 pb-2">
      If you are exhausted by a long list of tasks, just relax: look at the dogs
    </div>
    <v-btn
      class="mb-2"
      @click="changePicture"
    >
      New dog
    </v-btn>
    <div>{{ error }}</div>
    <div
      v-if="!load || !loadImg"
      class="d-flex align-center justify-center"
      style="height: 70vh"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
    <div v-if="load">
      <div class="d-flex justify-center">
        <video
          v-if="type===0"
          autoplay
          loop
          muted
          style="height: 70vh;width: 100%;"
        >
          <source :src="dog">
        </video>
      </div>
      <v-img
        v-if="type===1"
        :height="loadImg?'70vh':0"
        contain
        :src="dog"
        @load="loadImg=true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {instance} from '@/utils/api'

@Component({
  name: 'RelaxView'
})
export default class RelaxView extends Vue {
  private dog = ''
  private load = false
  private loadImg = false
  private type = -1
  private error = ''

  private async mounted() {
    await this.changePicture()
  }

  private async changePicture() {
    this.load = false
    await instance
        .get('')
        .then(async response => {
          this.error = ''
          this.dog = await response.data.url
          if (this.dog.split('.').pop() === 'mp4') {
            this.type = 0
            this.loadImg = true
          } else {
            this.type = 1
            this.loadImg = false
          }
          this.load = true
        })
        .catch(() => {
          this.dog = require('../assets/dog.png')
          this.type = 1
          this.error = 'Error'
          this.load = true
        })
  }
}
</script>