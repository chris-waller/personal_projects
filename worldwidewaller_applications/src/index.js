// npm imports
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// custom components
import App from './App';

// eslint-disable-next-line react/no-render-return-value
const render = (Component) => ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));
