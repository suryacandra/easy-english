import { useEffect, useState, useRef } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";

import Pronunciation from "./components/Pronunciation";
import Homepage from "./components/Homepage";
import MyVocabulary from "./components/MyVocabulary";
import FlashCard from './components/FlashCard'
import Dialogue from './components/Dialogue'
import Grammar from './components/Grammar'
import NotFound from './components/404'

function App() {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-base-300 items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button m-5 self-start lg:hidden"
          >
            Open Menu
          </label>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/pronunciation" element={<Pronunciation />} />
            <Route path="/my-vocabulary" element={<MyVocabulary />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/flash-card" element={<FlashCard />} />
            <Route path="/dialogue" element={<Dialogue />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 gap-5 text-base-content border-r-2">
            <li>
              <NavLink to="/" activeclassname="active">
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to="/pronunciation" activeclassname="active">
                Pronounciation
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-vocabulary" activeclassname="active">
                Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink to="/grammar" activeclassname="active">
                Grammar
              </NavLink>
            </li>
            <li>
              <NavLink to="/flash-card" activeclassname="active">
                Flash Card
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialogue" activeclassname="active">
                Dialogue
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
