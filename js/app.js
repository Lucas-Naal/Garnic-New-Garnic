function aumentar(){
    let cant2 = document.querySelector('#barraVentas').getAttribute('style')

    let entero = (cant2.slice(6,cant2.lastIndexOf('%')));
    //alert(entero)
    if(entero < 100)
        entero = Number (entero) + 5;
        if(entero > 100)
        entero =100
    
    document.getElementById("barraVentas").setAttribute('style','width: ' + entero +'%'); 
    document.getElementById("tagVentas").textContent = entero;
}
function reducir(){
    let cant2 = document.querySelector('#barraVentas').getAttribute('style')

    let entero = (cant2.slice(6,cant2.lastIndexOf('%')));
    //alert(entero)
    if(entero > 0)
    entero = Number (entero) - 5;
    if (entero < 0)
    entero = 0

    document.getElementById("barraVentas").setAttribute('style','width: ' + entero +'%'); 
    document.getElementById("tagVentas").textContent = entero+"%";
}