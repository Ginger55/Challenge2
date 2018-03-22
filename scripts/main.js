
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);



}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



var now = new Date();
var hours = now.getHours();


//18-19 night
if (hours > 17 && hours < 20){
document.write ('<body style="background-color: #cc3300">'); // darkorange
}
//20-21 night
else if (hours > 19 && hours < 22){
document.write ('<body style="background-color: #800000">'); // darker orange
}
//22-4 night
else if (hours > 21 || hours < 5){
document.write ('<body style="background-color: black;">'); //black night
}
//9-17 day
else if (hours > 8 && hours < 18){
document.write ('<body style="background-color: #eded68">'); //yellow day
}
//7-8 day
else if (hours > 6 && hours < 9){
document.write ('<body style="background-color: #ffcc99">');} //lightorange
//5-6 day
else if (hours > 4 && hours < 7){
document.write ('<body style="background-color: #ff6600">'); //orange
}
else {
document.write ('<body style="background-color: white">'); //nothing
}

var img = document.getElementById("spaceship"),
    count = 0,
    tween;

tween = TweenMax.to(img, 2, {left:"8em", repeat:-1, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

function onRepeat() {
  TweenLite.set(box, {backgroundColor:"(" + Math.random() * 255 + ", 90%, 60%)"});
}                           

var box = document.getElementById("txt"),
    count = 0,
    tween;

tween = TweenMax.to(box, 2, {top:"250px", rotation:360, repeat:-1, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});

function onRepeat() {
  TweenLite.set(box, {backgroundColor:"black(" + Math.random() * 255 + ", 90%, 60%)"});
} 


