import {
  Component, EventEmitter, Input,
  Output,
} from '@angular/core';
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
export class StepComponent {

  @Output() protected stepDataEmitter: EventEmitter<number>;

  @Input() stepContext!: StepContext;

  constructor() {
    this.stepDataEmitter = new EventEmitter<number>();
  }
}
