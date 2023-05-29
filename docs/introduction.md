---
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: RxJS Use Hooks
  - - meta
    - property: og:description
      content: Simple-to-use React Hooks for RxJS interop.
---

# `rxjs-use-hooks`

> This is a port of [VueUse's RxJS add-on](https://vueuse.org/rxjs/README.html), enabling a natural way of using RxJS in React.

## Install

```bash
npm i rxjs-use-hooks rxjs
```

## Example

```tsx
import { useObservable } from "rxjs-use-hooks";
import { Observable } from "rxjs";

const obs = new Observable((subscriber) => {
  let count = 0;

  subscriber.next(count++);

  setInterval(() => {
    subscriber.next(count++);
  }, 1000);
});

export default function App() {
  const count = useObservable(obs);
  return <p>{count}</p>;
}
```
