function hint(type, visibility) {
	var pauseinfo = document.getElementById('pauseinfo');
	pauseinfo.style.visibility = visibility;
	if(visibility == 'visible') {
		switch(type) {
			case "begin": {
				var str = '<p style="font-size:22px"><b>WELCOME!</b></p><br/>';
				str += '<p style="font-size:20px">Для начала игры</p>';
				str += '<p style="font-size:20px">нажмите клавишу</p>';
				str += '<p style="font-size:20px">ENTER</p>';
				str += '<p style="font-size:20px">или кнопку</p>';
				str += '<p style="font-size:20px">"ИГРАТЬ"</p>';
				pauseinfo.innerHTML = str;
				break;
			}
			case "pause": {
				var str = '<p style="font-size:22px"><b>ПАУЗА</b></p><br>';
				str += '<p style="font-size:20px">Для продолжения</p>';
				str += '<p style="font-size:20px">нажмите клавишу</p>';
				str += '<p style="font-size:20px">ENTER</p>';
				str += '<p style="font-size:20px">или кнопку</p>';
				str += '<p style="font-size:20px">"ПРОДОЛЖИТЬ"</p>';
				pauseinfo.innerHTML = str;
				break;
			}
			case "endgame": {
				var str = '<p style="font-size:22px"><b>ИГРА ОКОНЧЕНА!</b></p><br>';
				str += '<p style="font-size:20px">Чтобы начать заново,</p>';
				str += '<p style="font-size:20px">нажмите клавишу</p>';
				str += '<p style="font-size:20px">R</p>';
				str += '<p style="font-size:20px">или кнопку</p>';
				str += '<p style="font-size:20px">"Начать заново"</p>';
				pauseinfo.innerHTML = str;
				break;
			}
		}
	}
}

//Проверка, что поле ввода не пустое, изменения статуса кнопки отправки данных
function checkName() {
	var input = document.getElementById('name');
	var sendBtn = document.getElementById('sendbtn');
	var name = input.value;
	if(name != "") {
		sendBtn.className = 'formbtn';
		sendBtn.disabled = 0;
	}else{
		sendBtn.className = 'formbtndisabled';
		sendBtn.disabled = 1;
	}
}


var modalWindow = {
    _block: null,
    _win: null,
	
	initBlock: function() {
        _block = document.getElementById('blockscreen'); //Получаем наш блокирующий фон по ID

        //Если он не определен, то создадим его
        if (!_block) {
            var parent = document.getElementsByTagName('body')[0]; //Получим первый элемент тега body
            var obj = parent.firstChild; //Для того, чтобы вставить наш блокирующий фон в самое начало тега body
            _block = document.createElement('div'); //Создаем элемент div
            _block.id = 'blockscreen'; //Присваиваем ему наш ID
            parent.insertBefore(_block, obj); //Вставляем в начало
            _block.onclick = function() { modalWindow.close(); resetGame();  endGame = false;} //Добавим обработчик события по нажатию на блокирующий экран - закрыть модальное окно.
        }
        _block.style.display = 'inline'; //Установим CSS-свойство        
    },
	
	initWin: function(width) {
		var html = '<br/><p style="font-size: 30px; text-align: center; color: red;"><b>ИГРА ОКОНЧЕНА!</b></p>';
		html += '<p style="font-size: 26px; text-align: center;">Вы попали в топ-50 с результатом - ' + points + ' очков</p><br/>';
		html += '<p style="font-size: 26px; text-align: center;">Внести результат в таблицу рекордов?</p><br/>';
		html += '<form action="records.php" method="post">';
		html += '<p style="font-size: 26px; text-align: center;">Ваше имя: <input type="text" name="name" maxlength="40" onkeypress="checkName()" oninput="checkName()" onpaste="checkName()" onclick="checkName()" id="name" autofocus/></p><br/><br/>';
		html += '<input type="text" name="points" style="visibility: hidden" value="' + points +'"/>'
		html += '<p style="font-size: 26px; text-align: center;"> <input type="submit" value = "Внести" id="sendbtn" class="formbtndisabled" disabled="disabled"/>';
		html += '<input type="button" value="Не хочу" class="formbtn" onclick="modalWindow.close(); resetGame(); endGame = false;"/></p>'
		html += '</form><br/>';
        _win = document.getElementById('modalwindow'); //Получаем наше диалоговое окно по ID
        //Если оно не определено, то также создадим его по аналогии
        if (!_win) {
            var parent = document.getElementsByTagName('body')[0];
            var obj = parent.firstChild;
            _win = document.createElement('div');
            _win.id = 'modalwindow';
            _win.style.padding = '0 0 5px 0';
            parent.insertBefore(_win, obj);
        }
        _win.style.width = width + 'px'; //Установим ширину окна
        _win.style.display = 'inline'; //Зададим CSS-свойство
        
        _win.innerHTML = html; //Добавим нужный HTML-текст в наше диалоговое окно
        
        //Установим позицию по центру экрана

        _win.style.left = '50%'; //Позиция по горизонтали
        _win.style.top = '50%'; //Позиция по вертикали

        //Выравнивание по центру путем задания отрицательных отступов
        _win.style.marginTop = -(_win.offsetHeight / 2) + 'px'; 
        _win.style.marginLeft = -(width / 2) + 'px';
    },
	
	close: function() {
        document.getElementById('blockscreen').style.display = 'none';
        document.getElementById('modalwindow').style.display = 'none';        
    },
	
	 show: function(width, html) {
        modalWindow.initBlock();
        modalWindow.initWin(width);
    }
}//Конец описания нашего объекта
