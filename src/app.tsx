import {useState} from 'preact/hooks';
import './app.scss';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src="/profile.png" class="logo" alt="My photo" />
      </div>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
