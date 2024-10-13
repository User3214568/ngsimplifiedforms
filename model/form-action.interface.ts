import {CommonInterface} from "./common.interface";

export interface FormActionAnnotationInterface extends CommonInterface {
  type: FormActionType.BACK|FormActionType.NEXT|FormActionType.CUSTOM;
  onlyForEditMode?: boolean;
  requireValidation?: boolean;
  handler?: any;
}
export interface FormCustomActionAnnotationInterface extends FormActionAnnotationInterface {
  type: FormActionType.CUSTOM;
  handler: any;
}

export interface FormDefaultActionAnnotationInterface extends FormActionAnnotationInterface {
  type: FormActionType.BACK|FormActionType.NEXT;
  handler?: any;
}

export interface FormActionInterface extends FormActionAnnotationInterface {
  handler: any;
}

export enum FormActionType {
  CUSTOM,
  BACK,
  NEXT
}
