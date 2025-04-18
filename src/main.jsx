import React from "react";               {/*imports core library from React*/}
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



{/*creates root element*/}
ReactDOM.createRoot(document.getElementById('root')).render(              
  <React.StrictMode>                     {/*a wrapper component that enables additional React development checks and warnings.*/}
    <App />
  </React.StrictMode>
)