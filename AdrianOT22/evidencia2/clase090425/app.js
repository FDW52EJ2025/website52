const TABLA = document.getElementById("tabla");
const TIPO = document.getElementById("tipo");
const BTNMOSTRAR = document.getElementById("btnMostrar");
const LISTATABLA = document.getElementById("listaTabla");
const Fin = document.getElementById("tablaFin");

BTNMOSTRAR.addEventListener("click", e => {
    e.preventDefault();
    /*Obtener valores de los controles*/
    let numTabla = parseInt(TABLA.value);
    let tipoTabla = parseInt(TIPO.value);
    let finTabla = parseInt(Fin.value);

    LISTATABLA.innerHTML = "";
    LISTATABLA.style.border = "2px double black";
    LISTATABLA.style.borderRadius = "5px";
    LISTATABLA.style.listStyle = "none";
    
    LISTATABLA.style.display = "flex";
    LISTATABLA.style.flexWrap = "wrap";

    LISTATABLA.style.gap = "10px 10px";
    LISTATABLA.style.padding = "10px";




    if(tipoTabla==1){
        for(let i=numTabla; i<=finTabla;i++){
            let itemListaul = document.createElement("ul");
            LISTATABLA.appendChild(itemListaul);

            for(let i=1; i<=10;i++){
                let multi = numTabla*i;
                let itemLista = document.createElement("li");
                itemLista.innerHTML=`${numTabla}X${i}=${multi}`;
                itemListaul.appendChild(itemLista);
            }
            numTabla ++;
            itemListaul.style.border = "2px double black";
            itemListaul.style.listStyle = "none";
            itemListaul.style.padding = "5px";
            itemListaul.style.minWidth = "100px";
        }
    }
    else{
        for(let i=numTabla; i<=finTabla;i++){
            let itemListaul = document.createElement("ul");
            LISTATABLA.appendChild(itemListaul);

            for(let i=10; i>=1;i--){
                let multi = numTabla*i;
                let itemLista = document.createElement("li");
                itemLista.innerHTML=`${numTabla}X${i}=${multi}`;
                itemListaul.appendChild(itemLista);
            }

            numTabla ++;
            itemListaul.style.border = "2px double black";
            itemListaul.style.listStyle = "none";
            itemListaul.style.padding = "5px";
            itemListaul.style.minWidth = "100px";
        }
        
    }
});
