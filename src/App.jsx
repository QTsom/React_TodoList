import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "containers/Home";
import Menu1 from "./containers/Menu1";
import Menu2 from "./containers/Menu2";
import "assets/css/reset.css"
import "assets/css/style.css"

export default function App() {
  
    return (
      <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/containers/Menu1"} element={<Menu1 />}></Route>
                <Route path={"/containers/Menu2"} element={<Menu2 />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
    );
  }