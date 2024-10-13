import {FormAnnotationInterface} from "../model/form.interface";
import {FormRegisterEvent} from "../event/form-register.event";
import {EventQueue} from "../event/event.queue";
import {FormRegisterInheritanceEvent} from "../event/form-register-inheritance.event";

export function Form(form: FormAnnotationInterface) {
  return (target: any) => {
    const event = new FormRegisterEvent();
    event.formId = target.name;
    event.data = form;
    EventQueue.dispatchOrQueueEvent(event);
    const parent = Object.getPrototypeOf(target).name;
    if (parent) {
      const inheritanceEvent = new FormRegisterInheritanceEvent();
      inheritanceEvent.data = {
        baseFormId: parent,
        targetFormId: target.name
      };
      console.log('XFC: registeation inheritence ', inheritanceEvent.data);
      EventQueue.dispatchOrQueueEvent(inheritanceEvent);
    }
    return target;
  }
}
