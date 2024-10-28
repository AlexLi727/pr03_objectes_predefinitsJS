document.getElementById("play").addEventListener("click", function(){
    let num = Math.floor(Math.random() * 11);
    document.getElementById("num").innerText = num;
    console.log("hola");
    if(num < 5){
        document.getElementById("num").style.color = "red";
    }else{
        document.getElementById("num").style.color = "green";
    }
    window.open("encerta.html");
})