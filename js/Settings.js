//Функция выбора сложности игры
function setDifficulty(value) {
	var diffMenu = document.getElementById("diffMenu");
	switch(value){
		case "Easy": {
			diffGame = "Easy";
			diffMenu.innerHTML = "Сложность игры: <b>Легкая</b> <img src='images/arrow.png' align='right'/>";
			break;
		}
		case "Middle": {
			diffGame = "Middle";
			diffMenu.innerHTML = "Сложность игры: <b>Средняя</b> <img src='images/arrow.png' align='right'/>";
			break;
		}
		case "Hard": {
			diffGame = "Hard";
			diffMenu.innerHTML = "Сложность игры: <b>Хардкор</b> <img src='images/arrow.png' align='right'/>";
		}
	}
	//Перегенерируем  начальные фигуры, если игра не была начата
	if(!gameStarted) {
		currFigure = generateFigure();
		clone = cloneFigure(figure[currFigure]);
		nextFigure = generateFigure();
	}
	hideMenu('diff');
}

//Функция выбора скорости падения фигур
function setSpeedGame(value) {
	var diffMenu = document.getElementById("speedMenu");
	switch(value){
		case '1': {
			speedGame = 1;
			diffMenu.innerHTML = "Скорость игры: <b>1</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "1";
			break;
		}
		case '2': {
			speedGame = 2;
			diffMenu.innerHTML = "Скорость игры: <b>2</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "2";
			break;
		}
		case '3': {
			speedGame = 3;
			diffMenu.innerHTML = "Скорость игры: <b>3</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "3";
			break;
		}
		case '4': {
			speedGame = 4;
			diffMenu.innerHTML = "Скорость игры: <b>4</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "4";
			break;
		}
		case '5': {
			speedGame = 5;
			diffMenu.innerHTML = "Скорость игры: <b>5</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "5";
			break;
		}
		case '6': {
			speedGame = 6;
			diffMenu.innerHTML = "Скорость игры: <b>6</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "6";
			break;
		}
		case '7': {
			speedGame = 7;
			diffMenu.innerHTML = "Скорость игры: <b>7</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "7";
			break;
		}
		case '8': {
			speedGame = 8;
			diffMenu.innerHTML = "Скорость игры: <b>8</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "8";
			break;
		}
		case '9': {
			speedGame = 9;
			diffMenu.innerHTML = "Скорость игры: <b>9</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "9";
			break;
		}
		case '10': {
			speedGame = 10;
			diffMenu.innerHTML = "Скорость игры: <b>10</b> <img src='images/arrow.png' align='right'/>";
			document.getElementById("speedValue").innerHTML = "10";
		}
	}
	hideMenu('speed');
	speedUp = points + speedGame*300;
}

//Функция выбора размера стакана
function setSizeOfGlass(value){
	var diffMenu = document.getElementById("sizeMenu");
	diffMenu.innerHTML="";
	switch(value){
		case "10x20": {
			glassWidth = 10;
			glassHeight = 20;
			diffMenu.innerHTML = "Размер стакана: <b>10x20</b><img src='images/arrow.png' align='right'/>";
			break;
		}
		case "15x30": {
			glassWidth = 15;
			glassHeight = 30;
			diffMenu.innerHTML = "Размер стакана: <b>15x30</b><img src='images/arrow.png' align='right'/>";
			break;
		}
		case "20x40": {
			glassWidth = 20;
			glassHeight = 40;
			diffMenu.innerHTML = "Размер стакана: <b>20x40</b><img src='images/arrow.png' align='right'/>";	
		}
	}
	hideMenu('size');
	calcGlassPos();
	resetGlassBoxes();
	imageGlassBoxes();
	setStartFigurePosition(clone);
}









