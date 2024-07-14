import {FormComponent} from "../../component/form/form.component";
import {StepComponent} from "../../component/step/step.component";
import {GroupComponent} from "../../component/group/group.component";
import {InputComponent} from "../../component/input/input.component";
import {SelectableComponent} from "../../component/selectable/selectable.component";
import {ComponentTypeEnum} from "./component-type.enum";
import {ActionComponent} from "../../component/action/action.component";
import {FormElementType} from "../../model/form-element.interface";
import {InjectionToken} from "@angular/core";

export interface ComponentConfigInterface {
  [ComponentTypeEnum.STEP]?: typeof StepComponent;
  [ComponentTypeEnum.GROUP]?: typeof GroupComponent;
  [ComponentTypeEnum.ACTION]?: typeof ActionComponent;
  [FormElementType.TEXT]?: typeof InputComponent;
  [FormElementType.EMAIL]?: typeof InputComponent;
  [FormElementType.PASSWORD]?: typeof InputComponent;
  [FormElementType.DATE]?: typeof InputComponent;
  [FormElementType.SELECT]?: typeof SelectableComponent;
  [FormElementType.RADIO]?: typeof SelectableComponent;
  [FormElementType.CHECKBOX]?: typeof SelectableComponent;
  [FormElementType.TEXT_AREA]?: typeof InputComponent
  [FormElementType.PHONE]?: typeof InputComponent;
}

export const COMPONENT_CONFIG_TOKEN = new InjectionToken<ComponentConfigInterface>(
  'componentConfig'
);
