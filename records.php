<?php
	session_start();
							
	function clearData($data) {
		$data = stripslashes($data);
		$data = strip_tags($data);
		$data = trim($data);
		return $data;
	}
	
	function getRealIpAddr() {
		if (!empty($_SERVER['HTTP_CLIENT_IP']))
			return $_SERVER['HTTP_CLIENT_IP'];
		elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
			return $_SERVER['HTTP_X_FORWARDED_FOR'];
		else
			return $_SERVER['REMOTE_ADDR'];
	}
	
	if($_SERVER['REQUEST_METHOD']=='POST') {
		if(isset($_POST['name'])) {
			$_SESSION['playerName'] = clearData($_POST['name']);
			$_SESSION['points'] = $_POST['points'];
			header("Location: ".$_SERVER["REQUEST_URI"]."?name=".$_SESSION['playerName']."&ip=".getRealIpAddr());
		}
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Dropper.su - таблица рекордов</title>
	<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Классический тетрис. Таблица рекордов."/>
	
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
					<a href="about.php">Об игре</a>
					<a href="rules.php">Правила</a>
					<a href="records.php"><b class="curr">Рекорды</b></a>
					<a href="contacts.php">Контакты</a>
				</div>	
			</div>
		</div>
		<div id="wrapper">
			<noscript><div class="noscript">К сожалению, Вы не сможете играть, пока в вашем браузере отключен JavaScript.
			Инструкция для включения <a style="text-decoration: underline;" href="http://www.enable-javascript.com/ru/" target="_blank">здесь</a></div></noscript>
			<div style="margin-bottom: 19px;"><?php include("db/outTable.php");?></div>
		</div>
	<div style="height:110px"></div>
	</div>
	<div id="footer">
		<div id="md_footer">
			<a href="index.php">К игре</a>
			<a href="about.php">Об игре</a>
			<a href="rules.php">Правила</a>
			<a href="records.php"><b>Рекорды</b></a>
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