import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "containers/Home";
import Menu1 from "containers/Menu1";
import Menu2 from "containers/Menu2";
import Menu3 from "containers/Menu3";
import SubPage from "containers/Sub";
import "assets/css/reset.css"
import "assets/css/style.css"

export default function App() {
  
    return (
      <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Menu1"} element={<Menu1 />}></Route>
                <Route path={"/Menu2"} element={<Menu2 />}></Route>
                <Route path={"/Menu3"} element={<Menu3 />}></Route>
                <Route path={"/SubPage/:id"} element={<SubPage />}></Route>
                {/* <Route path={"/SubPage"} element={<SubPage />}></Route> */}
            </Routes>
          </BrowserRouter>
    </div>
    );
  }