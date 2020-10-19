
var flagLogin=true;
var msn='';
var comando;
var flagValidarComando=false;
var validarComandoIngresado;

function validarComando(){
    console.log('Entro a validarComando');
    comando=document.getElementById('comando');
    if(flagValidarComando===false){
        console.log('Entro al if de validar comando');
        msn+='\nIngrese comando prueba: ';
        document.getElementById('area').value = msn;
        flagValidarComando=true;
    }else{
        validarComandoIngresado=comando.value;
        comando.value='';
        console.log(validarComandoIngresado);

        if(validarComandoIngresado==='logout') {
            flagLogin=true;
            msn += '\nSesion cerrada';
            document.getElementById('area').value = msn;
            reloguear();
        }
        if (comando.value === 'touch') {

        }
        if (comando.value === 'sudo chown ') {

        }
        if (comando.value === 'chmod') {

        }
        if (comando.value === 'ls -l') {

        }
        if (comando.value === 'ls') {

        }
        if (comando.value === 'cat') {

        }
        if (comando.value === 'nano') {

        }
        if (comando.value === './') {

        }
        if (comando.value === 'rm') {

        }
        if (comando.value === 'ssh') {

        }
        if (comando.value === 'scp') {

        }
    }
}