import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {GroupService} from "../../service/form/group.service";
import {GroupContext} from "../../service/context/group.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {ComponentTypeEnum} from "../../config/model/component-type.enum";
import {FormElementWrapperComponent} from "../form-element-wrapper/form-element-wrapper.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FormElementWrapperComponent],
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit {

  @Input() groupContext!: GroupContext;

  protected formRxGroup!: FormGroup;

  constructor(
    private readonly groupService: GroupService
  ) {}

  ngOnInit() {
    this.formRxGroup = this.groupService.getFormGroup(this.groupContext.group, this.groupContext.value);
    Object.assign(this.groupContext.validity, {isValid: this.formRxGroup.valid});
    this.formRxGroup.valueChanges.subscribe(newValue => {
      Object.assign(this.groupContext.value, newValue);
      Object.assign(this.groupContext.validity, {isValid: this.formRxGroup.valid});
      console.log(`validation assigned `, this.groupContext.validity);
    });
  }
}
