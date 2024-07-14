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
  TEXT = 'input',
  FILE = 'file',
  DATE = 'date',
  SELECT = 'select',
  RADIO = 'radio',
  TEXT_AREA = 'textarea',
  EMAIL = 'mail',
  NUMBER = 'number',
  PHONE = 'tel',
  PASSWORD = 'passwprd',
  CHECKBOX = 'checkbox',
}
