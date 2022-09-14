import { useRef, useState } from "react";
import { AiFillAudio, AiFillSound } from "react-icons/ai";
import useVoice from "../../../hooks/useVoice";
// import { useReactMediaRecorder } from "react-media-recorder";
import useMic from "../../../hooks/useMic";
import { success } from "daisyui/src/colors";

export default function Modal({ word, id }) {

  const { loading: wordLoading, speakWord, cancelVoice } = useVoice("en-US");
  const { audio, status, mic, startHandler, reset, start, audioStart } = useMic();

  const [value, setValue] = useState(1);
  const [nyoba, setnyoba] = useState(false);

  const textRef = useRef();

  if (!window.webkitSpeechRecognition) {
    return <h1>No support</h1>;
  }

  const a = () => {
    const text = textRef?.current?.innerText;
    if (speechSynthesis.speaking) {
      cancelVoice();
    } else {
      speakWord(text, value);
    }
  };

  const speedHandler = () => {
    if (value == 1) setValue(2);
    if (value == 2) setValue(0.2);
    if (value == 0.2) setValue(1);
  };

  const resetHandler = () => {
    setnyoba(true)
    if(nyoba) {
      setnyoba(false)
      reset()
    }
  }


  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" onChange={resetHandler} />
      <label htmlFor={id} className="modal cursor-pointer px-auto">
        <label className="modal-box flex flex-col gap-2 items-center bg-neutral-content text-black relative">
          <h1 className="text-2xl text-center font-bold break-all" ref={textRef}>
            {word}
          </h1>
          <div className="flex gap-12 items-center">
            <AiFillSound
              onClick={a}
              className={`cursor-pointer active:scale-75 text-2xl ${
                wordLoading && "text-green-600"
              }`}
            />
            <div
              className="cursor-pointer bg-base-100 p-2 rounded-xl text-white scale-75 active:scale-50 transition-all duration-300"
              onClick={speedHandler}
            >
              Speed : {value}
            </div>
          </div>
          <div className="text-5xl p-2 rounded-full border-2 border-black cursor-pointer active:scale-75">
            <AiFillAudio className={`${start && 'text-success'}`} onClick={startHandler} />
          </div>
          <div
            className={`flex items-center justify-center
              ${
                mic === "" ? 
                ""
                :
                (
                  mic.toLowerCase() === textRef?.current?.innerText.toLowerCase()
                    ? "alert alert-success"
                    : "alert alert-error"
                )
              }
            `}
          >
            {mic === "" ? (
              ""
            ) : mic.toLowerCase() ===
              textRef?.current?.innerText.toLowerCase() ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <span className="font-bold">{mic}</span>
          </div>
          {status === "stopped" && (
            <div className="flex gap-5 items-center">
              <span>Your Voice :</span>
              <div
                className="text-xl p-2 rounded-full border-2 border-black cursor-pointer active:scale-75"
                onClick={() => audio.play()}
              >
                <AiFillSound className={`${audioStart && 'text-success'}`} />
              </div>
            </div>
          )}
        </label>
      </label>
    </>
  );
}
