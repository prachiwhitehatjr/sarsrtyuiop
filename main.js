//Code for setting webcam
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    //Code for triggering the webcam
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    //Code for taking snapshot
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
        });
    }
    
    //Code for importing model
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oyuDFb8NK/model.json',modelLoaded);
    
    //Defining model loaded function
    function  modelLoaded(){
        console.log('modelLoaded');
    }
    
    //Speak Function
    function speak(){
        var synth=Window.speechSynthesis;
        speak_data1="the first prediction is"+prediction1;
        speak_data2="the second prediction is"+prediction2;
        var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
        synth.speak(utterthis);
    }
    