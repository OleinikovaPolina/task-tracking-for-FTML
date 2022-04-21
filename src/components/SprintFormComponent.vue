<template>
  <div>
    <slot
      name="beforeForm"
      :is-form="isForm"
      :change-is-form="changeIsForm"
    />
    <v-row
      v-if="isForm"
      align="center"
    >
      <v-col
        cols="6"
        md="8"
        class="py-0"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="form.name"
            label="Name"
            outlined
            dense
            :rules="rules.required"
            hide-details
          />
        </v-form>
      </v-col>
      <v-col
        cols="4"
        md="4"
      >
        <v-btn
          fab
          x-small
          dark
          class="mr-2"
          @click="submit"
        >
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn
          v-if="formData"
          fab
          x-small
          dark
          @click="changeIsForm(false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import {Mixins, Component, Prop, Watch} from 'vue-property-decorator'
import FormMixin from '@/mixins/formMixin'
import {sprintModule} from '@/store'
import {SprintInterface} from '@/interfaces'

@Component({
  name: 'SprintFormComponent'
})
export default class SprintFormComponent extends Mixins(FormMixin) {
  @Prop() formData!: SprintInterface
  private form: SprintInterface = {name: '', tasks: []}
  private isForm = false

  @Watch('isForm')
  formDataChange(newVal: boolean) {
    if (newVal) {
      if (this.formData) {
        this.form = Object.assign({}, this.formData)
      } else {
        this.form = {name: '', tasks: []}
      }
    }
  }

  private changeIsForm(val: boolean | null = null): void {
    this.isForm = val !== null ? val : !this.isForm
  }

  private async submit() {
    await this.validate()
    if(this.valid) {
      if (this.formData) {
        await sprintModule.actions.changeSprint(this.form)
      } else {
        await sprintModule.actions.addSprint(this.form)
      }
      this.form = {name: '', tasks: []}
      this.changeIsForm(false)
    }
  }
}
</script>