import {ActionHandlerInterface} from "./action-handler.interface";
import {ActionContext} from "../context/action.context";
import {EventEmitter} from "@angular/core";

export abstract class AbstractActionHandler implements ActionHandlerInterface {

  private _context!: ActionContext;

  private _stepEmitter!: EventEmitter<number>;


  get stepEmitter(): EventEmitter<number> {
    return this._stepEmitter;
  }

  set stepEmitter(value: EventEmitter<number>) {
    this._stepEmitter = value;
  }

  get context(): ActionContext {
    return this._context;
  }

  set context(value: ActionContext) {
    this._context = value;
  }

  abstract onClick(event: Event): void;

  onFocus(event: Event): void {}

  onHover(event: Event): void {}

}
