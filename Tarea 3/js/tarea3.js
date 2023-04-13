function impar(){
    let numb = document.getElementById('impar').value;
    if(numb % 2 === 0){
        alert('El número es Par')
        return true;
    }
    else{
        alert('El número es Impar')
        return false;
    }
}
function mayusc(){
    let chain = document.getElementById('mayus').value;
    if (chain.toUpperCase() === cadena) {
        alert("La cadena está formada solo por mayúsculas.");
    } else if (chain.toLowerCase() === chain) {
        alert("La cadena está formada solo por minúsculas.");
    } else if (chain.toLowerCase() !== chain.toUpperCase()) {
        alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    } 
}
function palindro(){
    let pal = document.getElementById('Palindromo').value;
    if (pal.length < 1) {
        return true;
    } else {
        if (pal[0] == pal[pal.length - 1]) {
        return palindro(pal.slice(1, -1));
        } else {
        return false;
        }
    }
}