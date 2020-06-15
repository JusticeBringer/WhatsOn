function hostSound() {
    var sou = document.getElementById("videoOne");
    if (sou.volume === 1){
        sou.volume = 0;
    }
    else{
        sou.volume = 1;
    }
}

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                document.getElementById("chat").innerHTML += xmlhttp.responseText;
            }
            else if (xmlhttp.status === 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}

if ("SpeechRecognition" in window) {
    // new speech recognition object
    var recognition = new window.SpeechRecognition();

    // This will run when the speech recognition service returns a result
    recognition.onstart = function() {
        console.log("Voice recognition started. Try speaking into the microphone.");
    };

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript);
    };

    // start recognition
    recognition.start();
    //   .....
} else {
    console.log("Speech recognition not supported");
    // code to handle error
}

window.onload = function () {
    setInterval(function () {
        loadXMLDoc();
    }, 3000);
};