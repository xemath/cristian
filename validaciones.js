//let string = "Aa";
let inputNombreUsuario = document.getElementById('dato_nombre_usuario'); // le quito el value, por que si pone el value al principio porque el valor de lo que hay al inicio es ''


function validar_nombre_usuario(string){
    let patron = /^[A-Z]{1}[a-z]*(\s[A-Z]{1}[a-z]*)*\S$/g;
    this.addEventListener('submit', (e)=>{ // puse la funcion en onsubmit en la etiqueta de la forma del html // el this, significa este elemento
        e.preventDefault(); //prevengo la accion por default cuando apreta el boton aceptar para que no se recargue la pagina
        if(patron.test(string)==false){
            console.log("false")

            return false;
        }
        else{
            console.log("true")

            return true;
        }        
    })
}



