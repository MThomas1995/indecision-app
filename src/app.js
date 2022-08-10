import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient  from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);