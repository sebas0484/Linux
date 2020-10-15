var usuarios=[
    'Andres','Andrea','Carlos','Cristian',
    'Daniel','Doris','Luna','Sara',
    'Nicol','Felipe','Joan','Viviana',
    'santiago','Lina','Laura','Luisa',
];

var maquinas=[
    'Entrenadores',
    'Estudiantes',
    'Docentes',
    'Universidad'
];

var ip=[
    '196.168.0.1',
    '196.168.0.2',
    '196.168.0.3',
    '196.168.0.4'
]

var comando=document.getElementById('comando');

function run(){
    preguntarMaquina();
    var maquinaActual=comando.value;

    comando.value;
    var separar=comando.split(' ');
    login(separar[1]);
}
