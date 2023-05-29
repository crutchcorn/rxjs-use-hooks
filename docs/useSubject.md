# `useSubject`

Bind an RxJS [`Subject`](https://rxjs.dev/guide/subject) to a state array and propagate value changes both ways.

## Usage

```tsx
import { useSubject } from 'rxjs-use-hooks'
import { Subject } from 'rxjs'

const subject = new Subject()

// Comp()
const subjectRef = useSubject(subject)
```

If you want to add custom error handling to a Subject that might error, you can supply an optional `onError` configuration.
Without this, RxJS will treat any error in the supplied observable as an "unhandled error" and it will be thrown in a
new call stack and reported to `window.onerror`.

```tsx
import { useSubject } from 'rxjs-use-hooks'
import { Subject } from 'rxjs'

const subject = new Subject()

// Comp()
const subjectRef = useSubject(subject,
  {
    onError: (err) => {
      console.log(err.message) // "oops"
    },
  },
)
```

## Type Declarations

```ts
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
```
