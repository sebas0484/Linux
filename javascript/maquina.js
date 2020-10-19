var maquinas = [
    'Entrenadores',
    'Estudiantes',
    'Docentes',
    'Universidad'
];

function verficarMaquina (maquina)
{
    console.log('Ingreso a verificar maquina');
    var flag=false;
    for (var i = 0; i < maquinas.length; i++) {
        if(maquina===maquinas[i]){
            console.log('Ingreso al if de verificar maquina');
            flag=true;
        }
    }
    return flag;
}