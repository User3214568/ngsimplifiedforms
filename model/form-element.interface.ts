import {CommonInterface} from "./common.interface";

export interface FormElementAnnotationInterface extends CommonInterface {
  groupName?: string;
  description?: string;
  stepNumber?: number;
}

export interface FormElementInterface extends FormElementAnnotationInterface {
  type: FormElementType;
  groupName: string;
  name: string;
}

export enum FormElementType {
  INPUT = 'input',
  FILE = 'file',
  SELECT = 'select',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  EMAIL = 'mail',
  NUMBER = 'number',
  PHONE = 'tel',
  PASSWORD = 'passwprd',
  CHECKBOX = 'checkbox',
}
