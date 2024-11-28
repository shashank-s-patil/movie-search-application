import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  );
}

export default App;
