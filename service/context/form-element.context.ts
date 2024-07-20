import {AbstractControl, FormGroup} from "@angular/forms";
import {FormElementInterface} from "../../model/form-element.interface";
import {SelectableFormElementInterface} from "../../model/selectable-form-element.interface";

export interface FormElementContext {
  formGroup: FormGroup;
  controlInstance: AbstractControl|null;
  formElement: FormElementInterface;
}

export interface SelectableFormElementContext extends FormElementContext {
  formElement: SelectableFormElementInterface;
}
