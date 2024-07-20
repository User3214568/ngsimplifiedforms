import { Component } from '@angular/core';
import {SelectableComponent} from "../selectable/selectable.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent extends SelectableComponent {
  onSelectionChange($event: Event) {
    this.formElementContext.controlInstance?.patchValue(
      ($event.target as HTMLInputElement).value
    )
  }
}
