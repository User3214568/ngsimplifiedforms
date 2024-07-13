import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FormGroupInterface} from "../../model/form-group.interface";
import {GroupWrapperContext} from "../../service/context/group-wrapper.context";
import {GroupContext} from "../../service/context/group.context";

@Component({
  selector: 'app-group-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './group-wrapper.component.html',
  styleUrl: './group-wrapper.component.scss'
})
export class GroupWrapperComponent implements OnInit {


  @Input() groupWrapperContext!: GroupWrapperContext;

  @ViewChild('group', {static: true, read: ViewContainerRef}) groupHostContainer!: ViewContainerRef;
  constructor() {
  }

  ngOnInit() {
    this.groupHostContainer.clear();
    this.groupWrapperContext.groups.forEach((group) => {
      const ref = this.groupHostContainer.createComponent(group.component);
      const groupContext: GroupContext = {
        group: group,
        value: this.groupWrapperContext.value
      };
      ref.setInput('groupContext', groupContext);
    });
  }
}
