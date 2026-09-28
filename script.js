const dias = ["domingo","luns","martes","mércores","xoves","venres","sábado"];
const meses = ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"];

const menus = {
  9:{kcal:766.943,items:["Pasta á napolitana","Tortilla de cabaciña","Tomate natural","Froita e pan"]},
  10:{kcal:778.703,items:["Minestra con allada e pataca","Lombo natural adubado","Ensalada de leituga e olivas","Iogur natural e pan"]},
  11:{kcal:1454.907,items:["Arroz integral con tomate","Ragout de pavo","Ensalada primavera","Froita e pan integral"]},

  14:{kcal:907.216,items:["Crema de cabaciña","Tortilla de pataca","Leituga e millo","Froita e pan"]},
  15:{kcal:1047.663,items:["Fabas estufadas","Filete ruso","Patacas asadas","Froita e pan integral"]},
  16:{kcal:1054.266,items:["Ensalada de pasta","Pescada á galega","Ensalada de leituga, millo, cenoria e pemento morrón","Froita e pan"]},
  17:{kcal:944.838,items:["Arroz integral con verduras e dados de tortilla francesa","Potaxe de garavanzos con espinacas e patacas","Leituga, tomate e olivas","Froita e pan"]},
  18:{kcal:581.769,items:["Ensaladilla","Lombo asado en salsa de pementos","Iogur natural e pan integral"]},

  21:{kcal:922.045,items:["Potaxe de lentellas","Salmón ao forno en salsa de laranxa","Pataca panadeira","Froita e pan"]},
  22:{kcal:878.953,items:["Crema de verduras","Tortilla de cabaciña","Tomate natural","Froita e pan integral"]},
  23:{kcal:831.907,items:["Arroz tres delicias con tomate","Estufado de porco con xudías","Iogur natural e pan"]},
  24:{kcal:705.943,items:["Macarróns integrais","Boloñesa vexetal","Ensalada de leituga, millo, cenoria e olivas","Froita e pan"]},
  25:{kcal:863.890,items:["Patacas aliñadas","Xamonciños de polo asados","Leituga, pemento morrón e cenoria","Froita e pan integral"]},

  28:{kcal:761.274,items:["Espirais integrais salteados con champiñóns e taquiños de pavo","Ensalada de fabas","Froita e pan"]},
  29:{kcal:809.725,items:["Crema de cabaciña e cenoria","Pescada en salsa verde","Patacas ao vapor con perexil","Iogur natural e pan integral"]},
  30:{kcal:985.636,items:["Garavanzos estufados","Tortilla de pataca","Tomate e cenoria","Froita e pan"]}
};

const allEvents = [
  {day:22,label:"Claustro",icon:"👥",color:"#8e4be8"},
  {day:25,label:"Vendima",icon:"🍇",color:"#7ac75d"},
  {day:29,label:"Avaliación inicial",icon:"📚",color:"#f6b51e"}
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
       <div><b>${e.day} de setembro</b><span>${e.label}</span></div>`;

    notices.appendChild(n);
  });
}

function buildCalendar(){
  const root = document.getElementById("cal");
  root.innerHTML = "";

  const weekdays = ["LUN","MAR","MÉR","XOV","VEN","SÁB","DOM"];

  weekdays.forEach(w=>{
    const el = document.createElement("div");
    el.className = "wd";
    el.textContent = w;
    root.appendChild(el);
  });

  const eventByDay = {};
  allEvents.forEach(e=>{
    eventByDay[e.day] = e;
  });

  const firstDay = new Date(2026,8,1);
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
