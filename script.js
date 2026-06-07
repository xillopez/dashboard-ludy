
const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
function actualizar(){
 const d=new Date();
 document.getElementById('hora').textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 document.getElementById('data').textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(actualizar,1000);actualizar();

const avisos=[
'🎉 Festa Fin de Curso · 17 de xuño',
'🏅 Ludyolimpiada · 19 de xuño',
'📚 Publicación de notas · 23 de xuño',
'👋 Despedida de 6º · 26 de xuño'
];
let i=0;
function rota(){document.getElementById('aviso').textContent=avisos[i];i=(i+1)%avisos.length;}
rota();setInterval(rota,6000);

document.getElementById('menu').textContent='Personaliza aquí o menú completo de xuño.';

async function meteo(){
 try{
  const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
  const d=await r.json();
  document.getElementById('temperatura').textContent=Math.round(d.current.temperature_2m)+'°C';
  document.getElementById('estado').textContent='Estado actualizado';
  document.getElementById('minmax').textContent='Máx '+Math.round(d.daily.temperature_2m_max[0])+'°C · Mín '+Math.round(d.daily.temperature_2m_min[0])+'°C';
 }catch(e){document.getElementById('estado').textContent='Erro ao cargar a meteo';}
}
meteo();
