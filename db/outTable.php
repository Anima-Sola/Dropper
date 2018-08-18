<?php
	session_start();
	include("db/DBClass.php");
	$recTable = new records();
	if($_SERVER['REQUEST_METHOD']=='GET') {
		if(isset($_GET['name']) && (isset($_GET['ip']))) {
			$playerName = clearData($_GET['name']);
			$ip = $_GET['ip'];
		}
	}else{
		$playerName = "";
		$ip= "";
	}
		
	function showTable($rows, $playerName, $ip) {
		$i = 1;
		echo '<table class="table1">
					<tr>
						<th>Место</th>
						<th>Имя игрока</th>
						<th>Очки</th>
						<th>Дата рекорда</th>
						<th>IP-адрес</th>
					</tr>';
		foreach($rows as $value) {
			echo "<tr>";
			if(($value['name'] == $playerName) && ($value['ip'] == $ip)) {
				echo "<td style='color: yellow; background-color: #6495ed'>$i</td>";
				echo "<td style='color: yellow; background-color: #6495ed'>".$value['name']."</td>";
				echo "<td style='color: yellow; background-color: #6495ed'>".$value['points']."</td>";
				echo "<td style='color: yellow; background-color: #6495ed'>".date("d M o в H:i:s",$value['datetime'])."</td>";
				echo "<td style='color: yellow; background-color: #6495ed'>".$value['ip']."</td>";
			}else{
				echo "<td>$i</td>";
				echo "<td>".$value['name']."</td>";
				echo "<td>".$value['points']."</td>";
				echo "<td>".date("d M o в H:i:s",$value['datetime'])."</td>";
				echo "<td>".$value['ip']."</td>";
			}
			echo "</tr>";
			$i++;
		}
		echo "</table>";
	}

	if(isset($_SESSION['playerName'])) {
		$playerName = $_SESSION['playerName'];
		if($playerName == "") $playerName = "Аноним";
		$points = $_SESSION['points'];
		$dateTime = time();
		$ip = getRealIpAddr();
		$recTable->insertRecord($playerName, $points, $dateTime, $ip);
		session_destroy();
	}else{
		$rows = $recTable->getTopRecords();
		if(count($rows) == 0) echo "<p style='text-align:center; font-size:30px;'>Извините, но таблица пока пуста.</p>";
		else showTable($rows, $playerName, $ip);
	}
?>