function quay() {
    var so1=Math.round(Math.random()*5+1);
    var so2=Math.round(Math.random()*5+1);
    var so3=Math.round(Math.random()*5+1);
    var tong=so1+so2+so3;
    document.getElementById("s1").setAttribute("src","s"+so1+".png");
    document.getElementById("s2").setAttribute("src","s"+so2+".png");
    document.getElementById("s3").setAttribute("src","s"+so3+".png");
    document.getElementById("tong").innerHTML=tong;
    var audio=new Audio("dice.mp3");
    audio.play();
}