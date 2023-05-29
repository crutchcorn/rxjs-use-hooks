# `useSubscription`

Use an RxJS [`Subscription`](https://rxjs.dev/guide/subscription) without worrying about unsubscribing from it or creating memory leaks.

## Usage

```tsx
import {useState} from 'react'
import { useSubscription } from 'rxjs-use-hooks'
import { interval } from 'rxjs'

// Comp()
const [count, setCount] = useState(0);

const sub = useMemo(() =>
    interval(1000)
      .subscribe(() => {
        setCount(v => {
          const newVal = v+1
          console.log(newVal)
          return newVal
        });
      })
)
  
// useSubscription call unsubscribe method before unmount the component
useSubscription(() =>
  sub
)
```

## Type Declarations

```ts
export declare function useSubscription(observable: () => Subscription): void;
```
