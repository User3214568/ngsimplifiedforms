import {FormComponent} from "../component/form/form.component";
import {FormInterface} from "../model/form.interface";

export interface FormServiceInterface {
  getFormInstance(formId: string): FormInterface;
}
