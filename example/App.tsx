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
