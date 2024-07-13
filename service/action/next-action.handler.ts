import {AbstractActionHandler} from "./abstract-action.handler";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NextActionHandler extends AbstractActionHandler {
  onClick(event: Event): void {
    console.log(this.context.value);
    console.log(this.context.value);
    this.stepEmitter.emit(1);
  }

}
