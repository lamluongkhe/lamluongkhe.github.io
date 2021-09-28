function quay(){
    var so1=Math.round(Math.random()*5+1);
    var so2=Math.round(Math.random()*5+1);
    var so3=Math.round(Math.random()*5+1);
    var tong=so1+so2+so3;
    document.getElementById("s1").innerHTML=so1;
    document.getElementById("s2").innerHTML=so2;
    document.getElementById("s3").innerHTML=so3;
    document.getElementById("tong").innerHTML=tong;
    var audio =new Audio('coin.mp3');
    audio.play();
}