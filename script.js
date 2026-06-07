
function reloxo(){
 const d=new Date();
 hora.innerText=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.innerText=d.toLocaleDateString('gl-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
setInterval(reloxo,1000); reloxo();

const avisosLista=[
'🎭 Teatro 6º Infantil e Primaria',
'🏕️ Acampada 5º e 6º',
'🎉 Festa fin de curso',
'🏅 Ludyolimpiada'
];
let i=0;
function aviso(){
 document.getElementById('avisos').innerText=avisosLista[i];
 i=(i+1)%avisosLista.length;
}
setInterval(aviso,8000); aviso();

const estados={0:'Despexado',1:'Pouco nubrado',2:'Parcialmente nubrado',3:'Nubrado',61:'Chuvia feble',63:'Chuvia',95:'Treboada'};

async function tempo(){
 try{
 const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid');
 const d=await r.json();
 document.getElementById('temperatura').innerText=Math.round(d.current.temperature_2m)+'°C';
 document.getElementById('estado').innerText=estados[d.current.weather_code]||'Tempo variable';
 document.getElementById('maxima').innerText='Máx: '+Math.round(d.daily.temperature_2m_max[0])+'°C';
 document.getElementById('minima').innerText='Mín: '+Math.round(d.daily.temperature_2m_min[0])+'°C';
 }catch(e){
 document.getElementById('estado').innerText='Erro ao cargar meteo';
 }
}
tempo();
setInterval(tempo,1800000);
