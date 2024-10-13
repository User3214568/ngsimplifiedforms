import {FormGenericRegisterEvent} from "./form-generic-register.event";
import {FormInheritanceInterface} from "../model/form-inheritance.interface";

export class FormRegisterInheritanceEvent extends FormGenericRegisterEvent<FormInheritanceInterface> {
  public static override EVENT_ID: string = 'form_inheritance_register_event';

  constructor() {
    super(FormRegisterInheritanceEvent.EVENT_ID);
  }
}
