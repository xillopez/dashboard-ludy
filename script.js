const dias = ["domingo","luns","martes","mércores","xoves","venres","sábado"];
const meses = ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"];

const menus = {
  2:{kcal:831.626,items:["Garavanzos con acelgas", "Xurelo en salsa verde", "Patacas ao vapor con perexil", "Froita"]},
  3:{kcal:824.590,items:["Patacas á xardineira", "Albóndegas de tenreira", "Ensalada de leituga, tomate, cenoria, remolacha e millo", "Froita"]},
  4:{kcal:689.270,items:["Crema de porros", "Tortilla de cabaciña", "Tomate natural", "Iogur"]},
  5:{kcal:1102.477,items:["Macarróns salteados", "Boloñesa de lentellas", "Ensalada tropical", "Froita"]},
  6:{kcal:1017.482,items:["Arroz integral con tomate", "Ragout de pavo", "Ensalada primavera", "Froita"]},
  9:{kcal:907.216,items:["Crema de cabaciña", "Tortilla de pataca", "Leituga e millo", "Froita"]},
  10:{kcal:1047.663,items:["Fabas estufadas", "Filete ruso", "Patacas asadas", "Froita"]},
  11:{kcal:1111.568,items:["Macarróns integrais con salsa de setas e cabaza", "Pescada á galega", "Ensalada de leituga, millo, cenoria e pemento morrón", "Froita"]},
  12:{kcal:944.838,items:["Arroz con verduras e dados de tortilla francesa", "Potaxe de garavanzos con espinacas e patacas", "Froita"]},
  13:{kcal:691.089,items:["Patacas á rioxana", "Lombo asado en salsa de pementos", "Leituga, tomate e olivas", "Iogur natural"]},
  16:{kcal:866.213,items:["Potaxe de lentellas", "Salmón ao forno", "Leituga e cenoria", "Froita"]},
  17:{kcal:878.953,items:["Crema de verduras", "Tortilla de cabaciña", "Tomate natural", "Froita"]},
  18:{kcal:839.569,items:["Arroz tres delicias", "Estufado de porco con xudías", "Iogur natural"]},
  19:{kcal:705.943,items:["Macarróns integrais", "Boloñesa vexetal", "Ensalada de leituga, millo, cenoria e olivas", "Froita"]},
  20:{kcal:920.085,items:["Crema de cabaza", "Xamonciños de polo asados", "Pataca panadeira", "Froita"]},
  23:{kcal:761.274,items:["Espirais integrais salteadas con champiñóns e taquiños de pavo", "Fabas con verduras", "Froita"]},
  24:{kcal:691.422,items:["Crema de cabaciña e cenoria", "Pescada en salsa verde", "Ensalada de leituga, tomate e millo", "Iogur natural"]},
  25:{kcal:878.113,items:["Garavanzos estufados", "Ovos cocidos con repolo, pataca e allada", "Froita"]},
  26:{kcal:771.991,items:["Arroz con tomate", "Lombo natural adubado", "Leituga e olivas", "Froita"]},
  27:{kcal:976.028,items:["Crema de brócoli e cenoria", "Peituga de polo ao forno con salsa de tomate e alfábega", "Leituga e remolacha", "Froita"]},
  30:{kcal:704.650,items:["Potaxe de lentellas", "Pescada á romana", "Leituga e millo", "Iogur natural"]}
};

const allEvents = [
  // SETEMBRO 2026
  {month:9,day:25,label:"Vendima",icon:"🍇"},

  // OUTUBRO 2026
  {month:10,day:13,label:"Teatro 1º, 2º, 5º e 6º · Nana para un soldado",icon:"🎭"},
  {month:10,day:27,label:"Recitado Carvalho Calero · 5 anos e 6º",icon:"📖"},
  {month:10,day:26,endDay:30,label:"Semana do Samaín",icon:"🎃"},
  {month:10,day:30,label:"Desfile do Samaín",icon:"🎃"},

  // NOVEMBRO 2026
  {month:11,day:5,label:"Excursión 1º e 2º · Museo do Humor de Fene",icon:"🚌"},
  {month:11,day:16,label:"Excursión 3º e 4º · Casa das Ciencias da Coruña",icon:"🚌"},
  {month:11,day:20,label:"Magosto",icon:"🌰"},
  {month:11,day:25,label:"Día Internacional contra a Violencia de Xénero (25N)",icon:"💜"},

  // DECEMBRO 2026
  {month:12,day:2,label:"Inicio recollida alimentos",icon:"🥫"},
  {month:12,day:11,label:"Límite Ludicol",icon:"📝"},
  {month:12,day:14,label:"Límite postais",icon:"💌"},
  {month:12,day:14,endDay:18,label:"Visitas do Apalpador e Papá Noel",icon:"🎅"},
  {month:12,day:15,label:"En Galego, de película",icon:"🎬"},
  {month:12,day:21,label:"Festival de Nadal",icon:"🎄"},

  // XANEIRO 2027
  {month:1,day:4,endDay:15,label:"Reserva praza IES Concepción Arenal",icon:"🏫"},
  {month:1,day:28,label:"Día da Paz (xoves)",icon:"🕊️"},

  // FEBREIRO 2027
  {month:2,day:8,endDay:10,label:"Entroido",icon:"🎭"},
  {month:2,day:23,label:"Día de Rosalía",icon:"📚"},

  // MARZO 2027
  {month:3,day:8,label:"Día Internacional da Muller (8M)",icon:"💜"},
  {month:3,day:22,endDay:29,label:"Semana Santa",icon:"🌼"},

  // ABRIL 2027
  {month:4,day:7,label:"Concerto 1º a 4º · Walt e Diana. A viaxe continúa",icon:"🎵"},
  {month:4,day:23,label:"Día do Libro",icon:"📚"},

  // MAIO 2027
  {month:5,day:7,label:"Maios · Ferrol de Frores Cuberto",icon:"🌼"},
  {month:5,day:14,label:"Letras Galegas",icon:"📖"},
  {month:5,day:18,label:"Día non lectivo de libre elección",icon:"📅"},

  // XUÑO 2027
  {month:6,day:9,endDay:11,label:"Acampada",icon:"⛺"},
  {month:6,day:14,endDay:17,label:"Excursións",icon:"🚌"},
  {month:6,day:18,label:"Festival",icon:"🎉"},
  {month:6,day:21,label:"Ludylimpiadas e último día de clase",icon:"🏅"}
];
// Menú ARUME de novembro de 2026.
const menuPeriod = {year:2026, month:11};
allEvents.push(
  {month:11,day:2,label:"Día non lectivo de libre elección",icon:"📅"},
  {month:12,day:7,label:"Día do Ensino",icon:"📅"},
  {month:12,day:8,label:"Inmaculada Concepción",icon:"📅"},
  {month:12,day:22,endMonth:1,endYear:2027,endDay:7,label:"Vacacións de Nadal",icon:"🎄"},
  {month:3,day:19,label:"San Xosé",icon:"📅"}
);
const programs = [
  "Unha excursión por trimestre para cada ciclo",
  "Teatro con G · 5 anos e 6º · mes de xuño, data pendente",
  "Visita á horta escolar · todos os cursos, unha vez ao trimestre",
  "Xadrez na escola · 5 anos, 1º e 2º · todos os venres",
  "Natación escolar · 3º e 4º · luns a partir de xaneiro",
  "Programa Ciberexpert@ (Policía Nacional) · 6º",
  "Plan Director (Policía Nacional) · 5º e 6º",
  "Visita da matrona Paula Pita · charla de sexualidade para 6º"
];
const colors = {purple:"#8b45dc",yellow:"#ffd84f",cyan:"#72d6dc",deep:"#1020ad",orange:"#ffb85c",gray:"#ddd"};
allEvents.forEach(e=>{
  e.year = e.month >= 9 ? 2026 : 2027;
  e.start = new Date(e.year,e.month-1,e.day);
  e.finish = new Date(e.endYear || e.year,(e.endMonth || e.month)-1,e.endDay || e.day);
  e.category = /Desfile do Samaín/.test(e.label) ? "orange" : /Excursión|Acampada/.test(e.label) ? "cyan" : /Ludylimpiadas/.test(e.label) ? "deep" : /Vendima|Samaín|Magosto|Festival|Día da|Día de Rosalía|Maios|Letras|Día do Libro|Día Internacional/.test(e.label) ? "yellow" : /Teatro|Recitado|Concerto|película|Visitas/.test(e.label) ? "purple" : "gray";
});
function schoolNow(){
  const parts = new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Madrid",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(new Date());
  const get = type => Number(parts.find(p=>p.type===type).value);
  return new Date(get("year"),get("month")-1,get("day"));
}
function eventDate(e,short=false){
  const monthName = m => short ? meses[m-1].slice(0,3)+"." : meses[m-1];
  const start = `${e.day} ${monthName(e.month)}`;
  if(!e.endDay) return start;
  if(e.endMonth && e.endMonth!==e.month) return `${start} – ${e.endDay} ${monthName(e.endMonth)}`;
  return `${e.day}–${e.endDay} ${monthName(e.month)}`;
}
function setClock(){
  const now=schoolNow();
document.getElementById("hora").textContent =
  new Date().toLocaleTimeString("gl-ES", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });
  document.getElementById("data").textContent=`${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;
}
function setMenu(now=schoolNow()){
  const sameMonth=now.getFullYear()===menuPeriod.year && now.getMonth()+1===menuPeriod.month;
  const data=sameMonth ? menus[now.getDate()] : null;
  document.getElementById("menu-dia-num").textContent=now.getDate();
  document.getElementById("menu-mes").textContent=meses[now.getMonth()].toUpperCase();
  document.getElementById("menu-data").textContent=`${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]}`;
  const ul=document.getElementById("menu-list");
  ul.innerHTML="";
  const weekend=now.getDay()===0 || now.getDay()===6;
  const items=data ? data.items : [weekend ? "Hoxe non hai servizo de comedor." : "Menú de hoxe pendente de actualizar."];
  items.forEach(item=>{const li=document.createElement("li");li.textContent=item;ul.appendChild(li);});
  const nutrition=document.getElementById("nutrition");
  nutrition.hidden=!data || !data.kcal;
  nutrition.textContent=data && data.kcal ? `Información nutricional aprox. · ${data.kcal.toLocaleString("gl-ES",{maximumFractionDigits:1})} kcal` : "";
}
function setEvents(now=schoolNow()){
  const upcoming=allEvents.filter(e=>e.finish>=now).sort((a,b)=>a.start-b.start || a.finish-b.finish);
  const events=document.getElementById("elist");events.innerHTML="";
  upcoming.slice(0,6).forEach(e=>{
    const row=document.createElement("div");row.className="erow";
    row.innerHTML=`<div class="edate">${eventDate(e,true)}</div><span>${e.label}</span>`;
    events.appendChild(row);
  });
  if(!upcoming.length) events.textContent="Non hai próximos eventos programados.";
  const notices=document.getElementById("notices");notices.innerHTML="";
  // Avisos independentes das actividades do calendario.
  const activeNotices=[];
  if(now<=new Date(2026,9,6)){
    activeNotices.push({icon:"📣",title:"6 de outubro de 2026",text:"Folga do ensino concertado"});
  }
  const nonTeachingDays=[
    {date:new Date(2026,10,2),label:"2 de novembro de 2026"},
    {date:new Date(2027,4,18),label:"18 de maio de 2027"}
  ].filter(item=>item.date>=now);
  if(nonTeachingDays.length){
    activeNotices.push({icon:"📅",title:"Días non lectivos de libre elección aprobados",text:nonTeachingDays.map(item=>item.label).join(" e ")});
  }
  activeNotices.forEach(notice=>{
    const row=document.createElement("div");row.className="notice";
    row.innerHTML=`<div class="ico">${notice.icon}</div><div><b>${notice.title}</b><span>${notice.text}</span></div>`;
    notices.appendChild(row);
  });
  if(!activeNotices.length) notices.textContent="Non hai avisos vixentes.";

}
function buildCalendar(now=schoolNow()){
  const root=document.getElementById("cal");root.innerHTML="";
  const year=now.getFullYear(),month=now.getMonth();
  document.getElementById("calendar-title").textContent=`📅 CALENDARIO DE ${meses[month].toUpperCase()}`;
  const offset=(new Date(year,month,1).getDay()+6)%7;
  const days=new Date(year,month+1,0).getDate();
  const rows=Math.ceil((offset+days)/7);
  root.style.gridTemplateRows=`38px repeat(${rows},minmax(0,1fr))`;
  ["LUN","MAR","MÉR","XOV","VEN","SÁB","DOM"].forEach(w=>{const el=document.createElement("div");el.className="wd";el.textContent=w;root.appendChild(el);});
  for(let cell=0;cell<rows*7;cell++){
    const el=document.createElement("div");el.className="day";
    el.style.gridColumn=String(cell%7+1);
    el.style.gridRow=String(Math.floor(cell/7)+2);
    const day=cell-offset+1;
    if(day>=1 && day<=days){
      const date=new Date(year,month,day);
      if(date.getDay()===0 || date.getDay()===6) el.classList.add("weekend");
      if(day===now.getDate()){el.classList.add("today");el.setAttribute("aria-label",`Hoxe, ${day}`);}
      const matches=allEvents.filter(e=>e.start<=date && e.finish>=date);
      el.innerHTML=`<span>${day}</span>`;
      if(matches.some(e=>e.label==="Semana do Samaín")) el.classList.add("has-week-bar");
      matches.filter(e=>e.label!=="Semana do Samaín").forEach(e=>{const label=document.createElement("span");label.className=`evt ${e.category}`;label.textContent=e.label;el.appendChild(label);});
    }
    root.appendChild(el);
  }
  // Unha barra por fila para a semana, sen ocultar os eventos diarios.
  allEvents.filter(e=>e.label==="Semana do Samaín").forEach(e=>{
    const start=Math.max(1,e.start.getFullYear()===year && e.start.getMonth()===month ? e.day : 1);
    if(e.finish<new Date(year,month,1) || e.start>new Date(year,month,days)) return;
    const end=e.finish.getFullYear()===year && e.finish.getMonth()===month ? e.finish.getDate() : days;
    for(let day=start;day<=end;){
      const cell=offset+day-1,column=cell%7;
      const length=Math.min(7-column,end-day+1);
      const bar=document.createElement("div");
      bar.className="week-event yellow";
      bar.style.gridColumn=`${column+1} / span ${length}`;
      bar.style.gridRow=String(Math.floor(cell/7)+2);
      bar.textContent="Semana do Samaín · 26–30 outubro";
      root.appendChild(bar);
      day+=length;
    }
  });
}

const weatherCodes = {
  0:"Despexado",
  1:"Pouco nubrado",
  2:"Parcialmente nubrado",
  3:"Nubrado",
  45:"Néboa",
  48:"Néboa",
  51:"Orballo feble",
  53:"Orballo",
  55:"Orballo intenso",
  61:"Chuvia feble",
  63:"Chuvia",
  65:"Chuvia intensa",
  80:"Chuvascos",
  95:"Treboada"
};

async function loadWeather(){
  try{
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid";

    const r = await fetch(url);
    const d = await r.json();

    document.getElementById("temperatura").textContent =
      Math.round(d.current.temperature_2m)+"°C";

    document.getElementById("estado").textContent =
      weatherCodes[d.current.weather_code] || "Tempo variable";

    document.getElementById("humidade").textContent =
      Math.round(d.current.relative_humidity_2m)+"%";

    document.getElementById("vento").textContent =
      Math.round(d.current.wind_speed_10m)+" km/h";

    document.getElementById("maxima").textContent =
      Math.round(d.daily.temperature_2m_max[0])+"°C";

    document.getElementById("minima").textContent =
      Math.round(d.daily.temperature_2m_min[0])+"°C";

  }catch(e){
    document.getElementById("estado").textContent =
      "Tempo non dispoñible";
  }
}

let lastDay="";
function refreshPanel(){
  setClock();
  const now=schoolNow(),key=now.toDateString();
  if(key!==lastDay){lastDay=key;setMenu(now);setEvents(now);buildCalendar(now);}
}
refreshPanel();
setInterval(refreshPanel,1000);
setInterval(()=>setEvents(),30000);
loadWeather();
setInterval(loadWeather,30*60*1000);
