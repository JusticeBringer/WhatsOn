function hostSound() {
    var sou = document.getElementById("videoOne");
    if (sou.volume === 1){
        sou.volume = 0;
    }
    else{
        sou.volume = 1;
    }
}