import {FormElementAnnotationInterface, FormElementInterface, FormElementType} from "./form-element.interface";

export interface InputFormElementAnnotationInterface extends FormElementAnnotationInterface {
  type: FormElementType.TEXT|FormElementType.EMAIL|FormElementType.PASSWORD|FormElementType.PHONE|FormElementType.NUMBER|
    FormElementType.RADIO|FormElementType.FILE|FormElementType.DATE|FormElementType.TEXT_AREA;
}

export interface InputFormElement extends Omit<InputFormElementAnnotationInterface, 'groupName'>, Omit<FormElementInterface, 'type'> {

}
