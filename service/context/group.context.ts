import {FormGroupInterface} from "../../model/form-group.interface";
import {ValidityContext} from "./validity.context";

export interface GroupContext extends ValidityContext {
  value: object;
  group: FormGroupInterface;
}
