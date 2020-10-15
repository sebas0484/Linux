class Maquina
{
    grupo= new Array();
    usuario=new Array();
    disco=new Array();

    constructor(nombre, ip){
        this.nombre =nombre;
        this.ip =ip;
    }

    m1= new Maquina('Entrenadores','196.168.0.1');
    m2= new Maquina('Estudiantes','196.168.0.2')
    m3= new Maquina('Docentes','196.168.0.3');
    m4= new Maquina('Universidad','196.168.0.1');

}
