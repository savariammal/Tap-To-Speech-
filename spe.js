
var speech=new SpeechSynthesisUtterance();

function speak()
{
    // Validate that there is text to speak
    if (textSpeech.value.trim() === "") 
    {
        alert('Please enter some text to speak');
        return;
    }
    
    speech.text=textSpeech.value;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}
