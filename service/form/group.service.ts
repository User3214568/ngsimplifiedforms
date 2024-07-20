import {Injectable} from "@angular/core";
import {FormGroupInterface} from "../../model/form-group.interface";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FormElementType} from "../../model/form-element.interface";
import {SelectableFormElementInterface} from "../../model/selectable-form-element.interface";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private readonly formBuilder: FormBuilder) {}
  getFormGroup(group: FormGroupInterface, currenValue: object): FormGroup {
    const controls: any = {};
    group.formElements.forEach(element => {
      controls[element.name] = [(currenValue as any)[element.name] ?? '', element.validators ? [...element.validators] : []];
      if (element.type === FormElementType.CHECKBOX) {
        controls[element.name] = this.formBuilder.array(
          (element as SelectableFormElementInterface).options.map(e => new FormControl(false))
        );
      }
    })
    return this.formBuilder.group(controls);
  }
}
