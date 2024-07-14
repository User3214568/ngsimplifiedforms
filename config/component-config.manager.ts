import {COMPONENT_CONFIG_TOKEN, ComponentConfigInterface} from "./model/component-config.interfacel";
import {StepComponent} from "../component/step/step.component";
import {GroupComponent} from "../component/group/group.component";
import {ActionComponent} from "../component/action/action.component";
import {InputComponent} from "../component/input/input.component";
import {SelectableComponent} from "../component/selectable/selectable.component";
import {Inject, Injectable} from "@angular/core";
import {ComponentTypeEnum} from "./model/component-type.enum";
import {FormElementType} from "../model/form-element.interface";

@Injectable({
  providedIn: 'root'
})
export class ComponentConfigManager {

  private readonly _components!: ComponentConfigInterface;


  constructor(@Inject(COMPONENT_CONFIG_TOKEN) config: ComponentConfigInterface) {
    this._components = config;
  }

  getComponent(type: ComponentTypeEnum|FormElementType) : any {
    if ((this._components as any)[type]) {
      return (this._components as any)[type];
    }
    switch (type) {
      case ComponentTypeEnum.STEP:
        return StepComponent;

      case ComponentTypeEnum.GROUP:
        return GroupComponent;

      case ComponentTypeEnum.ACTION:
        return ActionComponent;

      case FormElementType.TEXT:
      case FormElementType.EMAIL:
      case FormElementType.PASSWORD:
      case FormElementType.DATE:
      case FormElementType.TEXT_AREA:
      case FormElementType.PHONE:
        return InputComponent;

      case FormElementType.SELECT:
      case FormElementType.RADIO:
      case FormElementType.CHECKBOX:
        return SelectableComponent;

      default: return undefined;
    }
  }

}
