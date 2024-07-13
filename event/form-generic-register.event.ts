export class FormGenericRegisterEvent<T> extends Event {

  public static EVENT_ID: string = 'form_generic_register_event';

  private _data!: T;

  private _formId!: string;

  constructor(eventType: string) {
    super(eventType);
  }

  get formId(): string {
    return this._formId;
  }

  set formId(value: string) {
    this._formId = value;
  }

  set data(data: T) {
    this._data = data;
  }

  get data() : T {
    return this._data;
  }
}
