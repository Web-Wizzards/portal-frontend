export type Device = "laptop" | "mobile" | "tab";

export type WindowSize = {
  width: number;
  height: number;
  device: Device;
};
