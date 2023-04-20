//Arreglo donde se guardan los núemero y el simbolo
const guard=[];
//Función para presentar en pantalla
function change(val){
    if(isNaN(val)){
        guard.push(parseInt(val))
    }
    document.getElementById('result').value = val
    return val
}
//Función para Ejecutar la asignación aritmetica según corresponda
function equals(){
    guard.map((guardad,index)=>{
        if(guardad[index] === '+'){
            sumar();
        }
        if(guardad[index] === '-'){
            restar();
        }
        if(guardad[index] === '*'){
            Multiplicar();
        }
        if(guardad[index] === '/'){
            Dividir();
        }
    })
}
//Función para devolver una suma
function sumar(){
    guard.map((guardad,index)=>{
        return guardad[0] + guardad[2]
    })
}
//Función para devolver una resta
function restar(){
    guard.map((guardad,index)=>{
        return guardad[0] - guardad[2]
    })
}
//Función para devolver una Multiplicación
function Multiplicar(){
    guard.map((guardad,index)=>{
        return guardad[0] + guardad[2]
    })
}
//Función para devolver una División
function Dividir(){
    guard.map((guardad,index)=>{
        return guardad[0] + guardad[2]
    })
}
//Función para borrar los datos y empezar de nuevo
function erase(){
    guard=[];
    document.getElementById('result').value = 0
}