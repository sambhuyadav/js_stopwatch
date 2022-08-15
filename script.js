
var hr= 0;
var min= 0;
var sec= 0 ;
var count= 0;
var start_btn = document.getElementById("start");

var timer=false;

alert("Welcome to stopwatch..")

start_btn.addEventListener("click", startTimer)

function startTimer() {
    if(timer == true){
        return
    }
    else {
        start()
    }
}

function start(){
    timer = true;
    stopwatch();

}

function stop(){
    timer =false;

}

function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";

}

function stopwatch(){
    if(timer == true){
        count = count + 1;

    if(count==100){
      sec=sec+1;
      count=0;
    }
    if(sec==60){
       min=min+1;
       sec=0;
    }

    if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
    }


    var hrString=hr;
    var minString=min;
    var secString=sec;
    var countString=count;


    if(hr<10){
        hrString="0"+ hr;
    }


    if(min<10){
        minString="0"+ min;
    }

    if(sec<10){
        secString="0"+ sec;
    }

    if(count<10){
        countString="0"+ count;
    }




        document.getElementById("hr").innerHTML= hrString;
        document.getElementById("min").innerHTML= minString;
        document.getElementById("sec").innerHTML= secString;
        document.getElementById("count").innerHTML= countString;
        setTimeout("stopwatch()",10);
    }
}
