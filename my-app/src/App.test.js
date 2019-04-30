import React from 'react';
import ReactDOM from 'react-dom';
import Tooted from './pages/Products';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tooted />, div);
  ReactDOM.unmountComponentAtNode(div);
});
