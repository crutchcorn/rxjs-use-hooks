# `useObservable`

Use an RxJS Observable, return a value, and automatically unsubscribe from it when the component is unmounted.

## Usage

```tsx
import { useMemo } from 'react'
import { useObservable } from 'rxjs-use-hooks'
import { interval } from 'rxjs'
import { mapTo, scan, startWith } from 'rxjs/operators'

// Comp()
const obs = useMemo(() => interval(1000).pipe(
  mapTo(1),
  startWith(0),
  scan((total, next) => next + total)
), [])

const count = useObservable(
  obs
)
```

If you want to add custom error handling to an `Observable` that might error, you can supply
an optional `onError` configuration. Without this, RxJS will treat any error in the supplied
`Observable` as an "unhandled error" and it will be thrown in a new call stack and reported
to `window.onerror`.

```tsx
import { useMemo } from 'react'
import { useObservable } from 'rxjs-use-hooks'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

// Comp()
const obs = useMemo(() => interval(1000).pipe(
  map((n) => {
    if (n === 10)
      throw new Error('oops')

    return n + n
  }),
))

const count = useObservable(
  obs,
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  },
)
```

## Type Declarations

```tsx
import { Observable } from "rxjs";
export interface UseObservableOptions<I> {
    onError?: (err: any) => void;
    /**
     * The value that should be set if the observable has not emitted.
     */
    initialValue?: I | undefined;
}
export declare function useObservable<H, I = undefined>(observable: Observable<H>, options?: UseObservableOptions<I | undefined>): H | I | undefined;
```
