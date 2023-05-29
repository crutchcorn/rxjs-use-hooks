import { useRef } from "react";
import { Unsubscribable } from "rxjs";
import { useEffectOnce } from "./useEffectOnce";

export const useSubscription = (observable: Unsubscribable) => {
  const isMounted = useRef(false);

  useEffectOnce(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    return () => observable.unsubscribe();
  });
};
