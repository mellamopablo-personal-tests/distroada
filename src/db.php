<?php

try {

	$engine = $_ENV["DB_ENGINE"];
	$host = $_ENV["DB_HOST"];
	$port = $_ENV["DB_PORT"];
	$database = $_ENV["DB_NAME"];
	$user = $_ENV["DB_USERNAME"];
	$pass = $_ENV["DB_PASSWORD"];

	$pdo = new PDO(
		"$engine:host=$host;port=$port;dbname=$database",
		$user,
		$pass
	);

} catch (PDOException $e) {
	die("No se ha podido conectar a la base de datos: " . $e->getMessage());
}
