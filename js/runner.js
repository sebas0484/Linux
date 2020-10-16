
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
    var maquinas = [
        'Entrenadores',
        'Estudiantes',
        'Docentes',
        'Universidad'
    ];
    var usuarios = [
        'UsuarioRoot',
        'Andres', 'Andrea', 'Carlos', 'Cristian',
        'Daniel', 'Doris', 'Luna', 'Sara',
        'Nicol', 'Felipe', 'Joan', 'Viviana',
        'santiago', 'Lina', 'Laura', 'Luisa',
    ];

    if(flag==true){
        console.log('Entro al if');
        var msn='';
        var comando=document.getElementById('comando');
        msn=msn+comando.value+'\n';
        comando.value='';
         maquinaActual= msn;
        document.getElementById('area').value='Ingrese comando: ';
        flag=false;
    }else{
        console.log('Entro al else');
        console.log('Envia: '+maquinaActual);
        comandoIngresado(maquinaActual);

    }
}
 function comandoIngresado(maquinaActual){
     if(flagLogin==true){
         console.log('Entro al metodo');
         console.log('Recibe: '+maquinaActual);
         var msn='';
         var comando=document.getElementById('comando');
         msn=msn+comando.value;
         comando.value='';
         console.log('Toma: '+msn);
         var login='login';
         if(msn===login){
             console.log('Entro al metodo y al if');
             flagLogin=false;
         }else{
             console.log('Entro al metodo y al else');
         }

         document.getElementById('area').value='Usuario: ';
     }else{
         loginUsuario();
     }
 }

 function loginUsuario(){
     var msn='';
     var comando=document.getElementById('comando');
     msn=msn+comando.value;
     comando.value='';
     var usr=msn;
     usuarioActual=usr;
     if(usr==='UsuarioRoot'){
         msn='Bienvenido '+usr;
         document.getElementById('area').value=msn;
     }else{
         document.getElementById('area').value='Usuario invalido';
     }
 }
