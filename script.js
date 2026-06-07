
const dias=['domingo','luns','martes','mércores','xoves','venres','sábado'];
const meses=['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'];
function reloxo(){
 let d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=`${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(reloxo,1000);reloxo();

const avisos=[
'🎉 Festa Fin de Curso · 17 de xuño',
'🏅 Ludyolimpiada · 19 de xuño',
'📚 Notas finais · 23 de xuño',
'👋 Despedida de 6º · 26 de xuño'
];
let i=0;
function av(){document.getElementById('aviso').textContent=avisos[i];i=(i+1)%avisos.length;}
av();setInterval(av,7000);

const menus={
1:'Lentellas estofadas · Pescada á mariñeira · Patacas ao vapor · Froita',
2:'Chícharos con xamón · Polo asado ao limón e tomiño · Froita',
3:'Arroz caldoso · Tortilla de patacas · Ensalada mixta · Froita',
4:'Macarróns integrais napolitana · Hamburguesa con queixo · Iogur',
5:'Crema de verduras · Garavanzos con boloñesa vexetal · Froita',
8:'Ensaladilla Olivier · Fabas brancas guisadas con sepia · Iogur',
9:'Arroz con tomate e cebola · Salmón ao forno · Froita',
10:'Sopa de pasta · Carne asada · Minestra de verduras · Froita',
11:'Lentellas con arroz integral · Tortilla francesa · Froita',
12:'Brócoli salteado · Croquetas de polo · Froita',
15:'Crema de cabaciña · Albóndegas en salsa · Arroz integral · Froita',
16:'Fabas brancas estofadas · Pescada á romana · Iogur',
17:'Xudías verdes salteadas con pemento · Cocido con garavanzos · Froita',
18:'Ensalada de pasta · Tortilla de patacas · Froita',
19:'Menú especial fin de curso'
};
menu.textContent=menus[new Date().getDate()]||'Consulta o menú semanal.';
