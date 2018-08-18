//Инициализация обработчиков событий и начальных параметров
var diffGame = "Easy"; //Сложность игры
var speedGame = 1;  //Скорость падения фигур
var glassWidth = 10; //Ширина стакана (в квадратиках)
var glassHeight = 20; //Высота стакана (в квадратиках)
var gameStarted = false; //Флажок, что была нажата кнопка старта игры
var gamePaused = true; //Игра на паузе
var endGame = false;//Флажок окончания игры
var topRecordInput = false;//Блокируем клавиатуру при вводе имени для табл. рекордов
var box = []; //Ячейки стакана
var boxColors = []; //Цвета ячеек стакана
var points = 0; //Заработанные очки
var speedUp = 300; //Порог, когда скорость увеличивается 
var currFigure; //Текущая фигура в стакане
var nextFigure; //Следующая фигура
var clone;//Клон фигуры для трансформаций
var v_pos; //Вертикальная позиция пададающей фигуры
var g_pos; //Горизонтальная позиция падающей фигуры

//Расчет размера и позиции стакана
function calcGlassPos() {
	//расчет высоты wrapper
	var height = 70;
	if(gamePaused) height = 230;
	var wrapperHeight = document.body.clientHeight - height;
	var wrapper = document.getElementById("wrapper");
	wrapper.style.height = wrapperHeight + "px";
	
	//расчет высоты и ширины стакана
	var glassContainer = document.getElementById("glassContainer");
	var rightBar = document.getElementById('rightbar');
	var parentWidth = glassContainer.clientWidth;
	var parentHeight = glassContainer.clientHeight;
	var glass = document.getElementById("glass");
	var gHeight=parentHeight;
	gHeight = gHeight-gHeight%glassHeight;
	var gWidth = gHeight/2;
	glass.style.width = gWidth + "px";
	glass.style.height = gHeight + "px";
	if(gamePaused || endGame) {
		glass.style.marginTop = "";
		rightbar.style.marginTop = "";
		wrapper.style.marginTop = "";
		document.documentElement.style.minHeight = 620 + "px";
		document.documentElement.style.overflow = "";
		document.body.style.minHeight = 620 + "px";
		document.body.style.overflow = "";
	}else{ 
		glass.style.marginTop = "-70px";
		rightbar.style.marginTop = "-70px";
		wrapper.style.marginTop = "-80px";
		document.documentElement.style.minHeight = 450 + "px";
		document.documentElement.style.overflow = "hidden";
		document.body.style.minHeight = 450 + "px";
		document.body.style.overflow = "hidden";
	}	
	
	//расчет позиции информационного окна
	var pauseinfo = document.getElementById("pauseinfo");
	pauseinfo.style.marginLeft = parentWidth/2 - 100 + "px";
	
	//Центрируем надписи на кнопках
	document.getElementById('startPausebtn').style.lineHeight = document.getElementById('startPausebtn').clientHeight - 3 + "px";
	document.getElementById('resetbtn').style.lineHeight = document.getElementById('resetbtn').clientHeight - 3 + "px";
}

//Генерировать ячейки стакана
function resetGlassBoxes() {
	for(var i=0; i<glassHeight; i++){
		box[i] = [];
		boxColors[i] = [];
		for(var j=0; j<glassWidth; j++) {
			box[i][j] = 0;
			boxColors[i][j] = "";
		}
	}
}

//Заполняем стакан div-ами
function imageGlassBoxes(){
	var glass = document.getElementById("glass");
	var str = "";
	var id = "";
	var style = "";
	var width;
	var height;
	for(var i=0; i < glassHeight; i++)
		for(var j=0; j < glassWidth; j++)
		{
			id = i + '-' + j;
			width = (glass.clientWidth/glassWidth - 1);
			height = (glass.clientHeight/glassHeight - 1);
			style = ' style="width: ' + width + 'px; height:' + height +'px; background-color: ' + boxColors[i][j] + ';';
			str += '<div id="'+ id +'"' + style + '"></div>';
		}
	glass.innerHTML = str;		
}

//Вычленяем куку с нужным именем
function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++) {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name) {
            return unescape(y);
        }
    }
}

//Вытаскиваем из куки сохраненные параметры игры
function setGameParameters(str) {
	var params = str.split('|');
	setDifficulty(params[0]);
	setSpeedGame(params[1]);
	setSizeOfGlass(params[2]);
	points = Number(params[3]);
	v_pos = Number(params[4]);
	g_pos = Number(params[5]);
	currFigure = Number(params[6]);
	nextFigure = Number(params[7]);
	clone = cloneFigure(figure[currFigure]);
}

//Вытаскиваем из куки параметры заполненности стакана
function setGlassParameters(str) {
	var row = str.split('|');
	var column = [];
	for(var i = 0; i < glassHeight; i++) {
		column[i] = row[i].split('z');
		for(var j = 0; j < glassWidth; j++)
			box[i][j] = Number(column[i][j]);
	}
	
}

//Вытаскиваем из куки заполненные цвета стакана
function setColorsParameters(str) {
	var row = str.split('|');
	var column = [];
	for(var i = 0; i < glassHeight; i++) {
		column[i] = row[i].split('z');
		for(var j = 0; j < glassWidth; j++)
			boxColors[i][j] = column[i][j];
	}
	
}

//Установка начальных параметров. Если была незавершенная игра, то вытаскиваем данные из кук
function onLoadSettings() {
	if((getCookie("gameStarted") == "false") || !getCookie("gameStarted")) {
		diffGame = "Easy";
		speedGame = 1;
		glassWidth = 10;
		glassHeight = 20;
		gameStarted = false;
		gamePaused = true;
		points = 0;
		currFigure = generateFigure();
		nextFigure = generateFigure(); 
		clone = cloneFigure(figure[currFigure]);
		setStartFigurePosition(clone);
		buttonDisable('reset');
		hint('begin','visible');
	}else{
		menuDisable('size');
		setGameParameters(getCookie("Settings"));
		setGlassParameters(getCookie("Glass"));
		setColorsParameters(getCookie("Colors"));
		var p = document.getElementById('points');
		var startStopBtnText = document.getElementById('startPausebtn');
		hint('pause','visible');
		p.innerHTML = points + "";
		startStopBtnText.innerHTML = "<b>Продолжить</b>";
		imageNextFigure(nextFigure);
		gameStarted = true;
		gamePaused = true;
	}
}

//Если осталась не завершенная игра, то сохраняем ее с помощью кук
function saveGame() {
	var date = new Date();
	day = date.getDate() + 7;
	date.setDate(day);
	document.cookie = "gameStarted=" + gameStarted + "; expires=" + date.toUTCString(); 
	if(gameStarted) {
		var glass = "";
		var colors = ""
		for(var i = 0; i < glassHeight; i++) {
			glass += box[i].join('z') + "|";
			colors += boxColors[i].join('z') + "|";
		}
		document.cookie = "Glass=" + glass + "; expires=" + date.toUTCString(); 
		document.cookie = "Colors=" + colors + "; expires=" + date.toUTCString(); 
		var settings = "";
		settings += diffGame + "|";
		settings += speedGame + "|";
		settings += glassWidth + "x" + glassHeight + "|";
		settings += points + "|";
		settings += v_pos + "|";
		settings += g_pos + "|";
		settings += currFigure + "|";
		settings += nextFigure + "|";
		document.cookie = "Settings=" + settings + "; expires=" + date.toUTCString(); 
	}
}

function InitPage(){
	resetGlassBoxes();
	onLoadSettings();
	calcGlassPos();
	imageGlassBoxes();
	window.onresize = function () {
		calcGlassPos();
		imageNextFigure(nextFigure);
		imageGlassBoxes();
	}
	document.body.onselectstart = function(){return false;}
	document.onkeyup = keyUpped;
	document.onkeydown = keyDowned;
	window.onunload = saveGame;	
}