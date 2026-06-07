
function act(){
 const d=new Date();
 hora.textContent=d.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
 data.textContent=d.toLocaleDateString('gl-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
act(); setInterval(act,1000);
