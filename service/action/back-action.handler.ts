import {AbstractActionHandler} from "./abstract-action.handler";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BackActionHandler extends AbstractActionHandler {
  onClick(event: Event): void {
    this.stepEmitter.emit(this.context.step.stepNumber - 1);
  }

}
