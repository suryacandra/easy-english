var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

function loadVoices() {
    // Fetch the available voices.
      var voices = speechSynthesis.getVoices();
    
    // Loop through each of the voices.
      voices.forEach(function(voice, i) {
      // Create a new option element.
          var option = document.createElement('option');
      
      // Set the options value and text.
          option.value = voice.name;
          option.innerHTML = voice.name;
            
      // Add the option to the voice selector.
          voiceSelect.appendChild(option);
      });
  }
  
  // Execute loadVoices.
  loadVoices();
  
  // Chrome loads voices asynchronously.
  window.speechSynthesis.onvoiceschanged = function(e) {
    loadVoices();
  };
  
  
  // Create a new utterance for the specified text and add it to
  // the queue.
  function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
    
    // Set the text.
      msg.text = text;
    
      if (voiceSelect.value) {
          msg.voice = speechSynthesis.getVoices()[113];
      }
    
    // Queue this utterance.
      window.speechSynthesis.speak(msg);
  }
  
  
  // Set up an event listener for when the 'speak' button is clicked.
  button.addEventListener('click', function(e) {
      if (speechMsgInput.value.length > 0) {
          speak(speechMsgInput.value);
      }
  });
  