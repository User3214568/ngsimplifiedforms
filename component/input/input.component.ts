import {Component, Input} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {FormElementInterface} from "../../model/form-element.interface";
import {FormElementContext} from "../../service/context/form-element.context";

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
  @Input() formElementContext!: FormElementContext;

  public getDefaultErrorMessages(errorKey: string) : any {
    const inputTitle = this.formElementContext.formElement.title ?? this.formElementContext.formElement.name;
    const prePhrase = `The input ${inputTitle} `;
    switch (errorKey) {
      case 'required': return prePhrase + 'is required';
      case 'email': return prePhrase + 'must be an email';
      case 'maxlength': return prePhrase + 'does not respect max length criteria';
      case 'minlength': return prePhrase + 'does not respect min length criteria';
      case 'min': return prePhrase + 'does not respect minimal value criteria';
      case 'max': return prePhrase + 'does not respect maximal value criteria';
      case 'pattern': return prePhrase + 'does not respect pattern';
      default: return prePhrase + 'is not correct'
    }
  }

  protected readonly Object = Object;
}
