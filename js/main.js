var usuarioActual="";
var maquinaActual="";



class run{
    archivo1=new Archivo('-rw-rw-rw-','Andres',['Andres','Andrea'],'ene 23 10:12','listaEntrenadores.txt');
    archivo2=new Archivo('-rw-rw-r--','Cristian',['Carlos','Cristian'],'feb 14 16:41','horarioEntrenos.pdf');
    archivo3=new Archivo('-rw-r--r--','uRoot',['groot'],'dic 12 20:00','estudiantes,txt');
    archivo4=new Archivo('-rw-rw-r--','uRoot',['groot'],'ene 25 10:00','horarioClases.txt');
    archivo5=new Archivo('-rw-rw-rw-','Daniel',['Daniel','Doris'],'abr 24 06:05','archivos.rar');
    archivo6=new Archivo('-rw-r--r--','Luna',['Luna','Sara'],'feb 12 14:25','copiaDocumentos.rar');
    archivo7=new Archivo('-rw-rw-r--','uRoot',['groot'],'ene 02 18:20','listaCursos.txt');
    archivo8=new Archivo('-rw-rw-rw-','Viviana',['Joan','Viviana'],'dic 15 15:15','horarioAsesorias.tx');
    archivo9=new Archivo('-rw-rw-r--','Nicol',['Nicol','Felipe'],'oct 31 12:00','peticion.txt');
    archivo10=new Archivo('-rw-r--r--','Laura',['Laura','Luisa'],'may 05 1:00','cartas.rar');
    archivo11=new Archivo('-rw-rw-rw-','uRoot',['groot'],'abr 14 16:05','trabajosdeGrado.rar');
    archivo12=new Archivo('-rw-rw-rw-','Lina',['santiago','Lina'],'may 15 17:10','ListaSalones.txt');

    sistema1 = new Sistema('Entrenadores','196.168.0.1','Andres','Andrea','Carlos','Cristian',['Andres','Andrea'],['Carlos','Cristian'],['groot'], this.archivo1,this.archivo2,this.archivo3);
    sistema2 = new Sistema('Estudiantes','196.168.0.2','Daniel','Doris','Luna','Sara',['Daniel','Doris'],['Luna','Sara'],['groot'], this.archivo4,this.archivo5,this.archivo6);
    sistema3 = new Sistema('Docentes','196.168.0.3','Nicol','Felipe','Joan','Viviana',['Nicol','Felipe'],['Joan','Viviana'],['groot'], this.archivo7,this.archivo8,this.archivo9);
    sistema4 = new Sistema('Universidad','196.168.0.4','santiago','Lina','Laura','Luisa',['santiago','Lina'],['Laura','Luisa'],['groot'], this.archivo10,this.archivo11,this.archivo12);


comandoLogin(comando, Sistema){
    var arrayComando=comando.split(' ');
    var usuario=arrayComando[1];

      /* necesito que sistema me lo tome como objeto y no como variable indefinida
  if(usuario=Sistema.get nombre1 || usuario=Sistema.get nombre3 || usuario=Sistema.get nombre3 || usuario='uRoot')
  {

  }
  else{
    return 'El usuario no existe en esta maquina'
  }
   */

}
}

let ingresoComando=new Sistema();
ingresoComando.fcomandoIngresado();

