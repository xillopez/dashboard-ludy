
const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
function tick(){
 let d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(tick,1000);tick();

const avisos=[
'🎉 Festa Fin de Curso · 17 de xuño',
'🏅 Ludyolimpiada · 19 de xuño',
'📚 Notas finais · 23 de xuño',
'👋 Despedida de 6º · 26 de xuño'
];
let i=0; function rot(){aviso.textContent=avisos[i];i=(i+1)%avisos.length;} rot(); setInterval(rot,6000);

const menus={
1:'Lentellas estofadas · Pescada á mariñeira · Froita',
2:'Chícharos con xamón · Polo ao limón · Froita',
3:'Arroz caldoso · Tortilla de patacas · Froita',
4:'Macarróns integrais napolitana · Hamburguesa con queixo · Iogur',
5:'Crema de verduras · Garavanzos con boloñesa vexetal · Froita',
8:'Ensaladilla Olivier · Fabas brancas con sepia · Iogur',
9:'Arroz con tomate · Salmón ao forno · Froita',
10:'Sopa de pasta · Carne asada · Froita',
11:'Lentellas con arroz integral · Tortilla francesa · Froita',
12:'Brócoli salteado · Croquetas de polo · Froita',
15:'Crema de cabaciña · Albóndegas en salsa · Froita',
16:'Fabas brancas estofadas · Pescada á romana · Iogur',
17:'Xudías verdes · Cocido con garavanzos · Froita',
18:'Ensalada de pasta · Tortilla de patacas · Froita',
19:'Menú especial fin de curso'
};
menu.textContent=menus[new Date().getDate()] || 'Consulta o menú semanal.';

async function meteo(){
 try{
  const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
  const d=await r.json();
  temp.textContent=Math.round(d.current.temperature_2m)+'°C';
  estado.textContent='Tempo actualizado';
  minmax.textContent='Máx '+Math.round(d.daily.temperature_2m_max[0])+'°C · Mín '+Math.round(d.daily.temperature_2m_min[0])+'°C';
 } catch(e){ estado.textContent='Erro na meteo'; }
}
meteo();
