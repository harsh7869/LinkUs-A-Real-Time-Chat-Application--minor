import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider} from "@chakra-ui/react";
<<<<<<< HEAD
import{BrowserRouter, HashRouter} from "react-router-dom"
=======
import{BrowserRouter} from "react-router-dom"
>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
import ChatProvider from './components/context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);


