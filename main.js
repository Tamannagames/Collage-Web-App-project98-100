function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    var img_id = "selfie1"; 

    var speak_data = "Taking your next Selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        take_snapshot(img_id); 
        var speak_data = "Your first selfie has been captured.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    img_id = "selfie2"; 
    setTimeout(function () {
        take_snapshot(img_id); 
        var speak_data = "Your second selfie has been captured.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

   
     img_id = "selfie3"; 
    setTimeout(function () {
        take_snapshot(img_id); 
        var speak_data = "Your third selfie has been captured.";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

function take_snapshot(img_id) {
    
    console.log("Currently captured image id: " + img_id);

   
     Webcam.snap(function (data_uri) {
        var resultElement = document.getElementById("result" + img_id.slice(-1));
        resultElement.innerHTML = '<img src="' + data_uri + '">'; 
    });
}
