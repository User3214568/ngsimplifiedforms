import {FormGenericRegisterEvent} from "./form-generic-register.event";
import {FormAnnotationInterface} from "../model/form.interface";

export class FormRegisterEvent extends FormGenericRegisterEvent<FormAnnotationInterface> {
  public static override EVENT_ID: string = 'form_register_event';


  constructor() {
    super(FormRegisterEvent.EVENT_ID);
  }
}
