import {FormElementAnnotationInterface, FormElementInterface, FormElementType} from "./form-element.interface";

export interface InputFormElementAnnotationInterface extends FormElementAnnotationInterface {
  type: FormElementType.INPUT|FormElementType.EMAIL|FormElementType.PASSWORD|FormElementType.PHONE|FormElementType.NUMBER|
    FormElementType.RADIO|FormElementType.FILE|FormElementType.TEXTAREA;
}

export interface InputFormElement extends Omit<InputFormElementAnnotationInterface, 'groupName'>, Omit<FormElementInterface, 'type'> {

}
