import {
  AfterContentChecked,
  AfterViewInit,
  Component, EventEmitter, Input, OnInit,
  Output,
} from '@angular/core';
import {FormStepInterface} from "../../model/form-step.interface";
import {GroupWrapperComponent} from "../group-wrapper/group-wrapper.component";
import {ActionWrapperComponent} from "../action-wrapper/action-wrapper.component";
import {StepContext} from "../../service/context/step.context";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  standalone: true,
  imports: [
    GroupWrapperComponent,
    ActionWrapperComponent
  ],
  styleUrl: './step.component.scss'
})
export class StepComponent implements AfterContentChecked {

  @Output() protected stepDataEmitter: EventEmitter<number>;

  protected valid!: boolean;
  @Input() stepContext!: StepContext;

  constructor() {
    this.stepDataEmitter = new EventEmitter<number>();
  }

  ngAfterContentChecked() {
    this.valid = this.stepContext.validity.isValid;
  }

}
