import {FormStepAnnotationInterface, FormStepInterface} from "../../model/form-step.interface";
import {GroupRegistrationService} from "./group-registration.service";
import {FormGroupInterface} from "../../model/form-group.interface";
import {ActionRegistrationService} from "./action-registration.service";
import {FormElementAnnotationInterface} from "../../model/form-element.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class StepRegistrationService {

  constructor(
    private readonly groupRegistrationService: GroupRegistrationService,
    private readonly actionRegistrationService: ActionRegistrationService
  ) {}
  public getStepsMap(steps?: FormStepAnnotationInterface[]): Map<number, FormStepInterface> {
    const map = new Map<number, FormStepInterface>();
    if (!steps) {
      map.set(1, this.getDefaultStep());
      return map;
    }
    steps.forEach((step) => {
      map.set(step.stepNumber, {
        ...step,
        actions: this.actionRegistrationService.getActionArray(step.actions),
        component: undefined,
        groups: this.groupRegistrationService.getGroupsMap(step.groups)
      });
    });
    return map;
  }

  public addFormElementToStep(formElement: FormElementAnnotationInterface, elementName: string, steps: Map<number, FormStepInterface>): void {
    const step = steps.get(formElement.stepNumber ?? 1);
    if (step) {
      this.groupRegistrationService.addFormElementToGroup(formElement, elementName, step.groups);
    } else {
      throw new Error(`Step ${formElement.stepNumber ?? 1} was not found.`);
    }
  }
  public getDefaultStep(): FormStepInterface {
    const groupMap = new Map<string, FormGroupInterface>();
    const defaultGroup = this.groupRegistrationService.getDefaultGroup();
    groupMap.set(defaultGroup.name, defaultGroup);
    return {
      stepNumber: 1,
      component: undefined,
      groups: groupMap,
      actions: []
    };
  }
}
