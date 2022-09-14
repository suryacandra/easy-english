import { useRef, useState } from "react";
import {
  AiFillSound,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import useVoice from "../../../hooks/useVoice";

export default function Modal({ word, meaning, example, id }) {

  const { loading: wordLoading, speakWord } = useVoice("en-US");
  const { loading: exampleLoading, speakWord: speakExample } =
    useVoice("en-US");
  const { loading: meaningLoading, speakWord: speakMeaning } =
    useVoice("id-ID");

  const wordRef = useRef();
  const meaningRef = useRef();
  const exampleRef = useRef();

  const wordVoice = () => {
    const text = wordRef?.current?.innerText;
    speakWord(text);
  };

  const exampleVoice = () => {
    const text = exampleRef?.current?.innerText;
    speakExample(text);
  };

  const meaningVoice = () => {
    const text = meaningRef?.current?.innerText;
    speakMeaning(text);
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box grid grid-rows-auto  gap-2 place-items-center w-full bg-neutral-content text-black relative break-all">
          <span className="text-sm">Word :</span>
          <span className="text-2xl font-bold leading-relaxed" ref={wordRef}>
            {word}
          </span>
          <AiFillSound
            onClick={wordVoice}
            className={`cursor-pointer active:scale-75 text-xl mb-5 ${
              wordLoading && "text-green-600"
            }`}
          />
          <span className="text-sm">Meaning :</span>
          <span ref={meaningRef} className="text-2xl font-bold leading-relaxed">
            {meaning}
          </span>
          <AiFillSound
            onClick={meaningVoice}
            className={`cursor-pointer active:scale-75 text-xl mb-5 ${
              meaningLoading && "text-green-600"
            }`}
          />
          <span className="text-sm">Example :</span>
          <span ref={exampleRef} className="text-2xl font-bold leading-relaxed">
            {example}
          </span>
          <AiFillSound
            onClick={exampleVoice}
            className={`cursor-pointer active:scale-75 text-xl mb-5 ${
              exampleLoading && "text-green-600"
            }`}
          />
        </label>
      </label>
    </>
  );
}
