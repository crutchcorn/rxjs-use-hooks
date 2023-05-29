import { describe, test, expect } from "vitest";
import { useObservable } from "rxjs-use-hooks";
import { BehaviorSubject, Subject } from "rxjs";
import { render } from "@testing-library/react";
import { useSubject } from "./useSubject";

describe("useSubject", () => {
  test("should get value immediately from BehaviorSubject", async () => {
    const subject = new BehaviorSubject(false);

    const Comp = () => {
      const [state] = useSubject(subject);

      return <p>{`${state}`}</p>;
    };

    const { findByText } = render(<Comp />);
    expect(await findByText("false")).toBeInTheDocument();
    subject.next(true);
    expect(await findByText("true")).toBeInTheDocument();
  });

  test("should propagate value change to Subject", async () => {
    const subject = new BehaviorSubject(false);

    const Comp = () => {
      const [state, setState] = useSubject(subject);

      return (
        <div>
          <p>{`${state}`}</p>
          <button onClick={() => setState(true)}>Set true</button>
        </div>
      );
    };

    const { findByText } = render(<Comp />);

    expect(await findByText("false")).toBeInTheDocument();
    user.click(await findByText("Set true"));
    expect(await findByText("true")).toBeInTheDocument();
  });
});
