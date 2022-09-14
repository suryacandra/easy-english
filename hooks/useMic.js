
import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const useMic = () => {
  const [mic, setMic] = useState("");
  const [start, setStart] = useState(false);
  const [audioStart, setAudioStart] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  const [audioOver, setAudioOver] = useState('');

  useEffect(() => {
    setAudioOver(status)
  }, [status]
  )

  let recognition = new window.webkitSpeechRecognition();

  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  let recogLang = "en-US";
  recognition.lang = recogLang;

  recognition.onstart = (e) => {
    setStart(true);
  };

  recognition.onend = (e) => {
    setStart(false);
  };

  recognition.onresult = (e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
    setMic(text);
    stopRecording();
  };

  const startHandler = () => {
    setMic("");
    recognition.start();
    startRecording();
  };

  let audio = new Audio(mediaBlobUrl);

  const reset = () => {
    setMic("");
    setAudioOver("");
  };

  audio.onplaying = (e) => {
    setAudioStart(true);
  };
  audio.onended = (e) => {
    setAudioStart(false);
  };

  return {
    audio,
    mic: mic.replace(/[.,?\s]/g, " ").trim(),
    status: audioOver,
    startHandler,
    reset,
    start,
    audioStart,
  };
};

export default useMic;
