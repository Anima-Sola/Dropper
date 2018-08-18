<!DOCTYPE html>
<html>
<head>
	<title>Dropper.su - работа подождёт</title>
	<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Dropper - классический тетрис. Никаких закачек и установок, открыл сайт и играй."/>
	<META NAME="webmoney.attestation.label" CONTENT="webmoney attestation label#A418A57D-6BD4-4F70-B098-E3AB99734EFA">
	
	<meta property="og:description" content="Dropper - классический тетрис. Никаких закачек и установок, открыл сайт и играй." />
	<meta property="og:image" content="http://www.dropper.su/images/image.png" />
	<meta property="og:title" content="Работа подождёт! Отвлекись, поиграй в тетрис." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://www.dropper.su" />
	
	<link href='http://fonts.googleapis.com/css?family=Forum&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/main.css" />	
	<script type="text/javascript" src="js/share42.js"></script>
	<script type="text/javascript" src="js/InitPage.js"></script>
	<script type="text/javascript" src="js/figures.js"></script>
	<script type="text/javascript" src="js/MenuEffects.js"></script>
	<script type="text/javascript" src="js/Settings.js"></script>
	<script type="text/javascript" src="js/messages.js"></script>
	<script type="text/javascript" src="js/game.js"></script>
	<script type="text/javascript"> 
		window.onload = function() {
			<?php
				include("db/DBClass.php");
				$recTable = new records();
				$minPoints = $recTable->getMinPoints();
				$numOfRecords = $recTable->recordsCount();
				echo "minPoints = $minPoints;";
				echo "numOfRecords = $numOfRecords;";
			?>
			document.getElementById('content').removeChild(document.getElementById('loading'));
			InitPage();
			document.getElementById('header').style.visibility = "visible";
			document.getElementById('wrapper').style.visibility = "visible";			
			share42();
		}
		</script>
</head>
<body>
<div id="content">	
	<noscript><div class="noscript">К сожалению, Вы не сможете играть, пока в вашем браузере отключен JavaScript.
	Инструкция для включения <a style="text-decoration: underline;" href="http://www.enable-javascript.com/ru/" target="_blank">здесь</a>.</div></noscript>
	<div id="endgamewindow"></div>
	<div id="loading">
		<p>Dropper - классический тетрис.</p>
		<p>Никаких закачек и установок, открыл сайт и играй.</p><br/>
		<p style="font-size: 22px;">Ожидание окончания загрузки...</p><br/>
		<div><img src="images/loading.GIF"/></div>
	</div>
	<div id="header">
	<div id="md_header">				
			<div id="logo">
				<img src="images/logo.png"/>
			</div>
			<div style="float: left;width: 553px; height: 20px; color: #a0a1a2;font-size:15px; line-height: 20px;text-align: right;">
				Поделись с друзьями: 
			</div>
			<div class="share42init" id="social" 
				data-path="images/" 
				data-icons-file="icons.png"
				data-image="http://www.dropper.su/images/image.png"
				data-url="http://www.dropper.su" 
				data-title="Работа подождёт! Отвлекись, поиграй в тетрис."
				data-description="Dropper - классический тетрис. Никаких закачек и установок, открыл сайт и играй.">
			</div>
			<div class="blocks">
				<div class="g_settings" onmouseover="showMenu('diff')" 
					onmouseout="hideMenu('diff')" id="diffMenu">
					Сложность игры: <b>Легкая</b> 
					<img src="images/arrow.png" align="right"/>
				</div>	
				<div class="droplist" id="diffSelect" onmouseover="showMenu('diff')" 
					onmouseout="hideMenu('diff')">
					<ul>
						<li onclick="setDifficulty('Easy')">Легкая</li>
						<li onclick="setDifficulty('Middle')">Средняя</li>
						<li onclick="setDifficulty('Hard')">Хардкор</li>
					</ul>
				</div>
			</div>
			<div class="blocks">
				<div class="g_settings" onmouseover="showMenu('speed')" 
					onmouseout="hideMenu('speed')" id="speedMenu">
					Скорость игры: <b>1</b>
					<img src="images/arrow.png" align="right"/>
				</div>
				<div class="droplist" id="speedSelect" onmouseover="showMenu('speed')" 
					onmouseout="hideMenu('speed')">
					<ul>
						<li onclick="setSpeedGame('1')">1</li>
						<li onclick="setSpeedGame('2')">2</li>
						<li onclick="setSpeedGame('3')">3</li>
						<li onclick="setSpeedGame('4')">4</li>
						<li onclick="setSpeedGame('5')">5</li>
						<li onclick="setSpeedGame('6')">6</li>
						<li onclick="setSpeedGame('7')">7</li>
						<li onclick="setSpeedGame('8')">8</li>
						<li onclick="setSpeedGame('9')">9</li>
						<li onclick="setSpeedGame('10')">10</li>
					</ul>
				</div>
			</div>
			<div class="blocks">
				<div class="g_settings" onmouseover="showMenu('size')" 
					onmouseout="hideMenu('size')" id="sizeMenu">
					Размер стакана: <b>10x20</b>
					<img src="images/arrow.png" align="right"/>
				</div>
				<div class="droplist" id="sizeSelect" onmouseover="showMenu('size')" 
					onmouseout="hideMenu('size')">
					<ul>
						<li onclick="setSizeOfGlass('10x20')">10x20</li>
						<li onclick="setSizeOfGlass('15x30')">15x30</li>
						<li onclick="setSizeOfGlass('20x40')">20x40</li>
					</ul>
				</div>
			</div>	
		</div>
	</div>
	<div id="wrapper">		
		<div id="leftbar">
			<div style="width: 100%; height: 90%" id="glassContainer">
				<div id="pauseinfo">
				</div>
				<div id="glass">
				</div>
			</div>
			<div id="buttonsContainer">
				<div class="buttons">
					<div class="i2Style" id="startPausebtn" onclick="startPauseGame()" onmouseover="mouseButtonOver('startPause')"
						onmouseout="mouseButtonOut('startPause')" onmousedown="mouseButtonDowned('startPause')" onmouseup="mouseButtonUpped('startPause')">
						<b>Играть</b>
					</div>
				</div>
				<div class="buttons">
					<div class="i2Style" id="resetbtn" onclick="resetGame()" onmouseover="mouseButtonOver('reset')"
						onmouseout="mouseButtonOut('reset')" onmousedown="mouseButtonDowned('reset')" onmouseup="mouseButtonUpped('reset')">
						<b>Начать заново</b>
					</div>
				</div>
			</div>
		</div>
		<div id="rightbar">
			<div class="info">
				<b>Ваши очки</b>
				<p id="points">0</p>
			</div>
			<div id="nextFigure">
				<b>Следующая фигура</b><br/>
				<img src="images/figures/0.png" id="figure" style="visibility: hidden;" />
			</div>
			<div class="info">
				<b>Скорость игры</b><br/>
				<p id="speedValue">1</p>
			</div>
			<div id="controlinfo">
				<table>
					<tr>
						<td><b>Управление</b><br/></td>
					</tr>
					<tr>
						<td>&#8592 </td><td>- Переместить влево </td>
					</tr>
					<tr>
						<td>&#8594 </td><td>- Переместить вправо </td>
					</tr>
					<tr>
						<td>&#8593 </td><td>- Повернуть </td>
					</tr>
					<tr>
						<td>&#8595 </td><td>- Ускорить падение </td>
					</tr>
					<tr>
						<td>Пробел </td><td>- Уронить </td>
					</tr>
					<tr>
						<td>Enter </td><td>- Играть/Пауза </td>
					</tr>
					<tr>
						<td>R </td><td>- Начать заново </td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<div style="height:80px"></div>
</div>
<div id="footer">
	<div id="md_footer">
		<a href="about.php">Об игре</a>
		<a href="rules.php">Правила</a>
		<a href="records.php">Рекорды</a>
		<a href="contacts.php">Контакты</a>
	</div>
</div>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter25149191 = new Ya.Metrika({id:25149191,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/25149191" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body>
</html>