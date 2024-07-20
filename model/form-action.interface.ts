import {CommonInterface} from "./common.interface";
import {AbstractActionHandler} from "../service/action/abstract-action.handler";

export interface FormActionAnnotationInterface extends CommonInterface {
  type: FormActionType.BACK|FormActionType.NEXT|FormActionType.CUSTOM;
  onlyForEditMode?: boolean;
  requireValidation?: boolean;
  handler?: typeof AbstractActionHandler;
}
export interface FormCustomActionAnnotationInterface extends FormActionAnnotationInterface {
  type: FormActionType.CUSTOM;
  handler: typeof AbstractActionHandler;
}

export interface FormDefaultActionAnnotationInterface extends FormActionAnnotationInterface {
  type: FormActionType.BACK|FormActionType.NEXT;
  handler?: typeof AbstractActionHandler;
}

export interface FormActionInterface extends FormActionAnnotationInterface {
  handler: typeof AbstractActionHandler;
}

export enum FormActionType {
  CUSTOM,
  BACK,
  NEXT
}
