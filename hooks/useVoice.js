import { useState } from "react";

const useVoice = (lang) => {

  const [loading, setLoading] = useState(false);

  const speakWord = (text, speed) => {
    var msg = new SpeechSynthesisUtterance();
    msg.rate = speed || 1 
    if(lang === 'en-US') {
        const voice = speechSynthesis.getVoices().filter((i) => i.lang === lang);
        msg.text = text;
        msg.voice = voice[4] || voice[2];
        speechSynthesis.speak(msg);
    } else
    if(lang === 'id-ID') {
        const voice = speechSynthesis.getVoices().filter((i) => i.lang === lang);
        msg.text = text;
        msg.voice = voice[1] || voice[0];
        speechSynthesis.speak(msg);
    }
    msg.onstart = (e) => {
        setLoading(true);
      };
    msg.onend = (e) => {
      setLoading(false);
    };
  };

  const loadVoices = () => {
    var voices = speechSynthesis.getVoices();
  };

  loadVoices();

  speechSynthesis.onvoiceschanged = function (e) {
    loadVoices();
  };

  const cancelVoice = () => {
    speechSynthesis.cancel()
  }

  
  return {
    loading,
    speakWord,
    cancelVoice
  }

};

export default useVoice
