import {FormGroup} from "@angular/forms";
import {FormElementInterface} from "../../model/form-element.interface";
import {FormGroupInterface} from "../../model/form-group.interface";

export interface FormElementWrapperContext {
  formGroup: FormGroup;
  currentGroup: FormGroupInterface;
  formElements: Map<string, FormElementInterface>;
}
