
var ip=[
    '196.168.0.1',
    '196.168.0.2',
    '196.168.0.3',
    '196.168.0.4'
]
var flag=true;
var flagLogin=true;
var maquinaActual;
var usuarioActual;
function run() {
    if(flag===true){
        var msn='';
        var comando=document.getElementById('comando');
        msn=msn+comando.value;
        comando.value='';
         maquinaActual= msn;
        console.log(maquinaActual+'verificar');
         if(verficarMaquina(maquinaActual)===true) {
             document.getElementById('area').value = 'Ingrese comando: ';
             flag = false;
         }
         else
         {
             alert("Maquina no valida");
         }
    }else{

        comandoIngresado(maquinaActual);

    }
}
 function comandoIngresado(maquinaActual){
     if(flagLogin===true){
         var msn='';
         var comando=document.getElementById('comando');
         msn=msn+comando.value;
         comando.value='';
         var login='login';
         if(msn===login){
             flagLogin=false;
             document.getElementById('area').value='Usuario: ';
         }else{
             alert('debe iniciar con login')
         }
     }else{

        if(loginUsuario(maquinaActual)==true){
                console.log('todo bien');
            }
        else{
            alert('usuario no encontrado');
        }
     }
 }

 function loginUsuario(maquinaActual){
    var flag=false
         var msn = '';

         var comando = document.getElementById('comando');
         msn = msn + comando.value + '/n';
         var usr = comando.value;
         comando.value = '';

         if (verficarUsuario(maquinaActual, usr) === true) {
             msn += 'Bienvenido ' + usr + '/n';
             document.getElementById('area').value = msn;
             usuarioActual = usr;
             flag=true;
         } /*else {
             document.getElementById('area').value = 'Usuario invalido ingrese otro';

         }*/
         return flag;
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