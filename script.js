const dias = ["domingo","luns","martes","mércores","xoves","venres","sábado"];
const meses = ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"];

const menus = {
  1:{kcal:771.991,items:["Arroz con tomate","Lombo natural adubado","Leituga e olivas","Froita e pan branco"]},
  2:{kcal:1041.563,items:["Crema de brócoli e cenoria","Filete de polo ao forno en salsa de trigueros","Leituga e remolacha","Froita e pan integral"]},

  5:{kcal:704.650,items:["Potaxe de lentellas","Pescada á romana","Leituga e millo","Iogur natural e pan branco"]},
  6:{kcal:850.148,items:["Sopa de estreliñas","Tortilla de cabaciña","Tomate natural","Froita e pan branco"]},
  7:{kcal:886.288,items:["Arroz integral con verduras e xamón iork","Guiso de garavanzos","Froita e pan branco"]},
  8:{kcal:897.517,items:["Ensalada de tempada","Polo ao chilindrón","Patacas asadas","Froita e pan branco"]},
  9:{kcal:595.912,items:["Minestra salteada con pataca dado","Raxo de porco","Ensalada de leituga, tomate e cenoria","Froita e pan integral"]},

  12:{kcal:0,items:["Festivo"]},
  13:{kcal:1122.151,items:["Pasta integral con tomate","Polo ás finas herbas","Leituga e tomate","Froita e pan integral"]},
  14:{kcal:837.703,items:["Xudías con allada, pataca, ovo relado e picadillo de chourizo","Fabas estufadas","Froita e pan branco"]},
  15:{kcal:1000.462,items:["Ensalada de garavanzos","Abadexo en salsa de cabaciña","Patacas ao vapor","Iogur natural e pan branco"]},
  16:{kcal:1176.185,items:["Crema de coliflor e mazá","Tortilla de pataca","Leituga e remolacha","Froita e pan integral"]},

  19:{kcal:725.708,items:["Sopa de piñóns","Xurelo á galega","Pataca cocida","Froita e pan branco"]},
  20:{kcal:881.104,items:["Arroz integral","Estufado de porco","Ensalada de leituga, tomate, millo e cenoria","Iogur natural e pan integral"]},
  21:{kcal:749.303,items:["Crema campeira","Tortilla de cabaciña","Leituga e tomate","Froita e pan branco"]},
  22:{kcal:816.755,items:["Garavanzos con acelgas, espinacas e cabaza","Pescada á romana","Ensalada de leituga, millo e olivas","Froita e pan branco"]},
  23:{kcal:539.955,items:["Guiso de chícharos e cenorias con taquiños de pavo","Lentellas con verduras","Froita e pan integral"]},

  26:{kcal:738.247,items:["Macarróns integrais á napolitana","Filete de lombo en salsa de laranxa","Leituga, tomate e millo","Iogur natural e pan branco"]},
  27:{kcal:816.090,items:["Ensalada de arroz con dados de xamón iork","Tacos con verduriñas","Froita e pan integral"]},
  28:{kcal:718.278,items:["Fabas pintas con cabaza e porro","Guiso de luras con patacas","Froita e pan branco"]},
  29:{kcal:682.463,items:["Ensaladilla","Polo ao allo","Leituga e pemento morrón","Froita e pan branco"]},
  30:{kcal:797.529,items:["Crema de cabaza","Tortilla de pataca","Ensalada de leituga, millo e cenoria","Froita e pan integral"]}
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
function nextSchoolMenuDate(date){
  const available = Object.keys(menus).map(Number).sort((a,b)=>a-b);

  if(date.getFullYear() !== 2026 || date.getMonth() !== 8){
    return available[0];
  }

  const n = date.getDate();
  return available.find(day => day >= n) || available[available.length-1];
}

function setClock(){
  const now = new Date();

  document.getElementById("hora").textContent =
    now.toLocaleTimeString("gl-ES",{hour:"2-digit",minute:"2-digit"});

  document.getElementById("data").innerHTML =
    `${dias[now.getDay()]}, ${now.getDate()} de <strong>${meses[now.getMonth()]}</strong> de ${now.getFullYear()}`;
}

function setMenu(){
  const menuDay = nextSchoolMenuDate(new Date());
  const data = menus[menuDay];

  document.getElementById("menu-dia-num").textContent = menuDay;

  document.getElementById("menu-data").textContent =
    `${dias[new Date(2026,8,menuDay).getDay()]}, ${menuDay} de setembro`;

  const ul = document.getElementById("menu-list");
  ul.innerHTML = "";

  data.items.forEach(item=>{
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  document.getElementById("nutrition").textContent =
    `Información nutricional aprox. · ${String(data.kcal).replace(".",",")} Kcal.`;
}

function setEvents(){
  const now = new Date();

  const today =
    now.getFullYear()===2026 && now.getMonth()===8
      ? now.getDate()
      : 1;

  const upcoming = allEvents
    .filter(e=>(e.end || e.day)>=today)
    .slice(0,6);

  const events = document.getElementById("elist");
  events.innerHTML = "";

  upcoming.forEach(e=>{
    const div = document.createElement("div");
    div.className = "erow";

    div.innerHTML =
      `<div class="edate">${e.day} set.</div><span>${e.label}</span>`;

    events.appendChild(div);
  });

  const notices = document.getElementById("notices");
  notices.innerHTML = "";

  upcoming.slice(0,4).forEach(e=>{
    const n = document.createElement("div");
    n.className = "notice";

    n.innerHTML =
      `<div class="ico" style="background:${e.color}">${e.icon}</div>
<div><b>${e.day} de ${meses[e.month-1]}</b><span>${e.label}</span></div>`;

    notices.appendChild(n);
  });
}

function buildCalendar(){
  const root = document.getElementById("cal");
  root.innerHTML = "";
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
  const weekdays = ["LUN","MAR","MÉR","XOV","VEN","SÁB","DOM"];

  weekdays.forEach(w=>{
    const el = document.createElement("div");
    el.className = "wd";
    el.textContent = w;
    root.appendChild(el);
  });

const eventByDay = {};

allEvents
  .filter(e => e.month === month + 1)
  .forEach(e => {
    const end = e.endDay || e.day;
    for (let d = e.day; d <= end; d++) {
      eventByDay[d] = e;
    }
  });

  const firstDay = new Date(year,month,1);
  const offset = (firstDay.getDay()+6)%7;
  const today = new Date();

  for(let cell=0;cell<35;cell++){
    const el = document.createElement("div");
    el.className = "day";

    const day = cell-offset+1;

    if(day>=1 && day<=30){

      const weekDay = new Date(2026,8,day).getDay();

      if(weekDay===0 || weekDay===6)
        el.classList.add("weekend");

      if(
        today.getFullYear()===2026 &&
        today.getMonth()===8 &&
        today.getDate()===day
      ){
        el.classList.add("today");
      }

      const ev = eventByDay[day];

      if(ev){
        if(ev.color==="#8e4be8") el.classList.add("purple");
        else if(ev.color==="#f6b51e") el.classList.add("yellow");
        else if(ev.color==="#7ac75d") el.classList.add("green");
        else el.classList.add("gray");
      }

      el.innerHTML = `<span>${day}</span>`;

      if(ev){
        el.innerHTML += `<span class="evt">${ev.label}</span>`;
      }
    }

    root.appendChild(el);
  }
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

setClock();
setInterval(setClock,1000);
setMenu();
setEvents();
buildCalendar();
loadWeather();
setInterval(loadWeather,30*60*1000);
