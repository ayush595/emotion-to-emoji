prediction1= "";
prediction2= "";
Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 95
});
webcamattach= document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML="<img id='dumble' src='"+data_uri+"'/>";
    });
}
model_attach= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3i1dZ5bRf/model.json", modelLoaded);
function modelLoaded() {
    console.log("model is loaded man!!")
}
function speak() {
    var apistored= window.speechSynthesis;
    data1= "The first prediction is " + prediction1;
    data2= "The second prediction is " + prediction2;
    utterspeak= new SpeechSynthesisUtterance(data1 + data2);
    apistored.speak(utterspeak);
        
    }
function check() {
    anything= document.getElementById("dumble");
    model_attach.classify(anything,resultisgot);
    
        
    }
function resultisgot(error, results) {
    if (error) {
        console.log(error);
    
    } else {
    console.log(results);     
    document.getElementById("emotion1").innerHTML= results[0].label;
    document.getElementById("emotion2").innerHTML= results[1].label;
    prediction1= results[0].label;
    prediction2= results[1].label;
    speak();
    if (results[0].label == "happy") {
        document.getElementById("emoji1").innerHTML= "&#128522;";
        
    }
if (results[0].label == "sad")  {
    document.getElementById("emoji1").innerHTML= "&#128543;";

}
if (results[0].label == "angry") {
    document.getElementById("emoji1").innerHTML= "&#128544;";
}
if (results[1].label == "happy") {
    document.getElementById("emoji2").innerHTML= "&#128522;";
}
if (results[1].label == "sad") {
    document.getElementById("emoji2").innerHTML= "&#128543;";
}
if (results[1].label == "angry") {
    document.getElementById("emoji2").innerHTML= "&#128544;";
}
    }
}