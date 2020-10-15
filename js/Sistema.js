
function evento(){
    var comando=document.getElementById('comando').value;
    comando.onkeypress('keyup', function(event){
        if(event.key === '13'){
            alert(comando);
            document.getElementById('area').value=comando;
        }
    })
}

class Sistema
{
    constructor(nombre,ip,usr,usr2,usr3,usr4,grupo1,grupo2,grupo3,archivo1,archivo2,archivo3){
        this.crear(nombre,ip,usr,usr2,usr3,usr4,grupo1,grupo2,grupo3,archivo1,archivo2,archivo3)
    }

    crear(nombre,ip,usr,usr2,usr3,usr4,grupo1,grupo2,grupo3,archivo1,archivo2,archivo3){
      var m=new Maquina(nombre,ip);
      var usuarios=[usr,usr2,usr3,usr4,'uRoot'];
      var grupo1=[usr,usr2];
      var grupo2=[usr3,usr4];
      var groot=['uroot'];
      var archivos= [archivo1,archivo2,archivo3];
    }

    fcomandoIngresado(comando, Sistema)
    {
        if (comando.includes('Login'))
        {
            this.comandoLogin();
        }if (comando.includes('logout'))
        {

        }if (comando.includes('touch'))
        {

        }if (comando.includes('sudo chown '))
        {

        }if (comando.includes('chmod'))
        {

        }if (comando.includes('ls -l'))
        {

        }if (comando.includes('ls'))
        {

        }if (comando.includes('cat'))
        {

        }if (comando.includes('nano'))
        {

        }if (comando.includes('./'))
        {

        }if (comando.includes('rm'))
        {

        }if (comando.includes('ssh'))
        {

        }if (comando.includes('scp'))
        {

        }
        else{

        }
    }
}