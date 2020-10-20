
var comando;
var flagLogin=true;
var msn='';
var flagLogueado=false;

function comandoIngresado(maquinaActual){
    console.log('Ingreso a comando ingresado');
    comando=document.getElementById('comando');
    if(flagLogin===true){
        console.log('Ingreso al primer if de comando ingresado');
        msn+='\n'+comando.value;
        var comandoIngresado=comando.value;
        comando.value='';
        var login='login';
        if(comandoIngresado===login){
            console.log('Ingreso al segundo if de comando ingresado');
            flagLogin=false;
            msn+='\nUsuario: ';
            document.getElementById('area').value = msn;
        } else{
            console.log('Ingreso al else de comando ingresado');
            msn+='\nDebe iniciar con login';
            document.getElementById('area').value = msn;
        }
    }else{
        console.log('Ingreso al segundo else de comando ingresado');
        if(flagLogueado===false){
            console.log('Ingreso al tercer if de comando ingresado'+flagLogueado);
            loginUsuario(maquinaActual);
        }else{
            console.log('Ingreso al tercer else de comando ingresado');
            loginUsuario(maquinaActual);
        }
    }
}

