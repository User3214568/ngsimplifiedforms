import {ComponentConfigInterface} from "./model/component-config.interfacel";
import {FormComponent} from "../component/form/form.component";
import {StepComponent} from "../component/step/step.component";
import {GroupComponent} from "../component/group/group.component";
import {ActionComponent} from "../component/action/action.component";
import {InputComponent} from "../component/input/input.component";
import {SelectableComponent} from "../component/selectable/selectable.component";

export class ComponentConfigManager {

  private components!: ComponentConfigInterface;

  constructor() {}

  setComponents(components: ComponentConfigInterface) {
    this.components = components;
  }
  getComponent(type: string) : any {
    if ((this.components as any)[type]) {
      return (this.components as any)[type];
    }
    switch (type) {
      case 'form':
        return FormComponent;

      case 'step':
        return StepComponent;

      case 'group':
        return GroupComponent;

      case 'action':
        return ActionComponent;

      case 'textInput':
      case 'emailInput':
      case 'passwordInput':
      case 'dateInput':
      case 'textAreaInput':
        return InputComponent;

      case 'phoneInput':
      case 'selectInput':
      case 'radioInput':
      case 'checkboxInput': return SelectableComponent;

      default: return undefined;
    }
  }

}
