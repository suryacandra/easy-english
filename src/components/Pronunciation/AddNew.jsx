import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPronun } from "../../../store/store";

export default function AddNew() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const wordRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const submitHandler = () => {
    const word = wordRef.current.value;

    if (word.trim().length < 1) {
      setError("Fill the input");
      return;
    }

    const vocab = {
      word,
    };
    dispatch(addPronun(vocab));
    wordRef.current.value = "";
    setLoading(true);
  };
  return (
    <div className="m-5 p-5 bg-base-100 flex flex-col gap-5 items-center">
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
      <span>Word / Phrases</span>
      <input
        ref={wordRef}
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
