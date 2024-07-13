import {FormGroupInterface} from "../../model/form-group.interface";

export interface GroupWrapperContext {
  groups: Map<string, FormGroupInterface>;
  value: object;
}
