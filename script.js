
const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
function reloxo(){
 const d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(reloxo,1000); reloxo();

const avisos=[
'🎉 Festa Fin de Curso · 17 de xuño',
'🏅 Ludyolimpiada · 19 de xuño',
'📚 Notas finais · 23 de xuño',
'👋 Acto despedida de 6º · 26 de xuño'
];
let i=0;
function rotar(){avisosDiv=document.getElementById('avisos');avisosDiv.textContent=avisos[i];i=(i+1)%avisos.length;}
rotar(); setInterval(rotar,7000);

const menus={
1:'Lentellas guisadas · Pescada á mariñeira · Patacas ao vapor · Froita',
2:'Chícharos con xamón · Polo ao limón e tomiño · Froita',
3:'Arroz caldoso · Tortilla de patacas · Ensalada mixta · Froita',
4:'Macarróns integrais napolitana · Hamburguesa con queixo · Iogur',
5:'Crema de verduras · Garavanzos á boloñesa vexetal · Froita'
};
menuDia=document.getElementById('menu-dia');
menuDia.textContent=menus[new Date().getDate()] || 'Consulta o menú semanal do centro.';

const estados={0:'Despexado',1:'Pouco nubrado',2:'Parcialmente nubrado',3:'Nubrado',61:'Chuvia feble',63:'Chuvia',95:'Treboada'};
async function tempo(){
 try{
  const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
  const d=await r.json();
  document.getElementById('temperatura').textContent=Math.round(d.current.temperature_2m)+'°C';
  document.getElementById('estado').textContent=estados[d.current.weather_code]||'Tempo variable';
  document.getElementById('maxima').textContent='Máx: '+Math.round(d.daily.temperature_2m_max[0])+'°C';
  document.getElementById('minima').textContent='Mín: '+Math.round(d.daily.temperature_2m_min[0])+'°C';
 }catch(e){document.getElementById('estado').textContent='Erro na meteo';}
}
tempo();
setInterval(tempo,1800000);
