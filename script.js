const dias = ["domingo","luns","martes","mércores","xoves","venres","sábado"];
const meses = ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"];

const menus = {
  1: { kcal:564, nut:"P: 23% · HC: 46% · L: 25% · Graxas sat.: 3%", items:["Lentellas estofadas","Filete de pescada á mariñeira","Patacas ao vapor","Froita"] },
  2: { kcal:770, nut:"P: 28% · HC: 27% · L: 43% · Graxas sat.: 9%", items:["Chícharos con xamón","Polo asado ao limón e tomiño","Leituga e millo","Froita"] },
  3: { kcal:734, nut:"P: 11% · HC: 50% · L: 36% · Graxas sat.: 7%", items:["Arroz caldoso","Tortilla de patacas","Ensalada mixta","Froita"] },
  4: { kcal:830, nut:"P: 17% · HC: 41% · L: 40% · Graxas sat.: 15%", items:["Macarróns integrais á napolitana","Hamburguesa con queixo","Leituga","Iogur de sabor"] },
  5: { kcal:526, nut:"P: 14% · HC: 53% · L: 27% · Graxas sat.: 3%", items:["Crema de verduras","Garavanzos con boloñesa vexetal","Froita"] },
  8: { kcal:716, nut:"P: 20% · HC: 41% · L: 34% · Graxas sat.: 8%", items:["Ensaladilla Olivier con atún, ovo, olivas e maionesa","Fabas brancas guisadas con sepia","Iogur de sabor"] },
  9: { kcal:719, nut:"P: 16% · HC: 45% · L: 37% · Graxas sat.: 6%", items:["Arroz con tomate e cebola","Salmón ao forno","Ensalada mixta","Froita"] },
  10:{ kcal:672, nut:"P: 19% · HC: 36% · L: 41% · Graxas sat.: 14%", items:["Sopa de pasta","Carne asada","Minestra de verduras","Froita"] },
  11:{ kcal:556, nut:"P: 18% · HC: 41% · L: 35% · Graxas sat.: 7%", items:["Lentellas estofadas con arroz integral","Tortilla francesa","Leituga e cenoria relada","Froita"] },
  12:{ kcal:633, nut:"P: 10% · HC: 41% · L: 46% · Graxas sat.: 6%", items:["Brócoli salteado","Croquetas de polo","Leituga e tomate","Froita"] },
  15:{ kcal:617, nut:"P: 13% · HC: 39% · L: 45% · Graxas sat.: 12%", items:["Crema de cabaciña","Albóndegas en salsa","Arroz integral","Froita"] },
  16:{ kcal:771, nut:"P: 21% · HC: 37% · L: 38% · Graxas sat.: 8%", items:["Fabas brancas estofadas","Filete de pescada á romana","Ensalada de leituga, tomate e cenoria relada","Iogur de sabor"] },
  17:{ kcal:564, nut:"P: 18% · HC: 49% · L: 27% · Graxas sat.: 4%", items:["Xudías verdes salteadas con pemento","Cocido con garavanzos, polo e patacas","Froita"] },
  18:{ kcal:805, nut:"P: 12% · HC: 45% · L: 40% · Graxas sat.: 8%", items:["Ensalada de pasta","Tortilla de patacas","Ensalada de leituga, cebola e millo","Froita"] },
  19:{ kcal:null, nut:"", items:["Menú especial de fin de curso"] }
};

const allEvents = [
  { day:4, label:"Teatro 6º Infantil e 6º Primaria", icon:"🎭", color:"#ec4b8f" },
  { day:10, label:"Acampada 5º e 6º Primaria", icon:"⛺", color:"#42c5cc", end:12 },
  { day:15, label:"Excursión Infantil ao Lago", icon:"🚌", color:"#8e4be8" },
  { day:17, label:"Festa Fin de Curso", icon:"🎉", color:"#f6b51e" },
  { day:18, label:"Excursión 1º-4º Primaria a Cedeira", icon:"⛰️", color:"#2ea7e8" },
  { day:19, label:"Ludyolimpiada", icon:"🏆", color:"#1620a5" },
  { day:23, label:"Notas finais", icon:"📚", color:"#a0a0a0" },
  { day:25, label:"Publicación da listaxe de libros e material", icon:"📋", color:"#a0a0a0" },
  { day:26, label:"Acto despedida de 6º Primaria", icon:"👋", color:"#7ac75d" }
];

function nextSchoolMenuDate(date){
  const d = new Date(date);
  const day = d.getDay();
  let dateNum = d.getDate();

  if(day === 6){ // sábado -> luns
    dateNum += 2;
  } else if(day === 0){ // domingo -> luns
    dateNum += 1;
  }

  if(!menus[dateNum]){
    const future = Object.keys(menus).map(Number).find(n => n >= dateNum);
    return future || 1;
  }
  return dateNum;
}

function setClock(){
  const now = new Date();
  document.getElementById("hora").textContent = now.toLocaleTimeString("gl-ES",{hour:"2-digit",minute:"2-digit"});
  document.getElementById("data").innerHTML = `${dias[now.getDay()]}, ${now.getDate()} de <strong>${meses[now.getMonth()]}</strong> de ${now.getFullYear()}`;
}

function setMenu(){
  const today = new Date();
  const menuDay = nextSchoolMenuDate(today);
  const data = menus[menuDay];

  document.getElementById("menu-dia-num").textContent = menuDay;
  document.getElementById("menu-data").textContent = `${dias[new Date(2026,5,menuDay).getDay()]}, ${menuDay} de xuño`;

  const ul = document.getElementById("menu-list");
  ul.innerHTML = "";
  data.items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  document.getElementById("nutrition").textContent = data.kcal ? `Información nutricional aprox. · ${data.kcal} Kcal. · ${data.nut}` : "Menú especial de fin de curso";
}

function setEvents(){
  const now = new Date();
  const today = now.getMonth() === 5 ? now.getDate() : 1;
  const upcoming = allEvents.filter(e => (e.end || e.day) >= today).slice(0,6);

  const events = document.getElementById("events-list");
  events.innerHTML = "";
  upcoming.forEach(e => {
    const div = document.createElement("div");
    div.className = "event-row";
    const dateLabel = e.end ? `${e.day}-${e.end} xuño` : `${e.day} xuño`;
    div.innerHTML = `<b>${dateLabel}</b><span>${e.label}</span>`;
    events.appendChild(div);
  });

  const notices = document.getElementById("avisos-list");
  notices.innerHTML = "";
  upcoming.slice(0,4).forEach(e => {
    const n = document.createElement("div");
    n.className = "notice";
    const dateLabel = e.end ? `${e.day}, ${e.day+1} e ${e.end} de xuño` : `${e.day} de xuño`;
    n.innerHTML = `<div class="notice-icon" style="background:${e.color}">${e.icon}</div><div><b>${dateLabel}</b><span>${e.label}</span></div>`;
    notices.appendChild(n);
  });
}

function buildCalendar(){
  const root = document.getElementById("mini-calendar");
  const weekdays = ["LUN","MAR","MÉR","XOV","VEN","SÁB","DOM"];
  weekdays.forEach(w => {
    const el = document.createElement("div");
    el.className = "weekday";
    el.textContent = w;
    root.appendChild(el);
  });

  const eventByDay = {};
  allEvents.forEach(e => {
    for(let d=e.day; d <= (e.end || e.day); d++){
      eventByDay[d] = e;
    }
  });

  const today = new Date();
  for(let day=1; day<=35; day++){
    const el = document.createElement("div");
    const date = day <= 30 ? day : "";
    el.className = "day";
    if(day <= 30){
      const weekDay = new Date(2026,5,day).getDay();
      if(weekDay === 0 || weekDay === 6) el.classList.add("weekend");
      if(today.getFullYear()===2026 && today.getMonth()===5 && today.getDate()===day) el.classList.add("today");

      const ev = eventByDay[day];
      if(ev){
        if(ev.color === "#ec4b8f") el.classList.add("pink");
        else if(ev.color === "#42c5cc") el.classList.add("cyan");
        else if(ev.color === "#8e4be8") el.classList.add("purple");
        else if(ev.color === "#f6b51e") el.classList.add("yellow");
        else if(ev.color === "#2ea7e8") el.classList.add("blue");
        else if(ev.color === "#1620a5") el.classList.add("deep");
        else if(ev.color === "#7ac75d") el.classList.add("green");
        else el.classList.add("gray");
      }

      el.innerHTML = `<span>${date}</span>`;
      if(ev && (day === ev.day || !ev.end)){
        el.innerHTML += `<span class="event">${ev.label}</span>`;
      }
    }
    root.appendChild(el);
  }
}

const weatherCodes = {
  0:"Despexado",1:"Pouco nubrado",2:"Parcialmente nubrado",3:"Nubrado",
  45:"Néboa",48:"Néboa",51:"Orballo feble",53:"Orballo",55:"Orballo intenso",
  61:"Chuvia feble",63:"Chuvia",65:"Chuvia intensa",80:"Chuvascos",95:"Treboada"
};

async function loadWeather(){
  try{
    const url = "https://api.open-meteo.com/v1/forecast?latitude=43.48&longitude=-8.23&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FMadrid";
    const r = await fetch(url);
    const d = await r.json();

    document.getElementById("temperatura").textContent = Math.round(d.current.temperature_2m)+"°C";
    document.getElementById("estado").textContent = weatherCodes[d.current.weather_code] || "Tempo variable";
    document.getElementById("humidade").textContent = Math.round(d.current.relative_humidity_2m)+"%";
    document.getElementById("vento").textContent = Math.round(d.current.wind_speed_10m)+" km/h";
    document.getElementById("maxima").textContent = Math.round(d.daily.temperature_2m_max[0])+"°C";
    document.getElementById("minima").textContent = Math.round(d.daily.temperature_2m_min[0])+"°C";
  }catch(e){
    document.getElementById("estado").textContent = "Tempo non dispoñible";
  }
}

setClock();
setInterval(setClock, 1000);
setMenu();
setEvents();
buildCalendar();
loadWeather();
setInterval(loadWeather, 30*60*1000);
