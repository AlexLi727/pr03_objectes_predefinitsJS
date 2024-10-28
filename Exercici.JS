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

    document.getElementById("guess").addEventListener("click", function(){
        let num2 = getElementById("guess_number").value;
        if(num == num2){
            getElementById("result").innerHTML = "Has acertado el numero";
        }else{
            getElementById("result").innerHTML = "No has acertado el numero";
        }
    })
})

