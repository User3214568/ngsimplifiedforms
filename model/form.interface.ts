import {FormStepAnnotationInterface, FormStepInterface} from "./form-step.interface";
import {CommonInterface} from "./common.interface";
import {
  FormActionAnnotationInterface,
  FormCustomActionAnnotationInterface,
  FormDefaultActionAnnotationInterface
} from "./form-action.interface";

export interface FormAnnotationInterface extends CommonInterface {
  description?: string;
  editTitle?: string;
  editDescription?: string;
  steps?: FormStepAnnotationInterface[];
  actions?: Array<FormCustomActionAnnotationInterface|FormDefaultActionAnnotationInterface>;
}

export interface FormInputData<T> {
  instance: T;
  editMode: boolean;
}
export interface FormInterface extends Omit<FormAnnotationInterface, 'steps'> {
  steps: Map<number,FormStepInterface>;
  editMode: boolean;
}
