import {FormComponent} from "../../component/form/form.component";
import {StepComponent} from "../../component/step/step.component";
import {GroupComponent} from "../../component/group/group.component";
import {InputComponent} from "../../component/input/input.component";
import {SelectableComponent} from "../../component/selectable/selectable.component";

export interface ComponentConfigInterface {
  form?: typeof FormComponent;
  step?: typeof StepComponent;
  group?: typeof GroupComponent;
  textInput: typeof InputComponent;
  emailInput: typeof InputComponent;
  passwordInput: typeof InputComponent;
  dateInput: typeof InputComponent;
  selectInput: typeof SelectableComponent;
  radioInput: typeof SelectableComponent;
  checkboxInput: typeof SelectableComponent;
  textAreaInput: typeof InputComponent
  phoneInput: typeof InputComponent;
}
