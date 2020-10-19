
var ip=[
    '196.168.0.1',
    '196.168.0.2',
    '196.168.0.3',
    '196.168.0.4'
]
var flag=true;
var flagLogin=true;
var flagLogueado=false;
var maquinaActual;
var usuarioActual;
var msn='';
var comando;
msn=msn+'Eliga la maquina:\n' +
    'Entrenadores\n' +
    'Estudiantes\n' +
    'Docentes\n' +
    'Universidad\n';
function run() {
    console.log('Ingreso a run');
    comando=document.getElementById('comando');
    if(flag===true){
        console.log('Ingreso a al primer if del run');
        msn=msn+comando.value;
        maquinaActual= comando.value;
        comando.value='';
        if(verficarMaquina(maquinaActual)===true) {
            console.log('Ingreso al segundo if del run');
            msn+='\nIngrese comando: ';
            document.getElementById('area').value = msn;
            flag = false;
        } else{
            console.log('Ingreso al primero else del run');
            msn+='\nMaquina no valida\n';
            document.getElementById('area').value = msn;
        }
    }else{
        console.log('Ingreso al segundo else del run');
        comandoIngresado(maquinaActual);
    }
}