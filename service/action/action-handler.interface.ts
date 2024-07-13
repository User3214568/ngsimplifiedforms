export interface ActionHandlerInterface {
  context: any;
  onClick: (event: Event) => void;
  onHover: (event: Event) => void;
  onFocus: (event: Event) => void;
}
