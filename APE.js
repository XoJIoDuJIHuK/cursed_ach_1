xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'catalogue.xml', false);
xmlhttp.send();
xml = xmlhttp.responseXML;
let xml_autos = xml.getElementsByTagName("AUTO");
function build (amount_of_cards)
{
  //характеристики каждого автомобиля
	let arr_left = ["Максимальная скорость", "Мощность двигателя", 
	"Максимальный крутящий момент", "Объём топливного бака",
	"Разгон до 100 км/ч", "Расход топлива", 'Выбросы CO<sub>2</sub>',
	"Высота", "Собственный вес"];
	let card = '<div class="auto_card"><div class="img">';
	for (i = 0; i < 5; i++)
	{
    //добавление пяти изображений для анимации
		card += '<img class="img' + (i + 1) + '">';
	}
	card += '</div><div class="car_name"></div><div class="info">';
	for (i = 0; i < arr_left.length; i++)
	{
    //создание блока для каждой характеристики
		card += '<div class="line"><div>' + arr_left[i] + '</div>\
			<div class="dots"></div>\
				<div class="speed"></div>\
					</div>';
	}
	card += '</div>\
		<div class="price_block" id="price_id">\
			<div class="price"></div>\
			<a href="form_page.html">\
			<button>\
			Оформление<br> заказа\
			</button>\
			</a>\
			</div>\
			</div>';
	
	for (i = 0; i < amount_of_cards; i++)
	{
		document.querySelector(".filler").insertAdjacentHTML('afterend', card);
	}
}

function catalogue (model)
{
	let amount_of_cards = xml.querySelector("APE").childElementCount;
	let array_of_i_models = [];
	for (i = 0; i < amount_of_cards; i++)
	{
		if (xml_autos[i].querySelector("MODEL").innerHTML == model ||
        model == "all")
		  array_of_i_models.push(i);
	}
	build(array_of_i_models.length);
	let html_autos = document.querySelectorAll(".auto_card");
	let dots = "..............................................................................................................................................................................................................................................................................................................."
	for (i = 0; array_of_i_models.length; i++)
	{
		let auto = xml_autos[array_of_i_models[i]];
    	let amount_of_lines = html_autos[i].querySelectorAll(".line").length;
    	for (j = 0; j < amount_of_lines; j++)
    	{
    		html_autos[i].querySelectorAll(".line")[j].children[1].innerHTML = dots;
    		html_autos[i].querySelector(".info").children[j].children[2].innerHTML = auto.children[j + 5].innerHTML;
    	}
    	html_autos[i].querySelector(".car_name").innerHTML = auto.querySelector("NAME").innerHTML;
    	html_autos[i].querySelector(".price").innerHTML = auto.querySelector("PRICE").innerHTML;
    	let images = html_autos[i].querySelectorAll("img");
    	for (j = 0; j < 5; j++)
    	{
    		images[j].src = 'img/' + auto.querySelector("IMG_PATH").innerHTML + '_' + (j + 1) + '.jpg';
    	}
	}
}

function form()
{
  let selectIn = "";
  for (i = 0; i < xml_autos.length; i++)
  {
    //заполнение тега select тегами option с названиями моделей автомобилей внутри
    selectIn += "<option>" + xml_autos[i].children[0].innerHTML + "</option>";
  }
  document.querySelector("select").insertAdjacentHTML('afterbegin', selectIn);
}

function main_func()
{
	if (document.querySelector(".auto_cards"))
	{
		let html_autos = document.querySelectorAll(".auto");
		for (i = 0; i < 6; i++)
		{
			let name, desc, path, model;
			for (j = 0; xml_autos[j]; j++)
			{
				if (xml_autos[j].querySelector("ID").innerHTML == (i + 1))
				{
					name = xml_autos[j].querySelector("NAME").innerHTML;
          desc = xml_autos[j].querySelector("DESC").innerHTML;
          path = xml_autos[j].querySelector("IMG_PATH").innerHTML;
          model = xml_autos[j].querySelector("MODEL").innerHTML;
          break;
				}
			}
      html_autos[i].querySelector("a").href = model + ".html";
			html_autos[i].querySelector(".car_name").innerHTML = name;
			html_autos[i].querySelector(".car_desc").innerHTML = desc;
			html_autos[i].querySelector(".car_image").style.backgroundImage = 'url(img/' + path + '_1.jpg)';
		}
	}
  switch (document.querySelector(".filler").id)
  {
    case "mod991":
      catalogue("991");
      break;
    case "Cayenne":
      catalogue("Cayenne");
      break;
    case "Panamera":
      catalogue("Panamera");
      break;
    case "all":
      catalogue("all");
      break;
    case "form":
      form();
      break;
  }
}
document.addEventListener("DOMContentLoaded", main_func);