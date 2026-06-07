
function actualizarHora(){
 const d=new Date();
 document.getElementById('hora').textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
 const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
 document.getElementById('data').textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(actualizarHora,1000); actualizarHora();

const avisos=[
'🎉 Festa Fin de Curso o 17 de xuño',
'🏅 Ludyolimpiada o 19 de xuño',
'📚 Notas finais o 23 de xuño',
'👋 Despedida de 6º Primaria o 26 de xuño'
];
let a=0;
function aviso(){document.getElementById('avisos').textContent=avisos[a];a=(a+1)%avisos.length;}
aviso(); setInterval(aviso,8000);

const menu={
1:'Lentellas guisadas · Pescada á mariñeira · Patacas ao vapor · Froita',
2:'Chícharos con xamón · Polo asado ao limón e tomiño · Froita',
3:'Arroz caldoso · Tortilla de patacas · Ensalada mixta · Froita',
4:'Macarróns integrais napolitana · Hamburguesa con queixo · Iogur',
5:'Crema de verduras · Garavanzos á boloñesa vexetal · Froita',
8:'Ensaladilla Olivier · Fabas brancas con sepia · Iogur',
9:'Arroz con tomate e cebola · Salmón ao forno · Froita',
10:'Sopa de pasta · Carne asada · Minestra de verduras · Froita',
11:'Lentellas con arroz integral · Tortilla francesa · Froita',
12:'Brócoli salteado · Croquetas de polo · Froita'
};
const hoxe=new Date().getDate();
document.getElementById('menu-dia').textContent=menu[hoxe] || 'Consulta o menú semanal do centro.';

const estados={0:'Despexado',1:'Pouco nubrado',2:'Parcialmente nubrado',3:'Nubrado',61:'Chuvia feble',63:'Chuvia',95:'Treboada'};
async function tempo(){
 try{
  const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
  const d=await r.json();
  temperatura.textContent=Math.round(d.current.temperature_2m)+'°C';
  estado.textContent=estados[d.current.weather_code]||'Tempo variable';
  maxima.textContent='Máx: '+Math.round(d.daily.temperature_2m_max[0])+'°C';
  minima.textContent='Mín: '+Math.round(d.daily.temperature_2m_min[0])+'°C';
 }catch(e){estado.textContent='Non foi posible cargar a meteo';}
}
tempo();
