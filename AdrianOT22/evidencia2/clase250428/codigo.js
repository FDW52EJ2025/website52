//ejemplo while
let tabla = 5;
let cont = 1;
console.log("Tabla con while.");
while(cont <= 10){
    //codigo a repetir
    // multiplicaciones
    console.log(`${tabla}X${cont}=${tabla*cont}`);
    

    //codigo que hace que la condicion en algun momento cambie
    //falso para salir a verdadero para seguir repitiendo
    cont++;
}

/*0..* while
1..* do-while
1..N for*/
cont = 1;
console.log("Tabla con do-while.");
do{
    //codigo a repetir
    // multiplicaciones
    console.log(`${tabla}X${cont}=${tabla*cont}`);
    

    //codigo que hace que la condicion en algun momento cambie
    //falso para salir a verdadero para seguir repitiendo
    cont++;
    /*if(cont==11){
        break;
    }*/
}while(cont <= 10);


function miTabla(){
    let tabla = 5;
    let cont = 1;
    console.log("Tabla con do-while en una funcion.");
    do{
        //codigo a repetir
        // multiplicaciones
        console.log(`${tabla}X${cont}=${tabla*cont}`);
        
    
        //codigo que hace que la condicion en algun momento cambie
        //falso para salir a verdadero para seguir repitiendo
        cont++;
        /*if(cont==11){
            break;
        }*/
    }while(cont <= 10);
}

miTabla();