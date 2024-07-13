import {Component, Input} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-selectable',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './selectable.component.html',
  styleUrl: './selectable.component.scss'
})
export class SelectableComponent {

}
