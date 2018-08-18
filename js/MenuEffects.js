var timers = new Object(); 
		
//Установка видимости выпадающего меню
function setVisibility(objID, visible) {
	var point = document.getElementById(objID);
	point.style.visibility = (visible) ? "visible" : "";
}
		
//Показать меню
function showMenu(objID) {
	setVisibility(objID + 'Select', true);
	clearTimeout(timers[objID]);
	document.getElementById(objID + 'Menu').style.color = "#000";
	document.getElementById(objID + 'Menu').style.backgroundColor = "#fff";
}
		
//Скрыть меню
function slowHideMenu(objID)
{
	var point = document.getElementById(objID + 'Select');
	document.getElementById(objID + 'Menu').style.color = "#a0a1a2";
	document.getElementById(objID + 'Menu').style.backgroundColor = "";
	setVisibility(objID + 'Select', false);
}

//Установка таймера вызова функции скрывания меню
function hideMenu(objID) {
	var cmd = "slowHideMenu('" + objID + "');";
	timers[objID] = setTimeout(cmd, 300);
}

//Отключить пункт меню выбора параметров
function menuDisable(objID) {
	var obj = document.getElementById(objID + "Menu");
	var m_obj = document.getElementById(objID + "Select");
	m_obj.style.visibility = "hidden";
	obj.style.opacity = "0.6";
	obj.style.color = "#a0a1a2";
	obj.style.backgroundColor = "";
	obj.style.cursor = "default";
	obj.onmouseover = function () {return false}
}

//Включить пункт меню выбора параметров
function menuEnable(objID) {
	var obj = document.getElementById(objID + "Menu");
	obj.style.opacity = "1";
	obj.style.cursor = "pointer";
	obj.style.border = "2px solid #ffffff";
	obj.onmouseover = function () {showMenu(objID)}
}

//ОТключить кнопку
function buttonDisable(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.opacity = "0.6";
	obj.style.cursor = "default";
	obj.style.border = "2px solid #ffffff";
	obj.onclick = function () {return false}
	obj.onmouseover = function () {return false}
	obj.onmouseout = function () {return false}
	obj.onmouseup = function () {return false}
	obj.onmousedown = function () {return false}
}

//Включить кнопку
function buttonEnable(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.opacity = "1";
	obj.style.cursor = "pointer";
	obj.onclick = function () {eval(objID + "Game()")}
	obj.onmouseover = function () {eval("mouseButtonOver('" + objID + "')")}
	obj.onmouseout = function () {eval("mouseButtonOut('" + objID + "')")}
	obj.onmouseup = function () {eval("mouseButtonUpped('" + objID + "')")}
	obj.onmousedown = function () {eval("mouseButtonDowned('" + objID + "')")}
}

//Отбражение при наведении мыши
function mouseButtonOver(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.border = "5px double #ffffff";
}

//Отбражение при отведении мыши
function mouseButtonOut(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.border = "2px solid #ffffff";
	obj.style.marginTop = "10%";
}

//Отображение при нажатии кнопки
function mouseButtonDowned(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.marginTop = "12%";
}

//Отбражение при опускании кнопки
function mouseButtonUpped(objID) {
	var obj = document.getElementById(objID + "btn");
	obj.style.marginTop = "10%";
}

//Показать/скрыть header footer
function showHideHF(visible) {
	var header = document.getElementById('header');
	var footer = document.getElementById('footer');
	header.style.visibility = visible;
	footer.style.visibility = visible;
	mouseButtonOut('startPause');
	calcGlassPos();
	imageGlassBoxes();
	imageNextFigure(nextFigure);
}

