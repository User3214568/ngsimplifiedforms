import {FormGroup} from "@angular/forms";
import {FormElementInterface} from "../../model/form-element.interface";

export interface FormElementContext {
  formGroup: FormGroup;
  formElement: FormElementInterface;
}
