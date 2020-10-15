
var msn='bienvenido';
var txt=document.getElementById('area');

function login(maquina, usr){
    if(usr==usuario){
        msn=msn+' '+usr;
        txt.value=msn;
    }else{
        txt.value='Usuario invalido';
        clear();
    }
}

function clear(){
    txt.value='';
}

function preguntarMaquina(){
    txt.value='Eliga la maquina:\n' +
        'Entrenadores\n' +
        'Estudiantes\n' +
        'Docentes\n' +
        'Universidad';
}

function evento(){
    var comando=document.getElementById('comando');
    msn=msn+comando.value+'\n';
    comando.value='';
    document.getElementById('area').value=msn;
}