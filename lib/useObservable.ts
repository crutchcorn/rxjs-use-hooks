import { Observable } from "rxjs";
import { Dispatch, useState } from "react";
import { useEffectOnce } from "./useEffectOnce";
import { UseStateArr } from "./types";

export interface UseObservableOptions<I> {
  onError?: (err: any) => void;
  /**
   * The value that should be set if the observable has not emitted.
   */
  initialValue?: I | undefined;
}

export function useObservable<H, I = undefined>(
  observable: Observable<H>,
  options?: UseObservableOptions<I | undefined>
): H | I | undefined {
  const [val, setVal] = useState<H | I | undefined>(options?.initialValue);
  useEffectOnce(() => {
    const subscription = observable.subscribe({
      next: (val) => setVal(val as any),
      error: options?.onError,
    });
    return () => {
      subscription.unsubscribe();
    };
  });
  return val;
}
