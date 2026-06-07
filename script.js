
const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
function actualizar(){
 let d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(actualizar,1000);actualizar();

const avisos=[
'🎉 Festa fin de curso',
'🏅 Ludyolimpiada',
'📚 Publicación de notas',
'👋 Despedida de 6º'
];
let i=0;
function rota(){document.getElementById('aviso').textContent=avisos[i];i=(i+1)%avisos.length;}
rota();setInterval(rota,5000);

document.getElementById('menu').textContent='Menú editable. Aquí podes pegar o menú completo do comedor.';
