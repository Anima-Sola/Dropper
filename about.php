<!DOCTYPE html>
<html>
<head>
	<title>Dropper.su - об игре</title>
	<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Классический тетрис. Описание игры."/>
	
	<meta property="og:description" content="Dropper - классический тетрис. Никаких закачек и установок, открыл сайт и играй." />
	<meta property="og:image" content="http://www.dropper.su/images/image.png" />
	<meta property="og:title" content="Работа подождёт! Отвлекись, поиграй в тетрис." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://www.dropper.su" />
	
	<link href='http://fonts.googleapis.com/css?family=Forum&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/others.css" />
	<script type="text/javascript" src="js/share42.js"></script>
	<script type="text/javascript"> window.onload = share42 </script>
</head>
<body>
	<div id="content">
		<div id="header">
			<div id="md_header">
				<div id="blockleft">
					<a href="index.php"><img src="images/logo.png"/></a>
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
				<div id="blockcenter">
					<a href="index.php">К игре</a>
					<a href="about.php"><b class="curr">Об игре</b></a>
					<a href="rules.php">Правила</a>
					<a href="records.php">Рекорды</a>
					<a href="contacts.php">Контакты</a>
				</div>	
			</div>
		</div>
		<div id="wrapper">	
			<noscript><div class="noscript">К сожалению, Вы не сможете играть, пока в вашем браузере отключен JavaScript.
			Инструкция для включения <a style="text-decoration: underline;" href="http://www.enable-javascript.com/ru/" target="_blank">здесь</a></div></noscript>
			<img src="images/alexey.jpg" align="left" alt="Фигуры тетрамино" style="margin-right: 10px;"/>
			<p>Итак, тетрис. Придуманная программистом Алексеем Пажитновым в 
			далеком 1984 году игра стала невероятно популярной во всем мире и уже 
			давно стала классикой.
			</p>
			<p>До настоящего времени создано огромное количество реализаций игры, 
			для самых разнообразных устройств и программных платформ. Ее можно 
			встретить телевизорах, мобильных телефонах, смартфонах, игровых 
			приставках и т. д. Существуют трехмерные, четырехмерные и даже n-мерные 
			реализации тетриса. Есть варианты с другими формами и поведением фигур. 
			Этот список можно продолжать и продолжать.
			</p>
			<p>Идея тетриса была навеяна автору настольной игрой пентамино, в 
			которой фигуры, состоящие из пяти соединенных одинаковых квадратов, 
			необходимо уложить в прямоугольник или иную форму. Фигуры должны быть 
			уложены без зазоров, перекрытий и пустых мест.
			<img src="images/tetramino.png" align="right" alt="Фигуры тетрамино"/>
			</p>
			<p>Название тетрис - это производное от слов "тетрамино" и "теннис". В 
			тетрамино, в отличие от пентамино, фигуры состоят не из пяти, а из 
			четырех соединенных квадратов. В классическом тетрисе фигуры тетрамино 
			(их 7 штук - I, J, L, O, S, T, Z.), которые появляются случайным 
			образом, падают в стакан размером 10х20 клеток. Их можно вращать в 
			процессе падения и ускорять падение, если место для нее уже найдено. При 
			заполнении горизонтальной линии она исчезает и все линии, находящиеся 
			над ней, смещаются вниз.</p>
			<p>За убранную линию игроку начисляются очки. В зависимости от 
			реализации игры очки могут начисляться по разному.
			</p>
			<p>По мере набора очков скорость падения фигур увеличивается и игроку 
			все сложнее и сложнее укладывать их в нужное место. В конце концов темп 
			игры становится таким, что игрок не успевает сделать нужное количество 
			перемещений и вращений, стакан заполняется до верху. Когда в стакане 
			заканчивается место для размещения очередной фигуры, игра заканчивается.
			</p>
			<p>Если взглянуть на тетрис с точки зрения теории вероятности, то 
			игрок проиграет всегда, даже если он мгновенно принимает решения и 
			никогда не ошибается в постановке фигуры. Существует ненулевая 
			вероятность, что на протяжении продолжительного времени могут выпадать 
			только S-фигуры или только Z-фигуры. Останутся дырки по краям, которые 
			невозможно закрыть, стакан заполнится и игра закончится. Но такое 
			развитие событий крайне маловероятно и вряд-ли произойдет на практике в 
			разумное время.
			</p>
			<p>Из-за закрытости СССР и неискушенности граждан страны в вопросах 
			авторских прав в то время, на тетрисе успели нажиться многие, кроме 
			автора. Вся история игры напоминает кипящий страстями латиноамериканский 
			сериал. Только в 1996 года Алексей Пажитнов начал получать небольшие 
			авторские отчисления. Не вызывает сомнения, что если бы автор смог 
			грамотно продать свою идею, он был бы весьма богатым человеком.
			</p>
		</div>
	<div style="height:110px"></div>
	</div>
	<div id="footer">
		<div id="md_footer">
			<a href="index.php">К игре</a>
			<a href="about.php"><b>Об игре</b></a>
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