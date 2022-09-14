import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVocab } from "../../../store/store";

export default function AddNew() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const wordRef = useRef();
  const meaningRef = useRef();
  const exampleRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const submitHandler = () => {
    const word = wordRef.current.value;
    const meaning = meaningRef.current.value;
    const example = exampleRef.current.value;
    if (
      word.trim().length < 1 &&
      meaning.trim().length < 1 &&
      example.trim().length < 1
    ) {
      setError("Fill all input");
      return;
    }
    if (word.includes(" ")) {
      setError("Only 1 word for vocabulary");
      return;
    }
    if (meaning.trim().length < 1) {
      setError("Fill the meaning");
      return;
    }
    if (example.trim().length < 1) {
      setError("Fill the Example");
      return;
    }

    const vocab = {
      id: +Date.now(),
      word,
      meaning,
      example,
    };
    dispatch(addVocab(vocab));
    wordRef.current.value = "";
    meaningRef.current.value = "";
    exampleRef.current.value = "";
    setLoading(true);
  };
  return (
    <div className="m-5 p-5 bg-base-100 flex flex-col gap-5 items-center">
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
          <span>You can only add 1 word, the rest is up to you!</span>
        </div>
      </div>
      {loading && (
        <div className="alert alert-success shadow-lg">
          <div>
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
            <span>Your word has been added!</span>
          </div>
        </div>
      )}
      {error !== "" && (
        <div className="alert alert-error shadow-lg">
          <div>
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
            <span>{error}</span>
          </div>
        </div>
      )}
      <span>Word</span>
      <input
        ref={wordRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-1/2"
      />
      <span>Meaning</span>
      <input
        ref={meaningRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-1/2"
      />
      <span>Example</span>
      <input
        ref={exampleRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-1/2"
      />
      <button className="btn btn-primary w-1/2" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}
