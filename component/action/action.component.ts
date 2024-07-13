import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormActionInterface} from "../../model/form-action.interface";
import {ActionContext} from "../../service/context/action.context";
import {ActionHandlerInterface} from "../../service/action/action-handler.interface";
import {AbstractActionHandler} from "../../service/action/abstract-action.handler";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent implements OnInit {

  @Output() protected stepDataEmitter: EventEmitter<number>;

  @Input() protected actionContext!: ActionContext;

  protected handler!: ActionHandlerInterface;

  constructor(private readonly injector: Injector) {
    this.stepDataEmitter = new EventEmitter<number>();
  }

  ngOnInit() {
    const handler: AbstractActionHandler = this.injector.get(this.actionContext.action.handler);
    handler.stepEmitter = this.stepDataEmitter;
    handler.context = this.actionContext;
    this.handler = handler;
  }
}
