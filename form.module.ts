import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RegisterEventListenerService} from "./service/registration/register-event-listener.service";

@NgModule({
  imports: []
})
export class FormModule {
  public static forRoot(): ModuleWithProviders<FormsModule> {
    (new RegisterEventListenerService()).register();

    return {
      ngModule: FormModule
    };
  }
}
