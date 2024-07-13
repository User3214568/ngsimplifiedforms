import {FormRegistrationService} from "../service/registration/form-registration.service";
import {EventListenerInterface} from "./event-listener.interface";
import {FormRegisterEvent} from "../event/form-register.event";
import {Injectable} from "@angular/core";

@Injectable()
export class FormRegisterEventListener implements EventListenerInterface<FormRegisterEvent> {
  constructor(private readonly formRegisterService: FormRegistrationService) {}

  register(): void {
    document.addEventListener(FormRegisterEvent.EVENT_ID, (event) => this.run(event as FormRegisterEvent));
  }

  run(event: FormRegisterEvent): void {
    console.log(`event form register fired}`);
    this.formRegisterService.registerForm(
      event.data,
      event.formId
    );
  }
}
