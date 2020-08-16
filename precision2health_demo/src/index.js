// npm imports
import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import "./index.scss";


// render the application
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

