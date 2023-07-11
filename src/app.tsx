import {useState} from 'preact/hooks';
import './app.scss';
import {Button} from './shared/components/button/button';
import {Loader} from './shared/components/loader/loader';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="container container_adaptive">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 center">
          <img src="/profile.png" class="logo" alt="My photo" />
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 center">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
    </div>
  );
}
