import {FormGroup} from "@angular/forms";
import {FormElementInterface} from "../../model/form-element.interface";

export interface FormElementWrapperContext {
  formGroup: FormGroup;
  formElements: Map<string, FormElementInterface>;
}
