import {Form} from "../annotation/form.annotation";
import {InputFormElement} from "../annotation/form-element.annotation";
import {FormElementType} from "../model/form-element.interface";

@Form({
  title: 'User create form',
})
export class UserModel {

  @InputFormElement({
    title: 'First name',
    type: FormElementType.INPUT,
    description: 'The fuck is wrong with this shit!'
  })
  private _firstName!: string;


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}
