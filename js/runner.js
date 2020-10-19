
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
document.getElementById('area').value = msn;
function run() {
    comando=document.getElementById('comando');
    if(flag===true){
        msn=msn+comando.value;
        maquinaActual= comando.value;
        comando.value='';
        console.log(maquinaActual+'verificar');
         if(verficarMaquina(maquinaActual)===true) {
             msn+='\nIngrese comando1: ';
             document.getElementById('area').value = msn;
             flag = false;
         }
         else
         {
             msn+='\nMaquina no valida\n';
             document.getElementById('area').value = msn;
         }
    }else{
        comandoIngresado(maquinaActual);
    }
}
 function comandoIngresado(maquinaActual){
    comando=document.getElementById('comando');
     if(flagLogin===true){
         msn+='\n'+comando.value;
         var comandoIngresado=comando.value;
         comando.value='';
         var login='login';
         if(comandoIngresado===login){
             flagLogin=false;
             msn+='\nUsuario: ';
             document.getElementById('area').value = msn;
         } else{
             msn+='\nDebe iniciar con login';
             document.getElementById('area').value = msn;
         }
     }else{
         if(flagLogueado===false){
             loginUsuario(maquinaActual);
         }
         else {

             console.log('Entro al if');
             msn += '\nIngrese comando2: ';
             document.getElementById('area').value = msn;
             var comando2 = document.getElementById('comando');
             console.log(comando2.value);
             validarComando(comando2.value);
         }
     }
 }

 function validarComando(comando){
    console.log('Entro a validarComando');
    console.log(comando);
     if(comando==='logout') {
         flagLogin=true;
         msn += '\nSesion cerrada';
         document.getElementById('area').value = msn;
         comando.value='';
     }
     if (comando.value === 'touch') {
        nombreArchivo=Archivo;
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

 function loginUsuario(maquinaActual){
    comando=document.getElementById('comando');
     msn = msn + comando.value + '\n';
     var usr = comando.value;
     comando.value = '';
     if (verficarUsuario(maquinaActual, usr) === true) {
         msn += 'Bienvenido ' + usr;
         document.getElementById('area').value = msn;
         usuarioActual = usr;
         flagLogueado=true;
     }
     else{
         msn+='Usuario no encontrado\n' +
             'Usuario: ';
         document.getElementById('area').value = msn;

     }
 }

 function verficarMaquina (maquina)
 {
     var flag=false;
     console.log('recibe'+maquina);
     var maquinas = [
         'Entrenadores',
         'Estudiantes',
         'Docentes',
         'Universidad'
     ];
     for (var i = 0; i < maquinas.length; i++) {
         if(maquina===maquinas[i]){
             flag=true;
         }
     }
    return flag;
 }
function verficarUsuario (maquina,usuario)
{
    var flag=false;
    var usuarios = [
        'Andres','Andrea','Carlos','Cristian',
        'Daniel','Doris','Luna','Sara',
        'Nicol','Felipe','Joan','Viviana',
        'santiago','Lina','Laura','Luisa',
        'root'
    ];
    if(maquina==='Entrenadores'){
    for (var i = 0; i < 4; i++) {
            if(usuario===usuarios[i]||usuario===usuarios[16]){
                flag=true;
            }
        }
    }
    if(maquina==='Estudiantes'){
        for (var i = 4; i < 8; i++) {
            if (usuario === usuarios[i]||usuario===usuarios[16]) {
                flag=true;
            }
        }
    }
    if(maquina==='Docentes'){
        for (var i = 8; i < 12; i++) {
            if(usuario===usuarios[i]||usuario===usuarios[16]){
                flag=true;
            }
        }
    }
    if(maquina==='Universidad'){
        for (var i = 12; i < 16; i++) {
            if(usuario===usuarios[i]||usuario===usuarios[16]) {
                flag = true;
            }
        }
    }
    return flag;
}