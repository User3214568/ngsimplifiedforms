import {ActionHandlerInterface} from "./action-handler.interface";
import {ActionContext} from "../context/action.context";
import {EventEmitter} from "@angular/core";
import {ParamMap} from "@angular/router";

export abstract class AbstractActionHandler implements ActionHandlerInterface {

  private _context!: ActionContext;

  private _stepEmitter!: EventEmitter<number>;

  private _params!: ParamMap;

  constructor() {}

  get params(): ParamMap {
    return this._params;
  }

  set params(value: ParamMap) {
    this._params = value;
  }

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

  abstract onClick(event: Event): any;

  onFocus(event: Event): void {}

  onHover(event: Event): void {}

}
