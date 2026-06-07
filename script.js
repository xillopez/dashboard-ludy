const menus={
15:['Crema de cabaciña','Albóndegas en salsa','Arroz integral','Froita'],
16:['Fabas brancas estofadas','Pescada á romana','Ensalada','Iogur'],
17:['Xudías verdes','Cocido con garavanzos, polo e patacas','Froita'],
18:['Ensalada de pasta','Tortilla de patacas','Ensalada','Froita']
};
function reloxo(){
 const d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=d.toLocaleDateString('gl-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
 let day=d.getDay(); let date=d.getDate();
 if(day===6||day===0) date=15;
 const m=menus[date]||['Consulta o menú mensual de xuño'];
 menuDia.innerHTML='<ul><li>'+m.join('</li><li>')+'</li></ul>';
}
reloxo(); setInterval(reloxo,1000);