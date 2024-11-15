//Al darle al boton start comienza el contador y se muestra en pantalla
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("end").style.display = "block";
    let time = document.getElementById("countdown").innerText = 30;
    var countdown = setInterval(function(){
        document.getElementById("start").addEventListener("click", function(){
            clearInterval(countdown);
        })
    time -= 1;

    document.getElementById("countdown").innerText = time;
        document.getElementById("end").addEventListener("click", function(){
            clearInterval(countdown);
        });
    if(document.getElementById("countdown").innerText == "0"){
        clearInterval(countdown);
    }
    
    },1000)
})


let firstWindow = true;
let savedWindow;
let numWindows = 0;
//Aqui se maneja todas las ventanas, tanto abriendo nuevas, cerrando y modificando ya existentes

//Primeo cambio las propiedades de los botones para cuando empiece la partida
document.getElementById("start").addEventListener("click",function(){
    document.getElementById("windowNumber").innerHTML = "";
    document.getElementById("endgame").innerHTML = "";
    document.getElementById("end").style.display = "block";

    //Esta funcion se activa cuando hacemos click en terminar partida, finaliza el interval de las ventanas, muestra un texto y cambia las propiedades de los botones para ocultar o mostrar otros
    document.getElementById("end").addEventListener("click", function(){
        clearInterval(openWindow);
        firstWindow = true;
        document.getElementById("end").style.display = "none";
        document.getElementById("start").style.display = "block";
        document.getElementById("endgame").innerText = "FIN DE LA PARTIDA";
        document.getElementById("windowNumber").innerText = `HAS GENRADO UN TOTAL DE `+numWindows+` VENTANAS`;
        document.getElementById("start").innerText = "VOLVER A JUGAR"; 
        document.cookie = `Ventanas generadas en la ultima partida =`+numWindows;
    });   

    //Aqui hago añado un intervalo para que se abra una ventana cada 3 segundos
    var openWindow = setInterval(function ventana(){
        let newWindow;
        
        //Aqui creo las ventanas por cada intervalo que pase, si se trata de la primera ventana, esta se posicionara en el centro y en caso contrario en una posicion aleatoria
        if(firstWindow == true){
            newWindow = window.open("", "", `height=500,width=500,left=`+(screen.width-500)/2+`,top=`+(screen.height-500)/2);
            numWindows += 1;
            console.log("xd");
            firstWindow = false;
        }else{
            let positionY = Math.floor(Math.random() * screen.height);
            let positionX = Math.floor(Math.random() * screen.width);
            newWindow = window.open("", "", `height=500,width=500,left=`+positionX+`,top=`+positionY);
            numWindows += 1;
        }

        //Genero un numero aleatorio del 0 al 3 que se le asignara un color a cada ventana
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
        //Esta funcion hace una tarea distinta dependiendo de las ventanas que estemos manejando
        newWindow.document.addEventListener("click",function(){
            //savedWindow es la ventana que se guarda al hacer click
            if(!savedWindow){
                savedWindow = newWindow;
            }else{
                //Aqui comparo si la anterior ventana tiene la misma referencia que la ultima ventana, en caso de True, cambio el color de la ventan y genero otra nueva ventana
                if(savedWindow === newWindow){

                    color = Math.floor(Math.random() * 4);
                    switch(color){
                        case 0:
                            newWindow.document.getElementById("color").innerHTML = "rojo";
                            newWindow.document.body.style.backgroundColor = "red";
                            break;
                        case 1:
                            newWindow.document.getElementById("color").innerHTML = "azul";
                            newWindow.document.body.style.backgroundColor = "blue";
                            break;
                        case 2:
                            newWindow.document.getElementById("color").innerHTML = "amarillo";
                            newWindow.document.body.style.backgroundColor = "yellow";
                            break;
                        case 3:
                            newWindow.document.getElementById("color").innerHTML = "verde";
                            newWindow.document.body.style.backgroundColor = "green";
                            break;
                    }
                    //Ejecuto otra vez la funcion para que la ventana tenga una referencia distinta en lugar de la misma
                    ventana();
                    //Luego quito la varible que contiene la ventana anterior para que se vuelva a tener que hacer dos clicks
                    savedWindow = undefined;
                //Si las ventanas no tienen las misma referencia, miro entonces el color de cada ellas, y si son iguales los cierro
                }else if(newWindow.document.body.style.backgroundColor == savedWindow.document.body.style.backgroundColor){
                    newWindow.close();
                    savedWindow.close();
                    savedWindow = undefined;
                //Si las ventanas no coinciden ni en referencia ni en color simplemente asocio a la ultima venta clickeada a la que se usara para comparar mas adelante
                }else{
                    savedWindow = newWindow;
                }
            }
        })
        

       //Esta funcion se activa al llegar a 0 en el contador y detiene el intervalo, muestra un texto, y oculta y muestra los botones
    if(document.getElementById("countdown").innerText == "0"){
        clearInterval(openWindow);
        firstWindow = true;
        document.getElementById("end").style.display = "none";
        document.getElementById("endgame").style.display = "block";
        document.getElementById("start").style.display = "block";
        document.getElementById("endgame").innerText = "FIN DE LA PARTIDA";
        document.getElementById("windowNumber").innerText = `HAS GENRADO UN TOTAL DE `+numWindows+` VENTANAS`;
        document.getElementById("start").innerText = "VOLVER A JUGAR"; 
        document.cookie = `Ventanas generadas en la ultima partida =`+numWindows;
    }
         
        },3000);
})

document.getElementById("lastGame").innerText = document.cookie;

