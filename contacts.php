<!DOCTYPE html>
<html>
    <head>
        <title>Dropper.su - контакты</title>
		<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" content="Классический тетрис. Поддержка сайта и связь с автором."/>
		
		<meta property="og:description" content="Dropper - классический тетрис. Никаких закачек и установок, открыл сайт и играй." />
		<meta property="og:image" content="http://www.dropper.su/images/image.png" />
		<meta property="og:title" content="Работа подождёт! Отвлекись, поиграй в тетрис." />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://www.dropper.su" />
		
		<link href='http://fonts.googleapis.com/css?family=Forum&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/reset.css" />
		<link rel="stylesheet" type="text/css" href="assets/css/contact.css" />
        <script type="text/javascript" src="assets/js/jquery.js"></script>
        <script type="text/javascript" src="assets/js/js.js"></script>
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
						<a href="records.php">Рекорды</a>
						<a href="contacts.php"><b class="curr">Контакты</b></a>
					</div>	
				</div>
			</div>
			<div id="wrapper">
				<noscript><div class="noscript">К сожалению, Вы не сможете играть, пока в вашем браузере отключен JavaScript.
				Инструкция для включения <a style="text-decoration: underline;" href="http://www.enable-javascript.com/ru/" target="_blank">здесь</a></div></noscript>
				 <p>Вы можете отправить письмо автору, заполнив форму ниже:</p></br>
					 <form method="post" action="assets/php/send.php" id="contactForm">
						<div class="error" id="error">Произошла ошибка, сообщение не может быть отправлено!</div>
						<div class="success" id="success">Сообщение успешно отправлено!<br />Спасибо.</div>

						<span class="input">
						<label for="name"><b>Ваше имя:</b> </label>
						<input  type="text" name="name" />
						<div class="warning" id="nameError">Это поле обязательно для заполнения</div>
						</span>

						<span class="input">
						<label for="email"><b>Ваш Email:</b> </label>
						<input  type="text" name="email" />
						<div class="warning" id="emailError">Введите правильный email!</div>
						</span>

						<span class="input">
						<label for="sales"><b>Тема:</b> </label>
						<select id="sales" name="sales">
						<option value="Support">Отзыв</option>
						<option value="Sales">Обнаружена ошибка</option>
						<option value="Other">Другое</option>
						</select>
						</span>

						<span class="input">
						<label for="message"><b>Ваше сообщение:</b> </label>
						<textarea id="message" name="message">Здравствуйте, 
						</textarea>
						<div class="warning" id="messageError">Это поле обязательно для заполнения</div>
						</span>

						<span class="input">
						<label for="security_code"><b>Цифры:</b> </label>
						<input class="noicon" type="text" id="security_code" name="security_code" style="width:100px" />
						<img src="assets/php/security/1/sec.php" style="vertical-align:middle;" />
						<div class="warning" id="security_codeError">Цифры введены неверно!</div>
						</span>
						
						<span id="submit" class="input">
						<label for="submit"></label>
						<p id="ajax_loader" style="text-align:center;"><img src="assets/img/contact/ajax-loader.gif" /></p>
						<input id="send" type="submit" value="Отправить письмо!" />
						</span>
					</form><br/>
				<p>Je ne mange pas six jours (c) 
					<img src="images/smile.gif">. 
					Отблагодарить автора (кому сколько не жалко):
				</p><br/>
				<form accept-charset="UTF-8" action="https://advisor.wmtransfer.com/Spasibo.aspx" method="post" target="_blank" title="Передать $пасибо! автору www.dropper.su">
					<input type="hidden" name="url" value="www.dropper.su"/>
					<input type="image" src="//advisor.wmtransfer.com/img/Spasibo!.png" border="0" name="submit"/>
				</form><br/>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="hosted_button_id" value="B6C6QWDACBVDG">
					<input type="image" src="https://www.paypalobjects.com/ru_RU/RU/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal — более безопасный и легкий способ оплаты через Интернет!">
					<img alt="" border="0" src="https://www.paypalobjects.com/ru_RU/i/scr/pixel.gif" width="1" height="1">
				</form><br/>
				<iframe frameborder="0" allowtransparency="true" scrolling="no" src="https://money.yandex.ru/embed/donate.xml?account=410012320727576&quickpay=donate&payment-type-choice=on&default-sum=50&targets=%D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0+www.dropper.su&target-visibility=on&project-name=www.dropper.su&project-site=www.dropper.su&button-text=05" width="507" height="133"></iframe>
			</div>
			<div style="height:110px"></div>
		</div>
	<div id="footer">
		<div id="md_footer">
			<a href="index.php">К игре</a>
			<a href="about.php">Об игре</a>
			<a href="rules.php">Правила</a>
			<a href="records.php">Рекорды</a>
			<a href="contacts.php"><b>Контакты</b></a>
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
