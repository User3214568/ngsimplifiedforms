import {InputFormElementAnnotationInterface} from "../model/input-form-element.interface";
import {FormElementRegisterEvent} from "../event/form-element-register.event";
import {EventQueue} from "../event/event.queue";

export function InputFormElement(formElement: InputFormElementAnnotationInterface) {
  return (model: any, property: string) => {
    const event = new FormElementRegisterEvent();
    event.formId = model.constructor.name;
    event.data = formElement;
    event.elementName = property;
    EventQueue.dispatchOrQueueEvent(event);
  }
}
