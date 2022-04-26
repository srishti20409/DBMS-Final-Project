import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from 'react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter> <StrictMode>
    <App />
  </StrictMode>,</BrowserRouter>);

// ReactDOM.render(
//     <BrowserRouter>
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>,
//   document.getElementById("root")
// );