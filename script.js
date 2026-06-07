// ======================
// HORA E DATA
// ======================

function actualizarHora(){

    const agora = new Date();

    document.getElementById("hora").innerHTML =
        agora.toLocaleTimeString('gl-ES',{
            hour:'2-digit',
            minute:'2-digit'
        });

    document.getElementById("data").innerHTML =
        agora.toLocaleDateString('gl-ES',{
            weekday:'long',
            day:'numeric',
            month:'long',
            year:'numeric'
        });
}

setInterval(actualizarHora,1000);
actualizarHora();


// ======================
// METEO FERROL
// ======================

const estados = {
  0:"Despexado",
  1:"Pouco nubrado",
  2:"Parcialmente nubrado",
  3:"Nubrado",
  45:"Néboa",
  48:"Néboa xeada",
  61:"Chuvia feble",
  63:"Chuvia",
  65:"Chuvia intensa",
  80:"Chuvascos",
  95:"Treboada"
};

async function obterTempo(){

 const url =
 "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid";

 const resposta = await fetch(url);

 const datos = await resposta.json();

 document.getElementById("temperatura").innerHTML =
 `${Math.round(datos.current.temperature_2m)}°C`;

 document.getElementById("estado").innerHTML =
 estados[datos.current.weather_code] || "Tempo variable";

 document.getElementById("maxima").innerHTML =
 `Máx: ${Math.round(datos.daily.temperature_2m_max[0])}°C`;

 document.getElementById("minima").innerHTML =
 `Mín: ${Math.round(datos.daily.temperature_2m_min[0])}°C`;
}

obterTempo();

setInterval(obterTempo,1800000);


// ======================
// AVISOS ROTATORIOS
// ======================

const avisos = [

"🎭 Teatro 6º Infantil e 6º Primaria · 4 de xuño",

"🏕️ Acampada 5º e 6º Primaria · 10 ao 12 de xuño",

"🎉 Festa Fin de Curso · 17 de xuño",

"🏅 Ludyolimpiada · 19 de xuño",

"📚 Publicación da listaxe de libros · 25 de xuño"

];

let indice = 0;

function cambiarAviso(){

 document.getElementById("avisos-container")
 .innerHTML = avisos[indice];

 indice++;

 if(indice >= avisos.length){
   indice = 0;
 }
}

cambiarAviso();

setInterval(cambiarAviso,10000);
