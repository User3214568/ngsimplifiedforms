import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormStepInterface} from "../../model/form-step.interface";
import {StepService} from "../../service/form/step.service";
import {StepContext} from "../../service/context/step.context";
import {StepWrapperContext} from "../../service/context/step-wrapper.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {ComponentTypeEnum} from "../../config/model/component-type.enum";

@Component({
  selector: 'app-step-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './step-wrapper.component.html',
  styleUrl: './step-wrapper.component.scss'
})
export class StepWrapperComponent implements OnInit {

  @Input() stepWrapperContext!: StepWrapperContext;

  @ViewChild('step', {static: true, read: ViewContainerRef}) protected stepHostContainer!: ViewContainerRef;

  protected activeStep!: FormStepInterface;

  constructor(
    private readonly stepService: StepService,
    private readonly componentConfigManager: ComponentConfigManager
  ) {}

  ngOnInit(): void {
    this.activeStep = this.stepService.getDefaultActiveStep(this.stepWrapperContext.steps);
    const ref = this.stepHostContainer.createComponent(
      this.activeStep.component ?? this.componentConfigManager.getComponent(ComponentTypeEnum.STEP)
    );
    const stepContext: StepContext = {
      step: this.activeStep,
      value: this.stepWrapperContext.value,
      editMode: this.stepWrapperContext.editMode
    };
    ref.setInput('stepContext', stepContext);
    (ref.instance as any).stepDataEmitter.subscribe((stepNumber: number) => {
      this.activeStep = this.stepService.getStep(stepNumber, this.stepWrapperContext.steps);
    });
  }
}
