import {FormElementAnnotationInterface, FormElementInterface, FormElementType} from "./form-element.interface";

export interface SelectableFormElementAnnotationInterface extends FormElementAnnotationInterface {
  type: FormElementType.SELECT|FormElementType.RADIO|FormElementType.CHECKBOX;
  options: SelectableOptionAnnotationInterface[];
  multipleChoices?: boolean;
}

export interface SelectFormElementAnnotationInterface extends Omit<SelectableFormElementAnnotationInterface, 'type'> {
}

export interface CheckboxFormElementAnnotationInterface extends Omit<SelectableFormElementAnnotationInterface, 'multipleChoices'|'type'> {}

export interface RadioFormElementAnnotationInterface extends Omit<SelectableFormElementAnnotationInterface, 'multipleChoices'|'type'> {}


export interface SelectableFormElementInterface extends Omit<SelectableFormElementAnnotationInterface, 'groupName'>, Omit<FormElementInterface, 'type'> {
  options: SelectableOptionInterface[];
}

export interface SelectableOptionAnnotationInterface {
  value: string;
  label: string;
}


export interface SelectableOptionInterface extends SelectableOptionAnnotationInterface {

}
