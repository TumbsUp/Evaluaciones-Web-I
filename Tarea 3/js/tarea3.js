//Función para verificar que un número sea par o impar
function impar(numb){
    if(numb % 2 === 0){
        alert('El número es Par')
        return true;
    }
    else{
        alert('El número es Impar')
        return false;
    }
}
//Función para Indicar si la cadena de texto contiene mayusculas, minusculas o ambas?
function mayusc(chain){
    if (chain.toUpperCase() === chain) {
        alert("La cadena está formada solo por mayúsculas.");
    } else if (chain.toLowerCase() === chain) {
        alert("La cadena está formada solo por minúsculas.");
    } else if (chain.toLowerCase() !== chain.toUpperCase()) {
        alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    } 
}
//Función la cual indica si una palabra es palindroma o no
function palindro(pal){
    pal2 = pal.toLowerCase().replace(/[\W_]/g, "");
    if (pal2.length < 1) {
        alert('Es palindromo')
        return true;
    } else {
        if (pal2[0] == pal2[pal2.length - 1]) {
        return palindro(pal2.slice(1, -1));
        } else {
            alert('No es palindromo')
        return false;
        }
    }
}