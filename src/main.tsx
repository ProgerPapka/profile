import {render} from 'preact';
import {App} from './app';
import './index.scss';

const rootLoader = document.getElementById('root-loader');
rootLoader?.remove();

render(<App />, document.getElementById('app') as HTMLElement);
