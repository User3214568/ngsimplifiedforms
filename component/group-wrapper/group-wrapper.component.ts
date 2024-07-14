import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GroupWrapperContext} from "../../service/context/group-wrapper.context";
import {GroupContext} from "../../service/context/group.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {ComponentTypeEnum} from "../../config/model/component-type.enum";

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
  constructor(
    private readonly componentConfigManager: ComponentConfigManager
  ) {}

  ngOnInit() {
    this.groupHostContainer.clear();
    this.groupWrapperContext.groups.forEach((group) => {
      const ref = this.groupHostContainer.createComponent(
        group.component ?? this.componentConfigManager.getComponent(ComponentTypeEnum.GROUP)
      );
      const groupContext: GroupContext = {
        group: group,
        value: this.groupWrapperContext.value
      };
      ref.setInput('groupContext', groupContext);
    });
  }
}
