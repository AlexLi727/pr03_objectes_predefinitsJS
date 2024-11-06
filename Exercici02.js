document.getElementById("start").addEventListener("click", function(){

    let time = document.getElementById("countdown").innerText = 30;
    var countdown = setInterval(function(){

        var openWindow = setInterval(function(){

            let newWindow = window.open("", "", "height=500,width=500");
            let color = Math.floor(Math.random() * 4);
            switch(color){
                case 0:
                    newWindow.document.write("<h1> rojo </h1>");
                    newWindow.document.body.style.backgroundColor = "red";
                    break;
                case 1:
                    newWindow.document.write("<h1> azul </h1>");
                    newWindow.document.body.style.backgroundColor = "blue";
                    break;
                case 2:
                    newWindow.document.write("<h1> amarillo </h1>");
                    newWindow.document.body.style.backgroundColor = "yellow";
                    break;
                case 3:
                    newWindow.document.write("<h1> verde </h1>");
                    newWindow.document.body.style.backgroundColor = "green";
                    break;
            }
            
            
        },3000);

        document.getElementById("start").addEventListener("click", function(){
            clearInterval(openWindow);
            clearInterval(countdown);
        });

        time -= 1;
        document.getElementById("countdown").innerText = time;
    },1000)
    
})