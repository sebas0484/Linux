var archivos=[archivo1=['-rw-rw-rw-','Andres','Andres','Andrea','ene 23 10:12','listaEntrenadores.txt'],
archivo2=['-rw-rw--r--','Cristian','Carlos','Cristian','feb 14 16:41','horarioEntrenos.pdf'].
archivo3=['-rw-r--r--','root','root','root','dic 12 20:00','estudiantes,txt'],
archivo4=['-rw-rw-r--','root','root','root','ene 25 10:00','horarioClases.txt'],
archivo5=['-rw-rw-rw-','Daniel','Daniel','Doris','abr 24 06:05','archivos.rar'],
archivo6=['-rw-r--r--','Luna','Luna','Sara','feb 12 14:25','copiaDocumentos.rar'],
archivo7=['-rw-rw-r--','root','root','root','ene 02 18:20','listaCursos.txt'],
archivo8=['-rw-rw-rw-','Viviana','Joan','Viviana','dic 15 15:15','horarioAsesorias.tx'],
archivo9=['-rw-rw-r--','Nicol','Nicol','Felipe','oct 31 12:00','peticion.txt'],
archivo10=['-rw-r--r--','Laura','Laura','Luisa','may 05 1:00','cartas.rar'],
archivo11=['-rw-rw-rw-','root','root','root','abr 14 16:05','trabajosdeGrado.rar'],
archivo12=['-rw-rw-rw-','Lina','santiago','Lina','may 15 17:10','listaSalones.txt']
]

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

function verificarArchivoCreado (maquina,nombreArchivo){
    var flag=false;
    if(maquina==='Entrenadores'){
        for (var i = 0; i < 3; i++) {
           if(archivos[i][5]===nombreArchivo)
           {
               flag=true;
           }
        }
    }
    if(maquina==='Estudiantes'){
        for (var i = 3; i < 7; i++) {
            if(archivos[i][5]===nombreArchivo)
            {
                flag=true;
            }
        }
    }
    if(maquina==='Docentes'){
        for (var i = 7; i < 10; i++) {
            if(archivos[i][5]===nombreArchivo)
            {
                flag=true;
            }
        }
    }
    if(maquina==='Universidad'){
        for (var i = 10; i < 13; i++) {
            if(archivos[i][5]===nombreArchivo)
            {
                flag=true;
            }
        }
    }


}