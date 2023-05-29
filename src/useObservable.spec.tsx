import { describe, test, expect } from "vitest";
import { useObservable } from "rxjs-use-hooks";
import { Subject } from "rxjs";
import { render } from "@testing-library/react";

describe("useObservable", () => {
  describe("when initialValue is not provided", () => {
    test("should set the state to undefined before the stream has emitted", async () => {
      const subj = new Subject<string>();

      const Comp = () => {
        const state = useObservable(subj);

        return <p>{state ?? "nothing"}</p>;
      };

      const { getByText } = render(<Comp />);
      expect(getByText("nothing")).toBeInTheDocument();
    });

    test("should set the state from the data emitted on the stream", async () => {});
  });

  describe("when initialValue is provided", () => {
    test("should set the ref's value to initialData before the stream has emitted", () => {});

    test("should set the ref's value from the data emitted on the stream", async () => {});
  });
});
