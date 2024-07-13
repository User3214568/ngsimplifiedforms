import {
  FormActionInterface,
  FormActionType, FormCustomActionAnnotationInterface, FormDefaultActionAnnotationInterface,
} from "../../model/form-action.interface";
import {NextActionHandler} from "../action/next-action.handler";
import {BackActionHandler} from "../action/back-action.handler";
import {Injectable} from "@angular/core";
import {ActionComponent} from "../../component/action/action.component";

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
      return {
        ...action,
        component: ActionComponent,
        handler: handler
      };
    })
  }
}
