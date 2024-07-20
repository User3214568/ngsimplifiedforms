import {FormGroupInterface} from "../../model/form-group.interface";
import {ValidityContext} from "./validity.context";

export interface GroupWrapperContext extends ValidityContext {
  groups: Map<string, FormGroupInterface>;
  value: object;
}
