import type { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import type { UseObservableOptions } from "./useObservable";
import { useCallback, useState } from "react";
import { UseStateArr } from "./types";
import { useEffectOnce } from "./useEffectOnce";

export type UseSubjectOptions<I = undefined> = Omit<
  UseObservableOptions<I>,
  "initialValue"
>;

export function useSubject<H>(
  subject: BehaviorSubject<H>,
  options?: UseSubjectOptions
): UseStateArr<H>;
export function useSubject<H>(
  subject: Subject<H>,
  options?: UseSubjectOptions
): UseStateArr<H | undefined>;
export function useSubject<H>(
  subject: Subject<H>,
  options?: UseSubjectOptions
) {
  const [value, _setValue] = useState(
    subject instanceof BehaviorSubject ? subject.value : undefined
  ) as typeof subject extends BehaviorSubject<H>
    ? UseStateArr<H>
    : UseStateArr<H | undefined>;

  const setValue = useCallback((v: typeof value) => {
    subject.next(v!);
    _setValue(v);
  }, []);

  useEffectOnce(() => {
    const subscription = subject.subscribe({
      next(val) {
        _setValue(val);
      },
      error: options?.onError,
    });
    return () => {
      subscription.unsubscribe();
    };
  });

  return [value, setValue];
}
