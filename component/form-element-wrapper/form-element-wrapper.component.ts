import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormElementWrapperContext} from "../../service/context/form-element-wrapper.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {FormElementContext} from "../../service/context/form-element.context";

@Component({
  selector: 'app-form-element-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './form-element-wrapper.component.html',
  styleUrl: './form-element-wrapper.component.scss'
})
export class FormElementWrapperComponent implements OnInit {
  @Input() formElementWrapperContext!: FormElementWrapperContext;

  @ViewChild('formElements', {static: true, read: ViewContainerRef}) formElementsHostContainer!: ViewContainerRef;

  constructor(
    private readonly componentConfigManager: ComponentConfigManager
  ) {}
  ngOnInit() {
    this.formElementWrapperContext.formElements.forEach((element) => {
      const ref = this.formElementsHostContainer.createComponent(
        element.component ?? this.componentConfigManager.getComponent(element.type)
      );
      const context: FormElementContext = {
        formGroup: this.formElementWrapperContext.formGroup,
        formElement: element
      };
      ref.setInput('formElementContext', context);
    });
  }
}
