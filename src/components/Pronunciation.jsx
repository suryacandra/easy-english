
import { useLocation, NavLink } from "react-router-dom";

import AddNew from "./Pronunciation/AddNew";
import ListItem from "./Pronunciation/ListItem";

export default function ReadAndListen() {

  if(!window.webkitSpeechRecognition) {
    return <h1 className="p-5">Please use supported browsers like chrome or edge</h1>
  }

  const href = useLocation();


  return (
    <>
      <div className="md:p-5 mt-5 bg-base-300 w-full h-full">
        <div className="tabs tabs-boxed flex items-center justify-evenly p-2">
          <NavLink
            to="/pronunciation"
            className={href.search === "" ? "tab tab-active" : "tab"}
          >
            My Pronunciation
          </NavLink>
          <NavLink
            to="/pronunciation?add"
            className={href.search === "?add" ? "tab tab-active" : "tab"}
          >
            Add New Pronunciation
          </NavLink>
        </div>
        <div>{href.search === "" ? <ListItem /> : <AddNew />}</div>
      </div>
    </>
  );
}
