import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
