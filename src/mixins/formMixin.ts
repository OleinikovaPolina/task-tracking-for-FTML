import {Component, Vue} from 'vue-property-decorator'

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface RulesInterface {
    required: Array<(val: any) => boolean | string>
}

@Component
export default class FormMixin extends Vue {
    public valid = true
    public rules: RulesInterface = {
        required: [v => !!v || 'This field is required']
    }
    public customToolbar = [
        [{'header': [false, 1, 2, 3, 4, 5, 6,]}],
        ['bold', 'italic', 'underline', 'strike'],
        [{'header': 1}, {'header': 2}],
        ['blockquote', 'code-block'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],
        [{'color': []}, {'background': []}],
        ['link'],
        ['clean'],
    ]
    $refs!: {
        form: HTMLFormElement,
        editor: HTMLFormElement
    }

    public validate(): void {
        this.$refs.form.validate()
    }

    public resetValidation(): void {
        this.$refs.form.resetValidation()
    }

    public cutTags(str = ''): string {
        return str.replace(/( |<([^>]+)>)/ig, '')
    }
}