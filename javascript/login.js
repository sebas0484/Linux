
var comando;
var msn='';
var usuarioActual;
var flagLogueado=false;
var comandoIngresado;

function loginUsuario(maquinaActual){
    console.log('Ingreso a login usuario');
    if(flagLogueado===false){
        console.log('Ingreso al primer if de login usuario');
        comando=document.getElementById('comando');
        msn = msn + comando.value + '\n';
        var usr = comando.value;
        comando.value = '';
        if (verficarUsuario(maquinaActual, usr) === true) {
            console.log('Ingreso al segundo if de login usuario');
            msn += 'Bienvenido ' + usr;
            document.getElementById('area').value = msn;
            comando.value='';
            flagLogueado=true;
        }
        else{
            console.log('Ingreso al else de login usuario');
            msn+='Usuario no encontrado\n' +
                'Usuario: ';
            document.getElementById('area').value = msn;
        }
    }else{
        console.log('Ingreso al segundo else de login usuario');
    }
    console.log('Ingreso a otro lado');
    validarComando();
}