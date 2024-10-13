import {
  FormActionInterface,
  FormActionType, FormCustomActionAnnotationInterface, FormDefaultActionAnnotationInterface,
} from "../../model/form-action.interface";
import {NextActionHandler} from "../action/next-action.handler";
import {BackActionHandler} from "../action/back-action.handler";
import {Injectable} from "@angular/core";
import {act} from "@ngrx/effects";

@Injectable()
export class ActionRegistrationService {
  getActionArray(actions?: Array<FormCustomActionAnnotationInterface|FormDefaultActionAnnotationInterface>): FormActionInterface[] {
    if (!actions) {
      return [];
    }
    return actions.map((action) => {
      let handler = action.handler;
      if (action.type === FormActionType.NEXT) {
       handler = NextActionHandler;
      }
      if (action.type === FormActionType.BACK) {
        handler = BackActionHandler;
      }
      if (!handler) {
        throw new Error(`Undefined ${action.title} action handler`);
      }
      return {
        ...action,
        component: undefined,
        requireValidation: action.requireValidation || action.requireValidation === undefined,
        handler: handler
      };
    })
  }
}
