import {FormElementAnnotationInterface, FormElementInterface} from "../../model/form-element.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class FormElementRegistrationService {

  addFormElement(formElement: FormElementAnnotationInterface, elementName: string, formElements: Map<string, FormElementInterface>) {
    console.log(`registration ${elementName}`);
    formElements.set(elementName, {
      ...formElement as FormElementInterface,
      component: undefined,
      name: elementName
    });
  }
}
