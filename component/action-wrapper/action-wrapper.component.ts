import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {ActionWrapperContext} from "../../service/context/action-wrapper.context";
import {ActionContext} from "../../service/context/action.context";
import {act} from "@ngrx/effects";

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

  constructor() {
    this.stepDataEmitter = new EventEmitter<number>();
  }
  ngOnInit() {
    this.actionWrapperContext.step.actions.forEach(action => {
      if ((!this.actionWrapperContext.editMode && !action.onlyForEditMode) ||
        (this.actionWrapperContext.editMode && action.onlyForEditMode)
      ) {
        const ref = this.actionHostContainer.createComponent(action.component);
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
