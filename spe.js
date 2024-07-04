
var speech=new SpeechSynthesisUtterance();

function speak()
{
    
    speech.text=textSpeech.value;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}