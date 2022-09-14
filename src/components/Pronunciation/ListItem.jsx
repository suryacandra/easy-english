import React from "react";
import { useSelector } from "react-redux";

import Item from "./Item";

export default function ListItem() {
  const pronun = useSelector((state) => state.pronun.pronun);

  return (
    <div className="md:m-5 p-5 flex flex-col gap-10">
        <div className="alert alert-info shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Click word / phrases to pratice pronunciation!</span>
          </div>
        </div>
      <div className="p-5 bg-base-100 grid grid-cols-3 gap-2 items-center place-items-center">
        {pronun.length > 0 ? (
          pronun.map((item) => <Item word={item.word} id={item.id} key={item.id} />)
        ) : (
          <div className="text-center">
            <p className="text-2xl">No words added yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
