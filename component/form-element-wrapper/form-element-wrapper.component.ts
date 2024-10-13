import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormElementWrapperContext} from "../../service/context/form-element-wrapper.context";
import {ComponentConfigManager} from "../../config/component-config.manager";
import {FormElementContext} from "../../service/context/form-element.context";
import {FormElementInterface} from "../../model/form-element.interface";

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
    const sortedEntries = new Map<string, FormElementInterface>(
      [...this.formElementWrapperContext.formElements.entries()].sort(
        ([, objA], [, objB]) => (objB.weight ?? 0) - (objA.weight ?? 0)
      )
    );
    sortedEntries.forEach((element) => {
      const ref = this.formElementsHostContainer.createComponent(
        element.component ?? this.componentConfigManager.getComponent(element.type)
      );
      const context: FormElementContext = {
        formGroup: this.formElementWrapperContext.formGroup,
        controlInstance: this.formElementWrapperContext.formGroup.get(element.name),
        formElement: element
      };
      ref.setInput('formElementContext', context);
    });
  }

}
