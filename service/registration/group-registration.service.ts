import {FormGroupAnnotationInterface, FormGroupInterface} from "../../model/form-group.interface";
import {FormElementAnnotationInterface, FormElementInterface} from "../../model/form-element.interface";
import {GroupComponent} from "../../component/group/group.component";
import {FormElementRegistrationService} from "./form-element-registration.service";
import {Injectable} from "@angular/core";

@Injectable()
export class GroupRegistrationService {

  constructor(private readonly formElementRegisterService: FormElementRegistrationService) {}
  getGroupsMap(groups?: FormGroupAnnotationInterface[]): Map<string, FormGroupInterface> {
    const map = new Map<string, FormGroupInterface>();
    if (!groups) {
      map.set('default', this.getDefaultGroup());
      return map;
    }
    groups.forEach((group) => {
      map.set(group.name, {
        ...group,
        component: GroupComponent,
        formElements: new Map<string, FormElementInterface>()
      })
    })
    return map;
  }

  getDefaultGroup(): FormGroupInterface {
    return {
      name: 'default',
      component: GroupComponent,
      formElements: new Map<string, FormElementInterface>()
    }
  }

  addFormElementToGroup(formElement: FormElementAnnotationInterface, elementName: string, groups: Map<string, FormGroupInterface>) {
    const group = groups.get(formElement.groupName ?? 'default');
    if (group) {
      this.formElementRegisterService.addFormElement(formElement, elementName, group.formElements);
    }
  }
}
