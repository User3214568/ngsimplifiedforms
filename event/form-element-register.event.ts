import {FormGenericRegisterEvent} from "./form-generic-register.event";
import {FormElementAnnotationInterface, FormElementInterface} from "../model/form-element.interface";

export class FormElementRegisterEvent extends FormGenericRegisterEvent<FormElementAnnotationInterface> {
  public static override EVENT_ID: string = 'form_element_register_event';

  private _elementName!: string;

  constructor() {
    super(FormElementRegisterEvent.EVENT_ID);
  }


  get elementName(): string {
    return this._elementName;
  }

  set elementName(value: string) {
    this._elementName = value;
  }
}
