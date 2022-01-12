webcam.set({
width :350,
  height:300,
  image_format : 'png',
    png_quality:90
  
})

camera = document.getElementById("camera");

Webcam.attach('#camera');
 function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image' src"'+data_uri+"/>
    });
}
                console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.witgoogle.com/models/v_sl95BzE/model.json' ,modelLoaded)
    
    function modelLoaded(){
        console.log(modelLoaded!);
    }
                    function speak(){
            var synth = window.speechsynthesis;
            speak data 1 "The first prediction is" +  prediction_1;
            speak data 1 "And the second prediction is" +  prediction_2;
        var utterThis = new speechsynthesisUtterance( speak_data 1 +  speak_data 2);
        synth.speak(utterThis);
        }
