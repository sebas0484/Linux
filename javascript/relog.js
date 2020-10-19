
var msn='';
var usuario;
var comando;
var usuarios = [
    'Andres','Andrea','Carlos','Cristian',
    'Daniel','Doris','Luna','Sara',
    'Nicol','Felipe','Joan','Viviana',
    'santiago','Lina','Laura','Luisa',
    'root'
];
var flagReloguear=false;

function reloguear(){
    comando=document.getElementById('comando');
    msn+='\nUsuario: ';
    document.getElementById('area').value = msn;
    usuario=comando.value;
    for (var i = 0; i < 4; i++) {
        if(usuario===usuarios[i]||usuario===usuarios[16]){
            msn += 'Bienvenido ' + usuario;
            document.getElementById('area').value = msn;
            comando.value='';
        }
    }
}