import {Injector} from "@angular/core";
import {FormRegistrationService} from "./form-registration.service";
import {StepRegistrationService} from "./step-registration.service";
import {GroupRegistrationService} from "./group-registration.service";
import {FormElementRegistrationService} from "./form-element-registration.service";
import {FormRegisterEventListener} from "../../event-listener/form-register.event-listener";
import {FormElementEventListener} from "../../event-listener/form-element.event-listener";
import {ActionRegistrationService} from "./action-registration.service";
import {EventQueue} from "../../event/event.queue";
import {FormInheritanceEventListener} from "../../event-listener/form-inheritance.event-listener";

export class RegisterEventListenerService {

  getInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: FormRegistrationService, useClass: FormRegistrationService },
        { provide: StepRegistrationService, useClass: StepRegistrationService },
        { provide: GroupRegistrationService, useClass: GroupRegistrationService },
        { provide: ActionRegistrationService, useClass: ActionRegistrationService },
        { provide: FormElementRegistrationService, useClass: FormElementRegistrationService },
        { provide: FormRegisterEventListener, useClass: FormRegisterEventListener },
        { provide: FormElementEventListener, useClass: FormElementEventListener },
        { provide: FormInheritanceEventListener, useClass: FormInheritanceEventListener}
      ]
    });
  }
  public register(): void {
    console.log('registrating event listeners');
    const injector = this.getInjector();
    injector.get(FormRegisterEventListener).register();
    injector.get(FormElementEventListener).register();
    injector.get(FormInheritanceEventListener).register();
    EventQueue.eventsRegistrationCompleted();
  }
}
