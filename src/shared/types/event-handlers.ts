export type EventHandler<E = Event> = (e: E) => void;

export type OnClickHandler = EventHandler<MouseEvent>;

export interface DefaultHandlers {
  readonly onClick: OnClickHandler;
}
