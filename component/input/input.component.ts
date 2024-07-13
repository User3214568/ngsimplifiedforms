import {Component, Input} from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {FormElementInterface} from "../../model/form-element.interface";

@Component({
  selector: '[app-input]',
  standalone: true,
    imports: [
        NgIf,
        NgForOf,
        ReactiveFormsModule,
        HlmInputDirective,
        HlmLabelDirective
    ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input('element') element!: FormElementInterface;
  @Input('formGroup') formGroup!: FormGroup;
}
