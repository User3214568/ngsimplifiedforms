import {FormServiceInterface} from "./form.service.interface";
import {FormInterface} from "../model/form.interface";
import {FormRegistrationService} from "./registration/form-registration.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FormService implements FormServiceInterface {
  constructor() {}

  getFormInstance(formId: string): FormInterface {
    const form = FormRegistrationService.getInstance().get(formId);
    if (!form) {
      throw new Error(`form ${formId} not found.`);
    }
    return form;
  }
}
