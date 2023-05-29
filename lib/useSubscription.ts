import { Subscription } from "rxjs";
import { useEffectOnce } from "./useEffectOnce";

export const useSubscription = (observable: () => Subscription) => {
  useEffectOnce(() => {
    const subscribe = observable();
    return () => subscribe.unsubscribe();
  });
};
