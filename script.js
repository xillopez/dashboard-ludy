function actualizarHora(){
const agora=new Date();
document.getElementById('hora').innerHTML=agora.toLocaleTimeString('gl-ES',{hour:'2-digit',minute:'2-digit'});
document.getElementById('data').innerHTML=agora.toLocaleDateString('gl-ES',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
setInterval(actualizarHora,1000);actualizarHora();
