import {Injectable} from "@angular/core";
import {FormGroupInterface} from "../../model/form-group.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private readonly formBuilder: FormBuilder) {}
  getFormGroup(group: FormGroupInterface, currenValue: object): FormGroup {
    const controls: any = {};
    group.formElements.forEach(element => {
      controls[element.name] = [(currenValue as any)[element.name] ?? '', []];
    })
    return this.formBuilder.group(controls);
  }
}
