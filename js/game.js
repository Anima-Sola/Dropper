//Таймеры
var dropSpeed;
var isMoveLeft;
var isMoveRight;
var isMoveDown;
var isDrop;
var isRotate;

//Начальная позиция фигуры
function setStartFigurePosition(f) {
	v_pos = 0;
	g_pos = Math.round(glassWidth/2) - Math.round(f.look[0].length/2);
}

//Генерируем номер фигуры случайным образом
function generateFigure() {
	if(diffGame == "Easy") return Math.floor(7*Math.random())
	else if(diffGame == "Middle") return Math.floor(25*Math.random())
	else return 7 + Math.floor(18*Math.random());
}

//Клонирование фигуры для дальнейших трансформаций,чтобы не трогать основной массив фигур
function cloneFigure(f) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	var clone = {};
	clone.look = [];
	for(var i=0; i < fHeight; i++){
		clone.look[i] = [];
		for(var j=0; j<fWidth; j++)
			clone.look[i][j] = f.look[i][j];
	}
	clone.color = f.color;
	clone.v_pos_corr = f.v_pos_corr;
	clone.g_pos_corr = f.g_pos_corr;
	return clone;
}

//Отображаем фигуру с поле "Следующая фигура" и центрируем по вертикали
function imageNextFigure(num){
	var figure = document.getElementById("figure");
	var nextFigure = document.getElementById("nextFigure");
	var marginTop = (nextFigure.clientHeight-90)/2 - 16; //16 - высота шрифта в пикселах
	figure.style.marginTop = marginTop + 'px';
	figure.style.visibility = "visible";
	figure.src = 'images/figures/' + num + '.png';
}

//Показать/стереть фигуру
function figureInGlass(f, visibility) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	for(var i=0; i < fWidth; i++)
		for(var j=0; j<fHeight; j++) {
			if(f.look[j][i] == 1) {
				if((j + v_pos) >= 0) {
					box[j + v_pos][i + g_pos] = (visibility) ? 1 : 0;
					boxColors[j + v_pos][i + g_pos] = (visibility) ? f.color : "";
					var divBox = document.getElementById((j + v_pos)  + '-' + (i + g_pos));
					divBox.style.backgroundColor = (visibility) ? f.color : "";
				}
			}
		}
}

//Подсчет очков
function calcPoints() {
	var p = document.getElementById('points');
	var sizeCoefficient = 1;
	var diffCoefficient = 1;
	if(glassWidth == 10) sizeCoefficient = 1
	else if(glassWidth == 15) sizeCoefficient = 1.5
	else sizeCoefficient = 2;
	if(diffGame == "Easy") diffCoefficient = 1
	else if(diffGame == "Middle") diffCoefficient = 2
	else diffCoefficient = 3;
	points += 10*sizeCoefficient*diffCoefficient/**speedGame*/;
	if((points >= speedUp) && (speedGame < 10)) {
		speedGame++; 
		speedUp = points + speedGame*300;
		var speedValue = document.getElementById('speedValue');
		var speedMenu = document.getElementById('speedMenu');
		speedValue.innerHTML = speedGame + "";
		speedMenu.innerHTML = 'Скорость игры: <b>' + speedGame + '</b><img src="images/arrow.png" align="right"/>';
		clearInterval(dropSpeed);
		dropSpeed = setInterval(dropDown, 50*(11-speedGame));
	}
	p.innerHTML = points + "";
}

//Удалить линию с заданным номером
function removeLine(num) {
	for(var i=num; i >0 ; i--) {
		var isLineFull = true;
		for(var j=0; j < glassWidth; j++) {
			box[i][j] = box[i-1][j];
			boxColors[i][j] = boxColors[i-1][j];
		}
	}
	imageGlassBoxes();
	calcPoints();
}

//Удаление полных линий
function removeFullLines() {
	var fullLines = [];
	for(var i=0; i < glassHeight; i++) {
		var isLineFull = true;
		for(var j=0; j < glassWidth; j++) {
			if(box[i][j] == 0) {isLineFull = false; break;}
		}
		if(isLineFull) fullLines.push(i);
	}
	if(fullLines.length == 0) return false;
	for(var i=0; i < fullLines.length; i++) 
		removeLine(fullLines[i]);
}

//Старт/пауза игры
function startPauseGame() {
	if(!gameStarted) {
		currFigure = generateFigure();
		nextFigure = generateFigure(); 
		clone = cloneFigure(figure[currFigure]);
		setStartFigurePosition(clone);
	}
	gameStarted = true;
	var startStopBtnText = document.getElementById('startPausebtn');
	if(!gamePaused){
		startStopBtnText.innerHTML = "<b>Продолжить</b>";
		hint('pause','visible');
		menuEnable('diff');
		menuEnable('speed');
		gamePaused = true;
		calcGlassPos();
		imageNextFigure(nextFigure);
		imageGlassBoxes()
		showHideHF('visible');
		clearInterval(dropSpeed);
	}else{
		startStopBtnText.innerHTML = "<b>Пауза</>";
		hint('pause','hidden');
		buttonEnable('reset');
		menuDisable('diff');
		menuDisable('speed');
		menuDisable('size');
		gamePaused = false;
		calcGlassPos();
		imageNextFigure(nextFigure);
		imageGlassBoxes()
		showHideHF('hidden');
		imageNextFigure(nextFigure);
		figureInGlass(clone, true);
		dropSpeed = setInterval(dropDown, 50*(11-speedGame));
	}
}

//Сброс достижений игры
function resetGame(){
	var startStopBtnText = document.getElementById('startPausebtn');
	var nextFigure = document.getElementById("figure");
	nextFigure.style.visibility = "hidden";
	var p = document.getElementById('points');
	startStopBtnText.innerHTML = "<b>Играть</b>";
	menuEnable('diff');
	menuEnable('speed');
	menuEnable('size');
	buttonDisable('reset');
	buttonEnable('startPause');
	resetGlassBoxes();
	gameStarted = false;
	gamePaused = true;
	endGame = false;
	topRecordInput = false;
	nextFigure.src = '';
	var currFigure = generateFigure(); 
	var nextFigure = generateFigure();
	p.innerHTML = '0';
	points = 0;
	setStartFigurePosition(clone);
	imageGlassBoxes();
	hint('begin','visible');
	showHideHF('visible');
	clearInterval(dropSpeed);
	clearInterval(isMoveLeft);
	clearInterval(isMoveRight);
	clearInterval(isMoveDown);
	clearInterval(isDrop);
	clearInterval(isRotate);
}

//Проверка, есть ли пересечения при вращении
function isCross(num, vertical_position, horizontal_position) {
	num += 25;
	if(num >= 100) num -= 100;
	var cross = cloneFigure(figure[num]);
	vertical_position += cross.v_pos_corr;
	horizontal_position += cross.g_pos_corr;
	var fWidth = cross.look[0].length;
	var fHeight = cross.look.length;
	if((vertical_position + fHeight) > glassHeight) return true;
	if(horizontal_position < 0) return true;
	if((horizontal_position + fWidth) > glassWidth) return true;
	for(var i=0; i < fWidth; i++)
		for(var j=0; j<fHeight; j++)
			if((j + vertical_position) >=0 )
				if((box[j + vertical_position][i + horizontal_position] && cross.look[j][i]) == 1) return true;
	return false;
}

function rotate(){
	figureInGlass(clone, false);
	if(!isCross(currFigure, v_pos, g_pos)) {
		currFigure += 25;
		if(currFigure >= 100) currFigure-=100;
		clone = cloneFigure(figure[currFigure]);
		v_pos += clone.v_pos_corr;
		g_pos += clone.g_pos_corr;
	}
	figureInGlass(clone, true);
}

//Проверка, уперлись ли в левую стенку
function isLeftWall(f, vertical_position, horizontal_position) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	if((horizontal_position - 1) < 0) return true; //Если уперлись в левую стенку стакана
	var edge = [];
	for(var j=0; j < fHeight; j++) {
		if((j + vertical_position) >= 0) {
			edge[j] = 0;
			for(var i = fWidth; i > -1; i--) {
					if(f.look[j][i] == 1) edge[j] = i + horizontal_position - 1;
			}
			if(box[vertical_position + j][edge[j]] == 1) return true;
		}
	}
	return false;
}

//Перемещает фигуру влево
function moveToLeft() {
	if(!isLeftWall(clone, v_pos, g_pos)) {
		figureInGlass(clone, false);
		g_pos--;
		figureInGlass(clone, true);
	}
}

//Проверка, уперлись ли правую стенку
function isRightWall(f, vertical_position, horizontal_position) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	if((horizontal_position + fWidth) > (glassWidth - 1)) return true; //Если уперлись в правую стенку стакана
	var edge = [];
	for(var j=0; j < fHeight; j++) {
		if((j + vertical_position) >= 0) {
			edge[j] = 0;
			for(var i=0; i < fWidth; i++) {
					if(f.look[j][i] == 1) edge[j] = i + horizontal_position + 1;
			}
			if(box[vertical_position + j][edge[j]] == 1) return true;
		}
	}
	return false;
}

//Перемещает фигуру вправо
function moveToRight() {
	if(!isRightWall(clone, v_pos, g_pos)) {
		figureInGlass(clone, false);
		g_pos++;
		figureInGlass(clone, true);
	}
}

//Проверка, не заполнен ли стакан
function isRoof(f, horizontal_position) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	for(var i=0; i < fWidth; i++)
		for(var j=0; j<fHeight; j++)
			if((box[j][i + horizontal_position] && f.look[j][i]) == 1) return true;
	return false;
}

//Проверка, достигла ли фигура низа
function isFloor(f, vertical_position, horizontal_position) {
	var fWidth = f.look[0].length;
	var fHeight = f.look.length;
	if((v_pos + fHeight) >= glassHeight) return true; //Если достигли низа стакана 
	var edge = [];
	for(var i=0; i < fWidth; i++) {
		edge[i] = 0;
		for(var j=0; j < fHeight; j++) {
			if(f.look[j][i] == 1) edge[i] = j + vertical_position + 1;
		}
		if(box[edge[i]][horizontal_position + i] == 1) return true;
	}
	return false;
}

//Падение фигурок вниз
function dropDown() {
	if(!isFloor(clone, v_pos, g_pos)) {
		figureInGlass(clone, false);
		v_pos++;
		figureInGlass(clone, true);
	} else {
		if(isDrop) {  
			clearInterval(dropSpeed);
			dropSpeed = setInterval(dropDown,  50*(11-speedGame));
			isDrop = false;
		}
		removeFullLines();
		currFigure = nextFigure;
		clone = cloneFigure(figure[currFigure]);
		setStartFigurePosition(clone);
		if(isRoof(clone, g_pos)) {
			clearInterval(dropSpeed);
			gameStarted = false;
			gamePaused = true;
			endGame = true;
			if(((points > minPoints) || (numOfRecords < 50)) && (points != 0)) {
				topRecordInput = true;
				buttonDisable('startPause');
				buttonDisable('reset');
				modalWindow.show(600);
			}else{
				hint('endgame', 'visible');
				buttonDisable('startPause');
			}
			return false;
		} 
		nextFigure = generateFigure();
		imageNextFigure(nextFigure);
		figureInGlass(clone, true);
	}
}

//Обработкв нажатия клавиш
function keyDowned(event){
	event = event || window.event;
	switch(event.keyCode){
		case 13: {  //Нажата Enter
			if(!endGame && !topRecordInput) {
				var startpausebtn = document.getElementById('startPausebtn');
				startpausebtn.style.marginTop = "12%";
			}
			break;
		}
		case 82: {  //Нажата R
			if((gameStarted || endGame) && !topRecordInput) {
				var resetbtn = document.getElementById('resetbtn');
				resetbtn.style.marginTop = "12%";
			}
			break;
		}
		case 37: { //Нажата стрелка влево
			if(gameStarted && !gamePaused) {
				if(!isMoveLeft) {
					moveToLeft();
					isMoveLeft = setInterval(moveToLeft, 50 + 10*(10-speedGame));
				}
			}
			break;
		}
		case 38: {  //Нажата стрелка вверх
			if(gameStarted && !gamePaused) {
				if(!isRotate) {
					rotate();
					isRotate = setInterval(rotate, 100 + 10*(10-speedGame));
				}
			}
			break;
		}
		case 39: { //Нажата стрелка вправо
			if(gameStarted && !gamePaused) {
				if(!isMoveRight) {
					moveToRight();
					isMoveRight = setInterval(moveToRight, 50 + 10*(10-speedGame));
				}
			}
			break;
		}
		case 40: {  //Нажата стрелка вниз
			if(gameStarted && !gamePaused) {
				if(!isMoveDown) {
					clearInterval(dropSpeed);
					dropSpeed = setInterval(dropDown,50 + 10*(10-speedGame));
					isMoveDown = true;
				}
			}
			break;
		}
	}
}

//Обработка отпускания клавиш
function keyUpped(event){
	event = event || window.event;
	console.log(document.body.clientHeight);
	switch(event.keyCode){
		case 13: {  //Отпущена Enter
			if(!endGame && !topRecordInput) {
				var startpausebtn = document.getElementById('startPausebtn');
				startpausebtn.style.marginTop = "10%";
				startPauseGame();
			}
			break;
		}
		case 82: {  //Отпущена R
			if((gameStarted || endGame) && !topRecordInput) {
				var resetbtn = document.getElementById('resetbtn');
				resetbtn.style.marginTop = "10%";
				resetGame();
			}
			break;
		}
		case 32: {  //Отпущен пробел
			if(gameStarted && !gamePaused) {
				if(!isDrop) {
					clearInterval(dropSpeed);
					dropSpeed = setInterval(dropDown,20);
					isDrop = true;
				}
			}
			break;
		}
		case 37: {  //Отпущена стрелка влево
			if(gameStarted && !gamePaused) {
				clearInterval(isMoveLeft);
				isMoveLeft = false;
			}
			break;
		}
		case 38: {  //Отпущена стрелка вверх
			if(gameStarted && !gamePaused) {
				clearInterval(isRotate);
				isRotate = false;
			}
			break;
		}
		case 39: {  //Отпущена стрелка вправо
			if(gameStarted && !gamePaused) {
				clearInterval(isMoveRight);
				isMoveRight = false;
			}
			break;
		}
		case 40: {  //Отпущена стрелка вниз
			if(gameStarted && !gamePaused) {
				if(isMoveDown) {
					clearInterval(dropSpeed);
					dropSpeed = setInterval(dropDown,50*(11-speedGame));
					isMoveDown = false;
				}
			}
			break;
		}
	}
}




