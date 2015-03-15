
export class StringConstant {
  constructor(public val:string) {}
  toString() { return this.val; }
  matches(value:string):boolean {
    return this.toString() === value;
  }
}

export class EVENT_TYPES extends StringConstant {
  static Change = new EVENT_TYPES('Change');
}

export class ACTION_SOURCES extends StringConstant {
  static ServerAction = new ACTION_SOURCES('ServerAction');
  static ViewAction = new ACTION_SOURCES('ViewAction');
  static DeviceAction = new ACTION_SOURCES('DeviceAction');
}

export class DOC_STATUSES extends StringConstant {
  static empty = new DOC_STATUSES('empty');
  static fetchingFromServer = new DOC_STATUSES('fetchingFromServer');
  static fetchingLocal = new DOC_STATUSES('fetchingLocal');
  static fetched = new DOC_STATUSES('fetched');
}
