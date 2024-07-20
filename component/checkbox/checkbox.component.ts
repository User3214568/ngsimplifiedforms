import { Component } from '@angular/core';
import {SelectableComponent} from "../selectable/selectable.component";
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent extends SelectableComponent {
  onInputElementChange(target: HTMLInputElement, index: number): void {
    const option = this.formElementContext.formElement.options[index];
    if (!option) {
      throw new Error(`Option with index ${index} not found.`)
    }
    if (target.checked) {
      const control: FormArray<FormControl> = this.formElementContext.controlInstance as FormArray<FormControl>;
      control.at(index).patchValue(option.value);
    }else {
      const control: FormArray<FormControl> = this.formElementContext.controlInstance as FormArray<FormControl>;
      control.at(index).patchValue(false);
    }
  }

  public onSelectionChange(event: Event, index: number) {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.onInputElementChange(target, index);
    }
  }
}
