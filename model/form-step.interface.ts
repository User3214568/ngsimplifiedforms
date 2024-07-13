import {FormGroupAnnotationInterface, FormGroupInterface} from "./form-group.interface";
import {CommonInterface} from "./common.interface";
import {
  FormActionInterface,
  FormCustomActionAnnotationInterface, FormDefaultActionAnnotationInterface,
} from "./form-action.interface";

export interface FormStepAnnotationInterface extends CommonInterface {
  description?: string;
  stepNumber: number;
  groups?: FormGroupAnnotationInterface[];
  actions: (FormCustomActionAnnotationInterface|FormDefaultActionAnnotationInterface)[];
}

export interface FormStepInterface extends Omit<FormStepAnnotationInterface, 'groups'|'actions'> {
  stepNumber: number;
  groups: Map<string, FormGroupInterface>;
  actions: FormActionInterface[];
}
