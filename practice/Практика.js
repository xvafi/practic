

// Калькуляторы фигур
(function () {
  function perimeterBox(num, num2) {
    if (num == num2) {
      return (num + num2) * 2;
    }
  }
  function squareBox(num, num2) {
    if (num == num2) {
      return num * num2;
    }
  }

  function perimeterRec(num, num2) {
    return (num + num2) * 2;
  }
  function squareRec(num, num2) {
    return num * num2;
  }

  function squareCir(num) {
    return Math.PI * num ** 2;
  }
  function cirCumgerence(num) {
    return 2 * Math.PI * num;
  }

  function squareTriangle(num, num2, num3) {
    let p = (num + num2 + num3) / 2;
    return Math.sqrt(p * (p - num) * (p - num2) * (p - num3));
  }

  function equation(num, num2, num3) {
    let discreminant = num2 ** 2 - 4 * num * num3;
    if (discreminant > 0) {
      let x1 = (-num2 + Math.sqrt(discreminant)) / (2 * num);
      let x2 = (-num2 - Math.sqrt(discreminant)) / (2 * num);
      return "Первый корень: " + x1 + " второй корень: " + x2;
    }
  }

  function pithagTriples(num, num2, num3) {
    if (num ** 2 + num2 ** 2 == num3 ** 2) {
      return (
        "Числа: " +
        num +
        ", " +
        num2 +
        ", " +
        num3 +
        ", являются Пифагорами тройками"
      );
    } else {
      return (
        "Числа: " +
        num +
        ", " +
        num2 +
        ", " +
        num3 +
        ", не являются Пифагорами тройками"
      );
    }
  }
  window.module = {
    perimeterBox,
    squareBox,
    perimeterRec,
    squareRec,
    squareCir,
    cirCumgerence,
    squareTriangle,
    equation,
    pithagTriples,
  };
})();
// №1

let inp = document.querySelector("#inp");
let inp2 = document.querySelector("#inp2");
let p = document.querySelector("#p");
let p2 = document.querySelector("#p2");
let button = document.querySelector("#button");

button.addEventListener("click", function func() {
  p.textContent = p.textContent + module.perimeterBox(+inp.value, +inp2.value);
  p2.textContent = p2.textContent + module.squareBox(+inp.value, +inp2.value);
  button.removeEventListener("click", func);
});

// №2
let inp3 = document.querySelector("#inp3");
let inp4 = document.querySelector("#inp4");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let button2 = document.querySelector("#button2");

button2.addEventListener("click", function func() {
  p3.textContent += module.perimeterRec(+inp3.value, +inp4.value);
  p4.textContent += module.squareRec(+inp3.value, +inp4.value);
  button2.removeEventListener("click", func);
});

// №3
let inp5 = document.querySelector("#inp5");
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let button3 = document.querySelector("#button3");

button3.addEventListener("click", function func() {
  p5.textContent += module.squareCir(+inp5.value);
  p6.textContent += module.cirCumgerence(+inp5.value);
  button3.removeEventListener("click", func);
});

// №4
let inp6 = document.querySelector("#inp6");
let inp7 = document.querySelector("#inp7");
let inp8 = document.querySelector("#inp8");
let p7 = document.querySelector("#p7");
let button4 = document.querySelector("#button4");

button4.addEventListener("click", function func() {
  p7.textContent += module.squareTriangle(
    +inp6.value,
    +inp7.value,
    +inp8.value
  );
  button4.removeEventListener("click", func);
});

// Математические калькуляторы
// №1
let inp9 = document.querySelector("#inp9");
let inp10 = document.querySelector("#inp10");
let inp11 = document.querySelector("#inp11");
let p8 = document.querySelector("#p8");
let button5 = document.querySelector("#button5");
button5.addEventListener("click", function func() {
  p8.textContent += module.equation(+inp9.value, +inp10.value, +inp11.value);
  button5.removeEventListener("click", func);
});

// №2
let inp12 = document.querySelector("#inp12");
let inp13 = document.querySelector("#inp13");
let inp14 = document.querySelector("#inp14");
let p9 = document.querySelector("#p9");
let button6 = document.querySelector("#button6");
button6.addEventListener("click", function func() {
  p9.textContent += module.pithagTriples(
    +inp12.value,
    +inp13.value,
    +inp14.value
  );
  button6.removeEventListener("click", func);
});

// №3
let inp15 = document.querySelector("#inp15");
let button7 = document.querySelector("#button7");

button7.addEventListener("click", function func() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  for (let i = 0; i <= inp15.value; i++) {
    if (inp15.value % i == 0) {
      let span = document.createElement("span");
      span.append(i + ",");
      li.appendChild(span);
    }
  }
  ul.appendChild(li);
  button7.insertAdjacentElement("afterend", ul);
});

// №4
let inp16 = document.querySelector("#inp16");
let inp17 = document.querySelector("#inp17");
let button8 = document.querySelector("#button8");

button8.addEventListener("click", function func() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  for (let i = 0; i < inp16.value || i < inp17.value; i++) {
    if (inp16.value % i == 0 && inp17.value % i == 0) {
      let span = document.createElement("span");
      span.append(i + ",");
      li.appendChild(span);
    }
  }
  ul.appendChild(li);
  inp17.insertAdjacentElement("afterend", ul);
});

// №5
let inp18 = document.querySelector("#inp18");
let inp19 = document.querySelector("#inp19");
let button9 = document.querySelector("#button9");

button9.addEventListener("click", function func() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let arr = [];
  for (let i = 0; i < inp18.value || i < inp19.value; i++) {
    if (inp18.value % i == 0 && inp19.value % i == 0) {
      arr.push(i);
    }
  }
  let arr_max = Math.max.apply(null, arr);
  li.textContent = arr_max;
  ul.appendChild(li);
  inp19.insertAdjacentElement("afterend", ul);
});

// №6
let inp20 = document.querySelector("#inp20");
let inp21 = document.querySelector("#inp21");
let button10 = document.querySelector("#button10");

button10.addEventListener("click", function func() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let arr = [];
  for (let i = 0; i < inp20.value || i < inp21.value; i++) {
    if (inp20.value % i == 0 && inp21.value % i == 0) {
      arr.push(i);
    }
  }
  // console.log(arr)
  let arr_max = Math.min.apply(null, arr);
  li.textContent = arr_max;
  ul.appendChild(li);
  inp21.insertAdjacentElement("afterend", ul);
});

// Анализатор текста
let textarea = document.querySelector("#textarea");
let p10 = document.querySelector("#p10");

let checkbox = document.querySelector("#checkbox");
let checkbox2 = document.querySelector("#checkbox2");
let checkbox3 = document.querySelector("#checkbox3");
let checkbox4 = document.querySelector("#checkbox4");

textarea.addEventListener("blur", function () {
  let arr = textarea.value.split(" ");
  let arr2 = arr.join("");
  arr2 = arr2.split("");
  let arr3 = textarea.value.split("");
  p10.textContent =
    "В этом тексте столько слов: " +
    arr.length +
    " и столько символов: " +
    arr3.length +
    " и столько символов без пробела: " +
    arr2.length;

  let count = {};
  for (let elem of arr2) {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }
  }
  // №5
  let keys = Object.keys(count);
  if ((checkbox.dataset.elem = keys.includes("a"))) {
    checkbox.checked = true;
  }
  if ((checkbox2.dataset.elem = keys.includes("b"))) {
    checkbox2.checked = true;
  }
  if ((checkbox3.dataset.elem = keys.includes("c"))) {
    checkbox3.checked = true;
  }
  if ((checkbox4.dataset.elem = keys.includes("d"))) {
    checkbox4.checked = true;
  }
});

// Игра угадай число
function getRandomInt(min1, max1) {
  return Math.floor(Math.random() * (max1 - min1) + min1);
}
let random = getRandomInt(1, 100);
console.log(random);

let inp22 = document.querySelector("#inp22");
inp22.addEventListener("focus", function () {
  inp22.value = "";
});
inp22.addEventListener("blur", function () {
  if (+inp22.value == random) {
    inp22.value = "Вы угадали";
  } else if (+inp22.value > random) {
    inp22.value = "Введите число поменьше";
  } else {
    inp22.value = "Введите число побольше";
  }
});

// Игра угадай ячейку
let table = document.querySelector("#table");
let td;
let k = 0;
let random2 = [];
let j = 0;
for (let i = 1; i <= 10; i++) {
  let tr = document.createElement("tr");
  for (let i = 1; i <= 10; i++) {
    td = document.createElement("td");
    td.innerHTML = k;
    tr.append(td);
    k++;
    // console.log(k);
  }
  random2.push(getRandomInt(j, k));
  j += 10;
  table.append(tr);
}
console.log(random2);
let k2 = 0;
let tds = document.querySelectorAll("#table td");
for (let i of tds) {
  i.addEventListener("click", function func(event) {
    console.log(event.target.innerHTML);
    if (random2.includes(+event.target.innerHTML) == true) {
      k2++;
      console.log(k2);
      if (k2 == 10) {
        table.textContent = "Вы победили";
      }
      i.setAttribute("class", "tbbgrdgreen");
      i.removeEventListener("click", func);
    }
  });
}

// №2
let span = document.querySelector("#span");
let timerId = setInterval(function () {
  span.textContent--;
  if (+span.textContent <= 0) {
    clearInterval(timerId);
    table.textContent = "Вы проиграли!";
  }
}, 1000);

// Экранная клавиатура
let but = document.querySelectorAll(".but");
let display = document.querySelector(".display");
let backspace = document.querySelector(".backspace");
let capslock = document.querySelector(".caps_lock");
let space = document.querySelector(".space");

for (let k of but) {
  k.addEventListener("click", function () {
    display.textContent += k.value;
  });
}

let k3 = 1;
capslock.addEventListener("click", function () {
  if (k3 == 1) {
    for (let k of but) {
      k.value = k.value.toUpperCase();
    }
    k3 += 1;
  } else {
    for (let k of but) {
      k.value = k.value.toLowerCase();
    }
    k3 -= 1;
  }
});

backspace.addEventListener("click", function () {
  display.textContent = "";
});

space.addEventListener("click", function () {
  display.textContent += " ";
});

// Линейный календарь
let previousMonth = document.querySelector(".previousMonth");
let monthText = document.querySelector(".monthText");
let yearText = document.querySelector(".yearText");
let nextMonth = document.querySelector(".nextMonth");
let days = document.querySelector("#days");

let nowDate = new Date();
let nowDay = nowDate.getDate();
let nowMonth = nowDate.getMonth();
let nowYear = nowDate.getFullYear();
let monthName = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year, month) {
  let lastDayMonth = new Date(year, month + 1, 0).getDate();
  let lastDayPreviousMonth = new Date(year, month, 0).getDay();
  let monthDaysText = "";

  monthText.textContent = monthName[month];
  yearText.textContent = year;
  days.innerHTML = "";

  if (lastDayPreviousMonth > 0) {
    for (let i = 1; i <= lastDayPreviousMonth; i++) {
      monthDaysText += "<li></li>";
    }
  }
  for (let i = 1; i <= lastDayMonth; i++) {
    monthDaysText += "<li>" + i + "</li>";
  }

  days.innerHTML = monthDaysText;

  if (month == nowMonth && year == nowYear) {
    let li = days.getElementsByTagName("li");
    li[lastDayPreviousMonth + nowDay - 1].classList.add("date-now");
  }
}

setMonthCalendar(nowYear, nowMonth);

previousMonth.onclick = function () {
  let curDate = new Date(
    yearText.textContent,
    monthName.indexOf(monthText.textContent)
  );

  curDate.setMonth(curDate.getMonth() - 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};

nextMonth.onclick = function () {
  let curDate = new Date(
    yearText.textContent,
    monthName.indexOf(monthText.textContent)
  );

  curDate.setMonth(curDate.getMonth() + 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};

// Поиск тегов
let inp23 = document.querySelector("#inp23");
let error = document.querySelector("#error");
let search_tag = document.querySelector(".search_tag");

function init() {
  let block_textTag = document.querySelectorAll(".block_textTag");
  for (let i = 0; i < block_textTag.length; i++) {
    block_textTag[i].style.display = "none";
  }
}
init();

inp23.addEventListener("keypress", function (event) {
  let data = inp23.value;
  if (event.key == "Enter") {
    let block_textTag = document.querySelectorAll(".block_textTag");
    for (let i = 0; i < block_textTag.length; i++) {
      block_textTag[i].style.display = "none";
    }
    let block = document.querySelector('.block_textTag[data="' + data + '"]');
    block.style.display = "block";
    console.log(block);
  }
});

// Поиск исторических события
let inp24 = document.querySelector("#inp24");
let table2 = document.querySelector("#table2");

let events = {
  2023: [
    {
      date: "01.01.2023",
      name: "событие 1",
      text: "Вступление Хорватии в Шенгенскую зону, переход Хорватии на евро.",
    },
    {
      date: "01.01.2023",
      name: "событие 2",
      text: "Вступление Луиса Инасиу Лулы да Силвы в должность президента Бразилии.",
    },
    {
      date: "01.01.2023",
      name: "событие 3",
      text: "В Казахстане вместо Конституционного совета был восстановлен Конституционный суд, упразднённый в 1995 году.",
    },
    {
      date: "06.01.2023",
      name: "событие 4",
      text: "Кевин Маккарти избран спикером Палаты представителей США.",
    },
  ],
  2022: [
    {
      date: "01.01.2022",
      name: "событие 1",
      text: "Вступление в России в силу федерального закона о приземлении иностранных IT-компаний.",
    },
    {
      date: "01.01.2022",
      name: "событие 2",
      text: "Вступление в силу 11 версии Международной классификации болезней (МКБ-11).",
    },
    {
      date: "01.01.2022",
      name: "событие 3",
      text: "Вступление в РФ в силу запрета на экспорт необработанного круглого леса и запущена цифровая информационная система отслеживания оборота сырья.",
    },
    {
      date: "01.01.2022",
      name: "событие 4",
      text: "Полное снятие в КНР ограничений на инвестиции иностранного капитала в местный автопром.",
    },
  ],
  2021: [
    {
      date: "01.01.2021",
      name: "событие 1",
      text: "Запрет использования пластиковых пакетов в магазинах в крупных городах КНР.",
    },
    {
      date: "01.01.2021",
      name: "событие 2",
      text: "Остановка поддержки и обновления «Flash Player» компанией «Adobe».",
    },
    {
      date: "01.01.2021",
      name: "событие 3",
      text: "Прекращение выдачи бумажных трудовых книжек в Российской Федерации.",
    },
    {
      date: "01.01.2021",
      name: "событие 4",
      text: "Начало поставки компанией «Газпром» природного газа в Сербию и Боснию и Герцеговину по новому маршруту.",
    },
  ],
};

inp24.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let year = inp24.value;

    if (events[year]) {
      table2.textContent = "";

      for (let event of events[year]) {
        let tr = document.createElement("tr");

        let td;

        td = document.createElement("td");
        td.textContent = event.date;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = event.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = event.text;
        tr.appendChild(td);

        table2.appendChild(tr);
      }
    }
  }
});

// Гороскоп
let inp25 = document.querySelector("#inp25");
let goroskop = document.querySelector(".goroskop");

let date = {
  "01.01.2003": [
    {
      textToday:
        "Многое сложится удачно, если сегодня вы ко всем делам отнесетесь со своей обычной серьезностью, не проявите легкомыслия даже в мелочах. Важным будет внимание к мелким деталям: благодаря ему вы не допустите ошибок, не попадете в ловушки, расставленные недоброжелателями. Стоит быть внимательными Козерогам, которые проведут день в поездках. Есть риск потерять ценные вещи или важные документы, допустить какие-то досадные промахи. Свободное время стоит провести с самыми близкими людьми. Они поднимут вам настроение и во всем поддержат.",
      textTomorrow:
        "Непросто будет сохранять спокойствие, особенно в первой половине дня. В это время вы можете волноваться из-за пустяков и куда больше, чем обычно, переживать по любому поводу. Давние знакомые постараются поддержать вас, помогут настроиться на позитивный лад. Не отказывайтесь от необычных предложений, возможности побывать на каких-то интересных мероприятиях. Вторая половина дня подойдет для завершения дел, начатых раньше, а также для решения организационных вопросов. Не возникнет сложностей с оформлением документов.",
      textAterTomorrow:
        "Подумайте дважды, прежде чем предпринимать что-то важное. Сегодня лучше не участвовать в сомнительных мероприятиях, не рисковать и по возможности придерживаться плана, составленного раньше. Новые знакомые могут вам понравиться, но не исключено, что первое впечатление окажется обманчивым. Так что не спешите делиться с ними ни своими секретами, ни своими деньгами. День будет благоприятным для романтического свидания: оно пройдет даже лучше, чем вы ожидали. Вероятны сюрпризы, которые запомнятся надолго, и предложения, от которых не захочется отказываться.",
    },
  ],
  "02.01.2003": [
    {
      textToday: "Сегодня ваш день, так как вы родились",
      textTomorrow: "Завтра будет непросто.",
      textAterTomorrow:
        "Сегодня лучше не участвовать в сомнительных мероприятиях, не рисковать и по возможности придерживаться плана, составленного раньше.",
    },
  ],
};

inp25.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let data = inp25.value;
    goroskop.textContent = "";
    // let str = data.split(".");
    // let str2 = str.join(",");
    // let time = new Date(str2);

    if (date[data]) {
      for (let elem of date[data]) {
        let div = document.createElement("div");
        div.className = "inpradio";

        let input1 = document.createElement("input");
        let input2 = document.createElement("input");
        let input3 = document.createElement("input");
        input1.type = "radio";
        input1.checked = "checked";
        input2.type = "radio";
        input3.type = "radio";
        input1.name = "data";
        input2.name = "data";
        input3.name = "data";

        let div2 = document.createElement("div");
        div2.className = "block";

        let div3 = document.createElement("div");
        div3.className = "block";

        let div4 = document.createElement("div");
        div4.className = "block";

        let p2 = document.createElement("p");
        p2.textContent = "Сегодня";
        let p3 = document.createElement("p");
        p3.textContent = "Завтра";
        let p4 = document.createElement("p");
        p4.textContent = "После завтра";

        let p = document.createElement("p");
        p.textContent = elem.textToday;

        goroskop.append(div);

        div2.appendChild(input1);
        div2.appendChild(p2);
        div.appendChild(div2);

        div3.appendChild(input2);
        div3.appendChild(p3);
        div.appendChild(div3);

        div4.appendChild(input3);
        div4.appendChild(p4);
        div.appendChild(div4);
        goroskop.appendChild(p);

        console.log(elem.textToday);
        input1.addEventListener("change", function () {
          p.textContent = elem.textToday;
        });
        input2.addEventListener("change", function () {
          p.textContent = elem.textTomorrow;
        });
        input3.addEventListener("change", function () {
          p.textContent = elem.textAterTomorrow;
        });
      }
    }
  }
});

// Сайт предсказаний

let good__predictions = [
  "у вас сегодня будет замечательный день",
  "сегодня лучше не выходите из дома",
  "сегодня вас ждет удача и успех во всех начинаниях",
  "сегодня вас ждет успех при изучении JavaScript",
  "сегодня лучше полежите весь день на диване",
  "сегодня вы не рискуете что-нибудь забыть при выходе из дома",
  "устройте сегодня себе выходной - пусть весь мир подождет",
];

let bad__predictions = [
  "сегодня лучше ни чем не занимайтесь",
  "сегодня вас не ждет удача и успех во всех начинаниях",
  "сегодня вы рискуете что-нибудь забыть при выходе из дома",
  "сегодня лучше не работать",
  "у вас сегодня ничего не выйдет",
  "не устройте сегодня себе выходной - пусть весь мир подождет",
  "сегодня вас не ждет успех при изучении JavaScript",
];

let timer = document.querySelector("#timer");
let good__text = document.querySelector("#good__text");
let bad__text = document.querySelector("#bad__text");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let random3;
let timerId3;
start.addEventListener("click", function () {
  this.classList.remove("active");
  stop.classList.add("active");

  timerId3 = setInterval(function () {
    timer.textContent = random3 = getRandomInt(1, good__predictions.length);
  }, 100);
});

stop.addEventListener("click", function () {
  this.classList.remove("active");
  clearInterval(timerId3);

  good__text.textContent = good__predictions[random3 - 1];
  bad__text.textContent = bad__predictions[random3 - 1];
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Автодополнение
let arr = [
  "Китай",
  "Япония",
  "Казакстан",
  " США",
  "Россия",
  "Германия",
  "Финляндия",
  "Франция"
];

let elem = document.querySelector("#elem");
let list = document.querySelector("#list");

elem.addEventListener("input", function () {
  list.textContent = "";

  if (this.value !== "") {
    let matches = arr.filter((item) => item.startsWith(this.value));

    if (matches.length > 0) {
      for (let match of matches) {
        let li = document.createElement("li");
        li.textContent = match;
        list.appendChild(li);

        li.addEventListener("click", function () {
          elem.value = this.textContent;
          list.textContent = "";
        });
      }
    }
  }
});

// Спойлер
let toggle2 = document.querySelectorAll(".toggle");

for (let elem of toggle2) {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    elem.parentElement.nextElementSibling.classList.toggle('active');
  });
}


// Вкладки			
let parent = document.querySelector('#parent-tabs');
let links  = parent.querySelectorAll('.menu a');
let tabs   = parent.querySelectorAll('.tab');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    let activeLink = parent.querySelector('.menu a.active');
    activeLink.classList.remove('active');
    
    let activeTab = parent.querySelector('.tab.active');
    activeTab.classList.remove('active');
    
    tabs[i].classList.add('active');
    this.classList.add('active');
    
    event.preventDefault();
  });
}

// Аккордион

			
let accordion = document.querySelector('#accordion');
let linkss  = accordion.querySelectorAll('.tabik .link a');

for (let link of linkss) {
  link.addEventListener('click', function(event) {
    let activeTab = accordion.querySelector('.tabik.active');
    
    if (activeTab) {
      activeTab.classList.remove('active');
    }
    
    let newTab = link.closest('.tabik');
    if (newTab !== activeTab) {
      newTab.classList.add('active');
    }
    
    event.preventDefault();
  });
}

// Игра в города 
let field   = document.querySelector('#field');
let message = document.querySelector('#message');

let cities = [];

let robot = ['Алушта','Феодосия','Ялта', 'Севастополь', 'Симферополь', 'Абакан', 'Адлер', 'Анапа', 'Ангарск', 'Архангельск', 
'Астрахань', 'Барнаул', 'Белгород', 'Благовещенск','Чебоксары','Челябинск','Череповец','Черняховск','Чита','Екатеринбург',
'Геленджик','Иркутск','Ижевск','Кабардинка','Калининград','Казань','Кемерово','Хабаровск','Ханты-Мансийск','Кисловодск','Комсомольск-на-Амуре',
'Кострома','Краснодар','Красноярск','Курган','Курск','Липецк','Листвянка','Магадан','Магнитогорск','Махачкала','Минеральные Воды',
'Москва','Мурманск','Находка','Нальчик','Нижневартовск','Нижний Новгород','Ноябрьск','Норильск','Новокузнецк','Новороссийск',
'Новосибирск','Новый Уренгой','Омск','Оренбург','Пенза','Пермь','Петропавловск-Камчатский','Петрозаводск','Псков',
'Пятигорск','Ростов-на-Дону','Рязань','Салехард','Самара','Саранск','Саратов','Саяногорск','Сочи','Санкт-Петербург','Ставрополь',
'Сургут','Суздаль','Светлогорск','Сыктывкар','Таганрог','Тольятти','Томск','Тула','Тверь','Тюмень','Уфа','Углич','Ухта','Улан-Удэ', 
'Ульяновск','Великий Новгород','Владикавказ','Владимир','Владивосток','Волгоград','Воркута','Воронеж','Выборг','Якутск','Ярославль','Йошкар-Ола',
'Южно-Сахалинск','Химки','Калуга','Елабуга','Азов','Александров','Брянск','Вологда','Выкса','Грозный','Иваново','Киров',
'Муром','Набережные Челны','Нижнекамск','Переславль-Залесский','Ростов Великий','Сергиев Посад','Смоленск','Старая Русса','Тамбов','Тобольск',
'Шахты','Стрельна','Петергоф','Пушкин','Обнинск','Армавир','Гатчина','Зеленогорск','Репино','Солнечное','Шлиссельбург','Воскресенское',
'Коломна','Рождествено','Октябрьский','Всеволожск','Бузулук','Ессентуки','Кировск','Новокуйбышевск','Приозерск','Рыбинск','Серпухов',
'Стерлитамак','Ступино','Туапсе','Чайковский','Энгельс','Шуя','Сорочинск','Терскол','Кропоткин','Дзержинск','Тихвин','Шатура',
'Златоуст','Горно-Алтайск','Великие Луки','Биробиджан','Волгодонск','Волжский','Ейск','Белокуриха','Кирово-Чепецк','Майкоп',
'Нягань','Саров','Северодвинск','Старый Оскол','Троицк','Шадринск','Подольск','Дмитров','Дагомыс','Красная Поляна','Лазаревское',
'Лоо','Хоста','Зеленоградск','Балашиха','Лысково','Витязево','Вельск','Великий Устюг','Кингисепп','Звенигород','Северобайкальск',
'Первоуральск','Ногинск','Электросталь','Тихорецк','Ломоносов','Дубна','Брейтово','Железноводск','Голубицкая','Грязи',
'Эсто-Садок','Ангелово','Знаменский','Архипо-Осиповка','Горячий Ключ','Домбай','Животино','Королёв','Курово','Мышкин','Небуг',
'Никола','Шерегеш','Сукко','Янтарный','Морское','Гурзуф','Евпатория','Керчь','Коктебель','Курпаты','Черноморское','Крым',
'Одинцово','Жуковский','Конаково','Петрово-Дальнее','Городец','Иноземцево','Тургояк',
];


field.addEventListener('keypress', function(event){
  if(event.key == "Enter"){
    if(robot.includes(field.value)){
      field.value = field.value;
      if(cities.length == 0){
        cities.push(field.value);
        field.value = '';
        
        if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
          field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
        }else{
          field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
        }
        
      }else if(cities.includes(field.value)){
        field.value = '';
        field.placeholder = ('Этот город уже был!');
      }
      else{
        
        if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
          field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
          console.log(cities.slice(-1).join("").slice(-1));
          if(cities.slice(-1).join("").slice(-2, -1).toUpperCase() == field.value.slice(0, 1).toUpperCase()){
            cities.push(field.value);
            field.value = '';
            field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
          }
        }else{
          if(cities.slice(-1).join("").slice(-1).toUpperCase() == field.value.slice(0, 1).toUpperCase()){
            cities.push(field.value);
            field.value = '';
            field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
            
            if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ'){
              field.placeholder = ('Напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
            }
          }
        }
      }
      for(let i of robot){
        if(cities.includes(i)){
          field.value = '';
          field.placeholder = ('Этот город уже был!');
        }
        else{
    
          if(cities.slice(-1).join("").slice(-1) == 'ь' || cities.slice(-1).join("").slice(-1) == 'ъ' || cities.slice(-1).join("").slice(-1) == 'ы'){
            if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-2, -1).toUpperCase()){
              cities.push(i);
              // field.value = '';
              field.placeholder = (i + ', напишите название города на ' + i.slice(-1).toUpperCase());
              break;
            }
            // break;
          }else{
            if(i.slice(0, 1).toUpperCase() == cities.slice(-1).join("").slice(-1).toUpperCase()){
              cities.push(i);
              // field.value = '';
              field.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-1).toUpperCase());
              
              if(i.slice(-1) == 'ь' || i.slice(-1) == 'ъ' || i.slice(-1) == 'ы'){
                field.placeholder = (i + ', напишите название города на ' + cities.slice(-1).join("").slice(-2, -1).toUpperCase());
                // break;
              }
              break;
            }
          }
        }
      }
    }else{
      field.value = '';
      field.placeholder = 'Неверно написан город, ' + 'Напишите название города на' + cities.slice(-1).join("").slice(-1).toUpperCase();
    }
    
    console.log(cities);
  }
});

// Чеклист
let checklist = document.querySelector('#checklist');
let ckList = document.querySelector('#ckList');

checklist.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
    let li = document.createElement('li');

    let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
    task.addEventListener('dblclick', function() {
      let input = document.createElement('input');
      input.value = task.textContent;
      task.textContent = '';
      task.appendChild(input);

      input.addEventListener('keypress', function(e){
        if(e.key == 'Enter'){
          task.textContent = input.value;
          input.remove();
        }
      });

    });
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
    remove.addEventListener('click', function(e) {
      li.remove();
    });
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
    mark.addEventListener('click', function() {
      // здесь будет код для отметки дела сделанным
      task.classList.add('done');
    });
		li.appendChild(mark);

    ckList.appendChild(li);
    checklist.value = '';
	}
});

// Записная книжка

let saveText = document.querySelector('#saveText');
let textBook = document.querySelector('#textBook');
let create = document.querySelector('#create');
let notes = document.querySelector('#notes');
// console.log(notes.children.length);
let texts = [];
let i = 0;

let rejim = document.createElement('p');
rejim.textContent = 'Режии создания';
create.append(rejim);
saveText.addEventListener('click', function(e){
  let mode = saveText.dataset.mode;
  
  
  if (mode == 'create') {
    texts.push(textBook.value);         //Запихивате текст из текстария в массив

    let li = document.createElement('li');                    //создаем запись
    // li.textContent = 'Запись ' + (1 + notes.children.length); //Текст с номером записи
    li.setAttribute('data-key', i);   //Ключ записи

    let open = document.createElement('span');
    open.textContent = 'Запись ' + (i);

    
    let remove = document.createElement('span');
    remove.textContent = 'X';

    li.appendChild(open);                                    //Запихиваем запись
    li.appendChild(remove);                                    //Запихиваем запись
    notes.appendChild(li);                                    //Запихиваем запись

    open.addEventListener('click', function(e){   
      textBook.value = texts[li.dataset.key];

      for(let item of notes.children){
        if(item.hasAttribute('class','active')){
          item.classList.remove('active');
        }
      }
      li.classList.add('active');
      
      saveText.setAttribute('data-key', li.dataset.key);
      saveText.setAttribute('data-mode', 'update');

      rejim.textContent = 'Режии редактирования';
      // create.append(rejim);
      
    });
    remove.addEventListener('click', function(){
      textBook.value = '';
      delete texts[li.dataset.key];
      li.remove();
      saveText.setAttribute('data-mode', 'create');
      rejim.textContent = 'Запись успешно удалена Режии создания';
      console.log(texts);
    });
    rejim.textContent = 'Режии создания';
    textBook.value = '';
	}
	
	if (mode == 'update') {
		let key = this.dataset.key;
		console.log(key);
    texts[key] = textBook.value;
	}
  console.log(texts);
  i++;
});

create.addEventListener('click', function(){
  // saveText.removeAttribute('data-key', li.dataset.key - 1);
  saveText.setAttribute('data-mode', 'create');
  textBook.value = '';
  
  rejim.textContent  = 'Режии создания';
  // create.append(rejim);
});

// Калькулятор продуктов
let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let tableProducts  = document.querySelector('#tableProducts');
let total  = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');
	
  allowEdit(createCell(tr, name.value, 'name'));
  allowEdit(createCell(tr, price.value, 'price'));
  allowEdit(createCell(tr, amount.value, 'amount'));
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
    // удалим ряд таблицы
    tr.remove();
    recountTotal(); // пересчитаем общую сумму
  });
	
	tableProducts.appendChild(tr);
  recountTotal(); // пересчитаем общую сумму
});

function createCell(tr, value, name) {
  td = document.createElement('td');
  td.textContent = value;
  td.classList.add(name);
  return tr.appendChild(td);
} 

function recountTotal() {
	let costs = tableProducts.querySelectorAll('.cost');
	
	if (costs) {
    let sum = 0;
    for(let i of costs){
      console.log(i);
      sum += +i.textContent;
    }
    total.textContent = sum;
	}
}

function allowEdit(td) {
  td.addEventListener('dblclick', function() {
		let text = td.textContent
		td.textContent = '';
		
		let input = document.createElement('input');
		input.value = text;
		input.focus();
		td.appendChild(input);
		
		input.addEventListener('keydown', function(event) {
			if (event.key == 'Enter') {
				td.textContent = this.value;
				
				if (td.classList.contains('price') || td.classList.contains('amount')) {
					let priceTr = td.parentElement.querySelector('.price').textContent;
					let amountTr = td.parentElement.querySelector('.amount').textContent;
					let costTr = td.parentElement.querySelector('.cost');

          costTr.textContent = +amountTr * +priceTr;
          
          recountTotal(); // пересчитаем общую сумму
				}
			}
		});
	});
}

// Тесты

let dataRight = document.querySelectorAll('[data-right]');
let testBtn = document.querySelector('.testBtn');

let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
];



testBtn.addEventListener('click',function(){
  // через массив
  for(let i in answers){
    if(dataRight[i].value == answers[i]){
      dataRight[i].setAttribute('class', 'right');
    }else{
      dataRight[i].setAttribute('class', 'wrong');
    }
  }


  // через data в инпутах
  // for(let i of dataRight){
  //   if(i.value == i.dataset.right){
  //     i.setAttribute('class', 'right');
  //   }else{
  //     i.setAttribute('class', 'wrong');
  //   }
  // }
});

// for(let i of dataRight){
//   i.addEventListener('keydown', function(e){
//     if(e.key == 'Enter'){
//       if(i.value == i.dataset.right){
//         i.setAttribute('class', 'right');
//       }else{
//         i.setAttribute('class', 'wrong');
//       }
//       console.log(i.dataset);
//     }
//   });
// }

let questions = [
	'вопрос 1?',
	'вопрос 2?',
	'вопрос 3?'
];

let test2 = document.querySelector('#test2');
let testBtn2 = document.querySelector('#testBtn2');

for(let i of questions){
  let div = document.createElement('div');

  let p = document.createElement('p');
  p.textContent = i;
  
  let input = document.createElement('input');

  div.appendChild(p);
  div.appendChild(input);

  test2.appendChild(div);
}

testBtn2.addEventListener('click', function(){
  check(test2.querySelectorAll('input'));
});

function check(input){
  for(let i in answers){
    if(input[i].value == answers[i]){
      input[i].setAttribute('class', 'right');
    }else{
      input[i].setAttribute('class', 'wrong');
    }
  }
}

// Слайдеры
let textsSlider = ['text1', 'text2', 'text3'];
let leftSlider = document.querySelector('#left');
let rightSlider = document.querySelector('#right');
let slider = document.querySelector('#slider');

//смене по времени
// let l = 0;
// let timerIds = setInterval(function() {
//   slider.textContent = textsSlider[l++];
//   if(l > 2){
//     l = 0;
//   }
// }, 1000);

// смена по стрелочкам
let o = 0; // внешняя переменная

left.addEventListener('click', function(e) {
  e.preventDefault();
  slider.textContent = textsSlider[o--];

  // По кругу
  // if(o < 0){
    // o = 2;
  // }
  // 
  if(o <= 0){
    o = 0;
  }
});

right.addEventListener('click', function(e) {
  e.preventDefault();
  slider.textContent = textsSlider[o++];
  
  // По кругу
  // if(o > 2){
    // o = 0;
  // }

  if(o >= 2){
    o = 2;
  }
});
