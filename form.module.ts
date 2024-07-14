import {InjectionToken, Injector, ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RegisterEventListenerService} from "./service/registration/register-event-listener.service";
import {COMPONENT_CONFIG_TOKEN, ComponentConfigInterface} from "./config/model/component-config.interfacel";

export const token = new InjectionToken<ComponentConfigInterface>(
  'app.config',
  { providedIn: 'root', factory: () => {alert('in'); return {}}});

@NgModule({
  imports: []
})
export class FormModule {

  static forRoot(config: ComponentConfigInterface): ModuleWithProviders<FormsModule> {
    (new RegisterEventListenerService()).register();
    return {
      ngModule: FormModule,
      providers: [
        {
          provide: COMPONENT_CONFIG_TOKEN,
          useValue: config
        }
      ]
    };
  }
}
