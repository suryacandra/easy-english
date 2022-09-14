import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import AddNew from "./Vocabulary/AddNew";
import ListItem from "./Vocabulary/ListItem";

export default function MyVocabulary() {

  if(speechSynthesis.getVoices().filter((i) => i.lang === 'id-ID').length === 0) {
    return <h1 className="p-5">Please use supported browsers like chrome or edge</h1>
  } 

  const href = useLocation();

  return (
    <div className="md:p-5 bg-base-300 w-full h-full">
      <div className="tabs tabs-boxed flex items-center justify-evenly mt-5 p-2">
        <NavLink to="/my-vocabulary" className={
          href.search === "" ? "tab tab-active" : "tab"
        }>
          My Vocabulary
        </NavLink>
        <NavLink to="/my-vocabulary?add" className={
          href.search === "?add" ? "tab tab-active" : "tab"
        }>
          Add New Vocabulary
        </NavLink>
      </div>
      <div>
        {href.search === "" ? <ListItem /> : <AddNew />}
      </div>
    </div>
  );
}
