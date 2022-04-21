<template>
  <div class="text-center ">
    <v-dialog
      :value="dialog"
      :width="$vuetify.breakpoint.mdAndUp?'75%':'90%'"
      @input="$emit('changeDialog',$event)"
    >
      <v-card v-if="dialog">
        <v-card-title class="text-h5 my-purple">
          {{ form.id ? 'Change task' : 'Create task' }}
        </v-card-title>

        <v-card-text class="py-3">
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
            />

            <v-text-field
              v-model="form.descriptionShort"
              label="Short description"
              outlined
              dense
              :rules="rules.required"
            />

            <vue-editor
              ref="editor"
              v-model="form.descriptionLong"
              :editor-toolbar="customToolbar"
            />

            <div class="text-end ">
              {{ cutTags(form.descriptionLong).length }}
            </div>

            <v-row class="pt-6">
              <v-col
                cols="12"
                md="6"
              >
                <v-autocomplete
                  v-model="form.priority"
                  :items="priority"
                  item-text="name"
                  item-value="id"
                  label="Priority"
                  outlined
                  dense
                  :rules="rules.required"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-autocomplete
                  v-model="form.status"
                  :items="status"
                  item-text="name"
                  item-value="id"
                  label="Status"
                  outlined
                  dense
                  :rules="rules.required"
                />
              </v-col>
            </v-row>

            <v-row class="mt-0">
              <v-col
                cols="12"
                md="6"
                class="pt-0"
              >
                <div>Date creation</div>
                <v-text-field
                  v-model="form.dateCreation"
                  type="Date"
                  outlined
                  dense
                  disabled
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pt-0"
              >
                <div>Deadline</div>
                <v-text-field
                  v-model="form.deadline"
                  type="Date"
                  outlined
                  dense
                  :min="$moment(form.dateCreation).format('YYYY-MM-DD')"
                  :rules="rules.required"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider />

        <v-card-text>
          <v-row
            no-gutters
            justify="space-between"
          >
            <div>
              <v-btn
                :disabled="!valid"
                class="mr-4 mt-3"
                @click="validate"
              >
                Validate
              </v-btn>

              <v-btn
                class="mr-4 mt-3"
                @click="reset"
              >
                Reset Form
              </v-btn>

              <v-btn
                class="mt-3"
                @click="resetValidation"
              >
                Reset Validation
              </v-btn>
            </div>
            <v-btn
              class="mt-3"
              @click="submitForm"
            >
              {{ form.id ? 'Change' : 'Add' }}
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Mixins, Watch} from 'vue-property-decorator'
import {TaskInterface} from '@/interfaces'
import FormMixin from '@/mixins/formMixin'
import {applicationMapper} from '@/store'
import {VueEditor} from 'vue2-editor'

@Component({
  name: 'TaskDialogFormComponent',
  components: {VueEditor},
  computed: applicationMapper.mapGetters(['getStatus', 'getPriority', 'priority', 'status']),
})
export default class TaskDialogFormComponent extends Mixins(FormMixin) {
  @Prop() dialog!: boolean
  @Prop() formProp!: TaskInterface
  private defaultForm: TaskInterface = {
    name: '', descriptionShort: '', descriptionLong: '', priority: 0, status: 0,
    dateCreation: this.$moment().format('YYYY-MM-DD'), deadline: ''
  }
  private form: TaskInterface = Object.assign({}, this.defaultForm)

  @Watch('dialog')
  dialogChange(newVal: boolean) {
    if (newVal) {
      if (!Object.keys(this.formProp).length) {
        this.form = Object.assign({}, this.defaultForm)
        setTimeout(this.resetValidation)
      } else {
        this.form = Object.assign({}, this.formProp)
      }
    }
  }

  async submitForm() {
    await this.validate()
    if (this.valid) {
      this.$emit('submit', this.form)
      this.$emit('changeDialog', false)
    }
  }

  private reset(): void {
    this.form = Object.assign({}, this.defaultForm)
    this.resetValidation()
  }
}
</script>