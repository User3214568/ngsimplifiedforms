import {EventListenerInterface} from "./event-listener.interface";
import {FormRegistrationService} from "../service/registration/form-registration.service";
import {FormElementRegisterEvent} from "../event/form-element-register.event";
import {Injectable} from "@angular/core";

@Injectable()
export class FormElementEventListener implements EventListenerInterface<FormElementRegisterEvent> {

  constructor(private readonly formRegisterService: FormRegistrationService) {}

  register(): void {
    document.addEventListener(FormElementRegisterEvent.EVENT_ID, (event) => this.run(event as FormElementRegisterEvent));
  }

  run(event: FormElementRegisterEvent): void {
    this.formRegisterService.registerFormElement(event.data, event.elementName, event.formId);
  }

}
