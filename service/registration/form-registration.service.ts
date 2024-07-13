import {FormAnnotationInterface, FormInterface} from "../../model/form.interface";
import {FormElementAnnotationInterface} from "../../model/form-element.interface";
import {StepRegistrationService} from "./step-registration.service";
import {FormElementRegistrationService} from "./form-element-registration.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FormRegistrationService {

  private static forms: Map<string, FormInterface>;

  private static queue: Map<string, Array<() => void>>;

  constructor(
    private readonly stepRegistrationService: StepRegistrationService
  ) {}

  public static getInstance(): Map<string, FormInterface> {
    if (!this.forms) {
      this.forms = new Map<string, FormInterface>();
    }
    return this.forms;
  }

  public static getRegistrationQueueInstance(): Map<string, Array<() => void>> {
    if (!this.queue) {
      this.queue = new Map<string, Array<() => void>>();
    }
    return this.queue;
  }

  public registerForm(form: FormAnnotationInterface, formId: string) {
    const steps = this.stepRegistrationService.getStepsMap(form.steps);
    const formInstance : FormInterface = {
      ...form,
      editMode: false,
      steps
    };
    FormRegistrationService.getInstance().set(formId, formInstance);
    this.unQueueFormElementRegistration(formId);
  }

  public unQueueFormElementRegistration(formId: string): void {
    FormRegistrationService.getRegistrationQueueInstance().forEach(callbacks => {
      callbacks.forEach(callback => callback());
    });
  }

  public registerFormElement(formElement: FormElementAnnotationInterface, elementName: string, formId: string) {
    const form = FormRegistrationService.getInstance().get(formId);
    if (!form) {
      const callback = () => {
        const form = FormRegistrationService.getInstance().get(formId);
        if (!form) {
          throw new Error(`form with the id ${formId} not found.`);
        }
        this.stepRegistrationService.addFormElementToStep(formElement, elementName, form.steps);
        FormRegistrationService.getRegistrationQueueInstance().delete(formId);
      };
      const callbacks = FormRegistrationService.getRegistrationQueueInstance().get(formId) ?? [];
      callbacks.push(callback);
      FormRegistrationService.getRegistrationQueueInstance().set(formId, callbacks);
    } else {
      this.stepRegistrationService.addFormElementToStep(formElement, elementName, form.steps);
    }
  }

}
