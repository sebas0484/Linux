class Archivo
{
    permiso='';
    propietario='';
    grupo='';
    fecha='';
    nombre='';

    constructor(permiso, propietario, grupo, fecha, nombre) {
        this.permiso = permiso;
        this.propietario = propietario;
        this.grupo = grupo;
        this.fecha = fecha;
        this.nombre = nombre;
    }
}