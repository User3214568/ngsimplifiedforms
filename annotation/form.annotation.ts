import {FormAnnotationInterface} from "../model/form.interface";
import {FormRegisterEvent} from "../event/form-register.event";
import {EventQueue} from "../event/event.queue";

export function Form(form: FormAnnotationInterface) {
  return (target: any) => {
    const event = new FormRegisterEvent();
    event.formId = target.name;
    event.data = form;
    EventQueue.dispatchOrQueueEvent(event);
    return target;
  }
}
