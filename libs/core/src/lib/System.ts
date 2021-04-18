export type System = (dt: number) => void;

export type SystemEntry = {
  callback: System;
  priority: number;
};
