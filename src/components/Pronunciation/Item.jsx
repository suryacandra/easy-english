import React, { useState } from "react";
import Modal from "./Modal";

export default function Item({ word, id }) {

  return (
    <>
      <label htmlFor={id} className="btn modal-button w-full h-full p-2 break-all">{word.slice(0, 50)}{word.length > 50 && ' ...'}</label>
      <Modal word={word} id={id} />
    </>
  );
}
