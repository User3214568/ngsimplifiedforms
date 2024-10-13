import {EventListenerInterface} from "./event-listener.interface";
import {FormRegisterInheritanceEvent} from "../event/form-register-inheritance.event";
import {FormRegisterEvent} from "../event/form-register.event";
import {FormRegistrationService} from "../service/registration/form-registration.service";
import {Injectable} from "@angular/core";

@Injectable()
export class FormInheritanceEventListener implements EventListenerInterface<FormRegisterInheritanceEvent> {
  constructor(private readonly formRegisterService: FormRegistrationService) {}

  register(): void {
    document.addEventListener(FormRegisterInheritanceEvent.EVENT_ID, (event) => this.run(event as FormRegisterInheritanceEvent));
  }

  run(event: FormRegisterInheritanceEvent): void {
    this.formRegisterService.registerFormInheritance(
      event.data.baseFormId,
      event.data.targetFormId
    );
  }

}
