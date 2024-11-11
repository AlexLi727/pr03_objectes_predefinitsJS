document.getElementById("start").addEventListener("click", function(){

    let time = document.getElementById("countdown").innerText = 30;
    var countdown = setInterval(function(){
    time -= 1;

    document.getElementById("countdown").innerText = time;
        document.getElementById("start").addEventListener("click", function(){
            clearInterval(countdown);
        });
    },1000)
})
let ventana1 = "no";
let ventana2 = "no"
document.getElementById("start").addEventListener("click",function(){
    var openWindow = setInterval(function(){

        let newWindow = window.open("", "", `height=500,width=500,left=`+(screen.width-500)/2+`,top=`+(screen.height-500)/2)
        let color = Math.floor(Math.random() * 4);
        

        switch(color){
            case 0:
                newWindow.document.write("<h1 id = color> rojo </h1>");
                newWindow.document.body.style.backgroundColor = "red";
                break;
            case 1:
                newWindow.document.write("<h1 id = color> azul </h1>");
                newWindow.document.body.style.backgroundColor = "blue";
                break;
            case 2:
                newWindow.document.write("<h1 id = color> amarillo </h1>");
                newWindow.document.body.style.backgroundColor = "yellow";
                break;
            case 3:
                newWindow.document.write("<h1 id = color> verde </h1>");
                newWindow.document.body.style.backgroundColor = "green";
                break;
        }
        document.getElementById("start").addEventListener("click", function(){
            clearInterval(openWindow);
        });        
        if(ventana1 == "no"){
            newWindow.document.addEventListener("click", function(){
                ventana1 = newWindow.document.getElementById("color").textContent;
            })
        }else{
            newWindow.document.addEventListener("click", function(){
                ventana2 = newWindow.document.getElementById("color").textContent;
            })
        }
        if(ventana1 == ventana2){
            
        }

        
        
        },3000);
})