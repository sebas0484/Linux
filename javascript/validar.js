
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
        msn+='\nIngrese comando: ';
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
            msn += '\nIngrese nombre archivo';
            var fecha=new date();
            var fechaActual=fecha.getMonth()+' '+fecha.getDay()+' '+fecha.getHours()+' '+fecha.getMinutes()
            document.getElementById('area').value = msn;
            if(verificarArchivoCreado(maquinaActual,comando.value)==false){
                var nuevoArchivo=[['',usuarioActual,'','',fechaActual,comando.value]]
                archivos.push(nuevoArchivo);
                msn += '\nSe ha creado el nuevo archivo con el nombre '+comando.value;
                document.getElementById('area').value = msn;
            }
            else{
                for (var i=0;i<archivos.length; i++)
                {
                    if(archivos[i][5]===comando.value)
                    {
                        archivos[i][4]=fechaActual;
                        msn += '\nSe ha modificado la fecha de creacion del archivo a'+fechaActual;
                        document.getElementById('area').value = msn;
                    }
                }
            }
        }
        if (comando.value === 'sudo chown ') {
            msn += '\nIngrese nombre del usuario y del archivo ';
            var nombreUsuario=comabdo.value.split(' ')[0];
            var nombreArchivo=comabdo.value.split(' ')[1];
            if(verficarUsuario(maquinaActual,nombreUsuario)==true && verificarArchivoCreado(maquinaActual,nombreArchivo)==true){
                for (var i=0;i<archivos.length; i++)
                {
                    if(archivos[i][5]===comando.value)
                    {
                        archivos[i][1]=nombreUsuario;
                        msn += '\nEl nuevo propietario del archivo:'+nombreArchivo+' es:'+nombreUsuario;
                        document.getElementById('area').value = msn;
                    }
                }
            }
            else{
                msn += '\nEl documento o el usuario no existen';
                document.getElementById('area').value = msn;
            }
        }
        if (comando.value === 'chmod') {
            msn += '\nIngrese permisos y nombre del archivo ';
            document.getElementById('area').value = msn;
            var permisosIngresados=comabdo.value.split(' ')[0];
            var nombreArchivo=comabdo.value.split(' ')[1];
            if(verificarArchivoCreado(maquinaActual,nombreArchivo)==true){
                for (var i=0;i<archivos.length; i++)
                {
                    if(archivos[i][5]===nombreArchivo)
                    {
                        archivos[i][0]=nombreUsuario;
                        permisos=permisosIngresados.split('');
                        permiso+='-';
                        for(var i=0;i<4;i++)
                        {
                            if(permiso[i]==0){permiso+='--'}
                            if(permiso[i]==1){permiso+='-x'}
                            if(permiso[i]==2){permiso+='-w'}
                            if(permiso[i]==3){permiso+='-wx'}
                            if(permiso[i]==4){permiso+='-r'}
                            if(permiso[i]==5){permiso+='-rx'}
                            if(permiso[i]==6){permiso+='-rw'}
                            if(permiso[i]==7){permiso+='-rwx'}
                        }
                        msn += '\nLos nuevos permisos del archivo son'+permiso+' archivo:'+nombreArchivo;
                        document.getElementById('area').value = msn;
                    }
                }
            }
            else{
                msn += '\nEl documento no existe';
                document.getElementById('area').value = msn;
            }
        }
        if (comando.value === 'ls -l') {
            if(maquinaActual==='Entrenadores'){
                for (var i = 0; i < 3; i++) {
                    msn += '\n'+archivos[i];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Estudiantes'){
                for (var i = 3; i < 7; i++) {
                    msn += '\n'+archivos[i];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Docentes'){
                for (var i = 7; i < 10; i++) {
                    msn += '\n'+archivos[i];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Universidad'){
                for (var i = 10; i < 13; i++) {
                    msn += '\n'+archivos[i];
                    document.getElementById('area').value = msn;
                }
            }
        }
        if (comando.value === 'ls') {
           if(maquinaActual==='Entrenadores'){
                for (var i = 0; i < 3; i++) {
                    msn += '\n'+archivos[i][5];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Estudiantes'){
                for (var i = 3; i < 7; i++) {
                    msn += '\n'+archivos[i][5];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Docentes'){
                for (var i = 7; i < 10; i++) {
                    msn += '\n'+archivos[i][5];
                    document.getElementById('area').value = msn;
                }
            }
            if(maquinaActual==='Universidad'){
                for (var i = 10; i < 13; i++) {
                    msn += '\n'+archivos[i][5];
                    document.getElementById('area').value = msn;
                }
            }
        }
        if (comando.value === 'cat') {
            msn += '\nIngrese nombre del archivo';
            document.getElementById('area').value = msn;
            var nombreArchivo=comando.value;
            msn += '\nIngrese contenido del archivo';
            document.getElementById('area').value = msn;
           var contenido=comando.value;
            if(verificarArchivoCreado(maquinaActual,nombreArchivo)==false){
                var nuevoArchivo=[['',usuarioActual,'','',fechaActual,nombreArchivo]]
                archivos.push(nuevoArchivo);
                msn += '\nSe ha creado el nuevo archivo con el nombre '+comando.value;
                document.getElementById('area').value = msn;
            }
        }
        if (comando.value === 'nano') {

        }
        if (comando.value === 'rm') {
            msn += '\nIngrese nombre del archivo';
            document.getElementById('area').value = msn;
            var nombreArchivo=comando.value;
            for (var i=0;i<archivos.length; i++)
            {
                if(archivos[i][5]===nombreArchivo)
                {
                    archivos.splice(i,1);
                    msn += '\nSe ha Eliminado el archivo con el nombre '+comando.value;
                    document.getElementById('area').value = msn;
                }
            }
        }
        if (comando.value === 'ssh') {

        }
        if (comando.value === 'scp') {

        }
    }
}