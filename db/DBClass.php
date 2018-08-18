<?php
	class records {
		const DB_NAME = 'sqlite:db/records.sqlite3';
		protected $_db;
				
		//Создание/открытие базы
		function __construct() {
			if(file_exists(self::DB_NAME)){	
				$this->_db = new PDO(self::DB_NAME);
			}else{
				$this->_db = new PDO(self::DB_NAME);
				$sql = "CREATE TABLE records(
							name TEXT,
							points INT,
							datetime INT,
							ip TEXT)";
				$this->_db->exec($sql);		
			}
		}
		
		//Вставить запись
		function insertRecord($playerName, $points, $dateTime, $ip) {
			$points = intval($points);
			$sql = "INSERT INTO records(
							name, 
							points, 
							datetime,
							ip)
						VALUES(
							'$playerName',
							'$points',
							'$dateTime',
							'$ip')";
			$this->_db->query($sql);
		}
		
		//Получение минимального количества очков в таблице
		function getMinPoints() {
			$rows = $this->getTopRecords();
			if(count($rows) == 0) return 0;
			return $rows[count($rows)-1]['points'];
		}
		
		//Получение топ-50 рекордов
		function getTopRecords(){
			$sql = "SELECT * FROM records ORDER BY points DESC, name LIMIT 50";
			$result = $this->_db->query($sql);
			$result = $result->fetchAll(PDO::FETCH_ASSOC);
			return $result;
		}
		
		//Подсчет количества записей
		function recordsCount() {
			$sql = "SELECT COUNT (*) FROM records";
			$result = $this->_db->query($sql);
			$result = $result->fetchAll(PDO::FETCH_ASSOC);
			return intval($result[0]['COUNT (*)']);
		}
	}
?>