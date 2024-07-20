import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgFor, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet} from "@angular/common";
import {InputComponent} from "../input/input.component";
import {FormElementType} from "../../model/form-element.interface";
import {FormElementContext, SelectableFormElementContext} from "../../service/context/form-element.context";

@Component({
  selector: 'app-selectable',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet
  ],
  templateUrl: './selectable.component.html',
  styleUrl: './selectable.component.scss'
})
export class SelectableComponent extends InputComponent {
  protected readonly FormElementType = FormElementType;
  @Input() override formElementContext!: SelectableFormElementContext;
}
