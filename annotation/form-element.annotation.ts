import {InputFormElementAnnotationInterface} from "../model/input-form-element.interface";
import {FormElementRegisterEvent} from "../event/form-element-register.event";
import {EventQueue} from "../event/event.queue";
import {
  CheckboxFormElementAnnotationInterface,
  RadioFormElementAnnotationInterface,
  SelectableFormElementAnnotationInterface,
  SelectFormElementAnnotationInterface
} from "../model/selectable-form-element.interface";
import {FormElementAnnotationInterface, FormElementType} from "../model/form-element.interface";

function FormElement(formElement: FormElementAnnotationInterface) {
  return (model: any, property: string) => {
    const event = new FormElementRegisterEvent();
    event.formId = model.constructor.name;
    event.data = formElement;
    event.elementName = property;
    EventQueue.dispatchOrQueueEvent(event);
  }
}

export function InputFormElement(formElement: InputFormElementAnnotationInterface) {
  return FormElement(formElement);
}

export function SelectElement(formElement: SelectFormElementAnnotationInterface) {
  const selectableFormElement: SelectableFormElementAnnotationInterface = formElement as SelectableFormElementAnnotationInterface;
  selectableFormElement.type = FormElementType.SELECT;
  return FormElement(formElement);
}

export function RadioElement(formElement: RadioFormElementAnnotationInterface) {
  const selectableFormElement: SelectableFormElementAnnotationInterface = formElement as SelectableFormElementAnnotationInterface;
  selectableFormElement.multipleChoices = false;
  selectableFormElement.type = FormElementType.RADIO;
  return FormElement(formElement);
}

export function CheckboxElement(formElement: CheckboxFormElementAnnotationInterface) {
  const selectableFormElement: SelectableFormElementAnnotationInterface = formElement as SelectableFormElementAnnotationInterface;
  selectableFormElement.multipleChoices = true;
  selectableFormElement.type = FormElementType.CHECKBOX;
  return FormElement(formElement);
}
