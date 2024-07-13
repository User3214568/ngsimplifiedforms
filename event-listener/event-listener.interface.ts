export interface EventListenerInterface<T> {
  register() : void;
  run(event: T) : void;
}
