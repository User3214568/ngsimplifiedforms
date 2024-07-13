import {CommonInterface} from "./common.interface";
import {FormElementInterface} from "./form-element.interface";
import {SelectableFormElementAnnotationInterface} from "./selectable-form-element.interface";
import {InputFormElementAnnotationInterface} from "./input-form-element.interface";

export interface FormGroupAnnotationInterface extends CommonInterface {
  name: string;
  formElements: Array<SelectableFormElementAnnotationInterface|InputFormElementAnnotationInterface>;
}
export interface FormGroupInterface extends Omit<FormGroupAnnotationInterface, 'formElements'> {
  formElements: Map<string, FormElementInterface>;
}
