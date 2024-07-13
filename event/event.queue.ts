export class EventQueue {

  private static queue: Event[];

  private static eventsRegistrated: boolean = false;

  private static getQueueInstance(): Event[] {
    if (!EventQueue.queue) {
      EventQueue.queue = [];
    }
    return EventQueue.queue;
  }

  static eventsRegistrationCompleted() : void {
    EventQueue.eventsRegistrated = true;
    this.clearQueue();
  }

  public static dispatchOrQueueEvent(event: Event): void {
    if (this.eventsRegistrated) {
      console.log(`event ${(event as any).EVENT_ID} has been dispatched directly`);
      document.dispatchEvent(event);
    } else {
      console.log(`event ${(event as any).EVENT_ID} has been queued`);
      EventQueue.getQueueInstance().push(event);
    }
  }

  public static clearQueue(): void {
    console.log('clearing events queue');
    this.getQueueInstance().forEach(event => {
      console.log(`dispaching event ${(event as any).EVENT_ID}`)
      document.dispatchEvent(event)
    });
    this.queue = [];
  }
}
