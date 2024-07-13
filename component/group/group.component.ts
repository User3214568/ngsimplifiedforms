import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FormGroupInterface} from "../../model/form-group.interface";
import {GroupService} from "../../service/form/group.service";
import {GroupContext} from "../../service/context/group.context";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit {

  @Input() groupContext!: GroupContext;

  protected formRxGroup!: FormGroup;

  @ViewChild('formElements', {static: true, read: ViewContainerRef}) formElementsHostContainer!: ViewContainerRef;

  constructor(private readonly groupService: GroupService) {}

  ngOnInit() {
    this.formRxGroup = this.groupService.getFormGroup(this.groupContext.group, this.groupContext.value);
    this.formRxGroup.valueChanges.subscribe(newValue => {
      Object.assign(this.groupContext.value, newValue);
    });
    this.groupContext.group.formElements.forEach((element) => {
      const ref = this.formElementsHostContainer.createComponent(element.component);
      ref.setInput('element', element);
      ref.setInput('formGroup', this.formRxGroup);
    });
  }
}
