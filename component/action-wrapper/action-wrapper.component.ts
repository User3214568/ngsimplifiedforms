import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {ActionWrapperContext} from "../../service/context/action-wrapper.context";
import {ActionContext} from "../../service/context/action.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {ComponentTypeEnum} from "../../config/model/component-type.enum";

@Component({
  selector: 'app-action-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './action-wrapper.component.html',
  styleUrl: './action-wrapper.component.scss'
})
export class ActionWrapperComponent implements OnInit {

  @Output() protected stepDataEmitter!: EventEmitter<number>;

  @Input() actionWrapperContext!: ActionWrapperContext;

  @ViewChild('actions', {static: true, read: ViewContainerRef}) actionHostContainer!: ViewContainerRef;

  constructor(private readonly componentConfigManager: ComponentConfigManager) {
    this.stepDataEmitter = new EventEmitter<number>();
  }
  ngOnInit() {
    this.actionWrapperContext.step.actions.forEach(action => {
      if (this.actionWrapperContext.editMode || (!this.actionWrapperContext.editMode && !action.onlyForEditMode)) {
        const ref = this.actionHostContainer.createComponent(
          action.component ?? this.componentConfigManager.getComponent(ComponentTypeEnum.ACTION)
        );
        const actionContext: ActionContext = {
          value: this.actionWrapperContext.value,
          step: this.actionWrapperContext.step,
          action: action,
          editMode: this.actionWrapperContext.editMode
        };
        ref.setInput('actionContext', actionContext);
        (ref.instance as any).stepDataEmitter.subscribe((value: number) => this.stepDataEmitter.emit(value));
      }
    });
  }

}
