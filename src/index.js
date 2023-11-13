import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import 'bulma/css/bulma.min.css';


import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
 import { store } from "./Store/store";
import { Provider }from 'react-redux'
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


    <BrowserRouter>
    <Provider store={store}>

    <App />
    </Provider>
   
    </BrowserRouter>
  
    
  
);