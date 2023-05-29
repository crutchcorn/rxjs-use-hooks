import { default as userEvent } from "@testing-library/user-event";

declare global {
  // eslint-disable-next-line no-var
  var user: ReturnType<(typeof userEvent)["setup"]>;
}

export {};
