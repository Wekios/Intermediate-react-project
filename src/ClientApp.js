import React from 'react';
import { hydrate } from 'react-dom';
import App from "./App"

// any other browser-only stuff

hydrate(<App />, document.getElementById('root'));