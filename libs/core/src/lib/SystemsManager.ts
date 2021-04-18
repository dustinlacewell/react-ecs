import {
    System,
    SystemEntry,
} from "./System";

export class SystemsManager {
  systems: SystemEntry[];

  constructor() {
      this.systems = new Array<SystemEntry>();
  }

  protected sort() {
      this.systems.sort((a, b) => a.priority - b.priority);
  }

  add(callback: System, priority = 0) {
      this.systems.push({ callback, priority });
      this.sort();
  }

  remove(callback: System) {
      const index = this.systems.findIndex((cb) => cb.callback === callback);
      if (index > -1) {
          this.systems.splice(index, 1);
          this.sort();
          return true;
      }
      return false;
  }

  clear() {
      this.systems = [];
  }

  update(dt: number) {
      this.systems.forEach((s) => s.callback(dt));
  }
}
