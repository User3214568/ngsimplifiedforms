import {
  Component, Input, OnInit
} from '@angular/core';
import {FormService} from "../../service/form.service";
import {ActivatedRoute} from "@angular/router";
import {FormInputData, FormInterface} from "../../model/form.interface";
import {StepWrapperComponent} from "../step-wrapper/step-wrapper.component";
import {NgIf} from "@angular/common";
import {StepWrapperContext} from "../../service/context/step-wrapper.context";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  standalone: true,
  imports: [
    StepWrapperComponent,
    NgIf
  ],
  styleUrl: './form.component.scss'
})
export class FormComponent<T> implements OnInit {

  @Input() formInputData!: FormInputData<T>;

  protected _model!: T;

  protected form!: FormInterface;

  protected stepWrapperContext!: StepWrapperContext;

  constructor(
    private readonly formService: FormService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const formData = this.getFormInputData();
    if (formData.instance) {
      this._model = formData.instance;
      this.form = this.formService.getFormInstance(formData.instance['constructor']['name']);
      this.form.editMode = formData.editMode;
      this.stepWrapperContext = {
        steps: this.form.steps,
        value: this._model as object,
        editMode: this.form.editMode ?? false
      };
    }
  }
  getFormInputData(): FormInputData<T> {
    if (this.route.snapshot.data['instance']) {
      return {
        instance: this.route.snapshot.data['instance'],
        editMode: this.route.snapshot.data['editMode']
      };
    }
    return this.formInputData;
  }
}
