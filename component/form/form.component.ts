import {
  Component, OnInit
} from '@angular/core';
import {FormService} from "../../service/form.service";
import {ActivatedRoute} from "@angular/router";
import {FormInterface} from "../../model/form.interface";
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

  protected _model!: T;

  protected form!: FormInterface;

  protected stepWrapperContext!: StepWrapperContext;

  constructor(
    private readonly formService: FormService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const instance: T|undefined = this.route.snapshot.data['instance'];
    if (instance) {
      this._model = instance;
      this.form = this.formService.getFormInstance(instance['constructor']['name']);
      this.form.editMode = this.route.snapshot.data['editMode'] ?? false;
      this.stepWrapperContext = {
        steps: this.form.steps,
        value: this._model as object,
        editMode: this.form.editMode ?? false
      };
    }
  }
}
