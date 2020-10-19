
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