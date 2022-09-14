import { useState, useRef, useEffect } from "react";
import Modal from './Modal'


export default function Item({ id, word, meaning, example }) {

  return (
    <>
     <label htmlFor={id} className="btn modal-button w-full h-full p-2 break-all">{word}</label>
    <Modal id={id} word={word} meaning={meaning} example={example} />
    </>
  );
}
