<?php

define("PROJECT_ROOT", __DIR__ . "/../");
define("CONTROLLERS", __DIR__ . "/controller/");
define("VIEWS", __DIR__ . "/view/");

require PROJECT_ROOT . "vendor/autoload.php";

$dotenv = new Dotenv\Dotenv(PROJECT_ROOT);
$dotenv->load();
$dotenv->required(
	[
		"DB_ENGINE",
		"DB_HOST",
		"DB_PORT",
		"DB_NAME",
		"DB_USERNAME",
		"DB_PASSWORD"
	]
);

require_once "db.php";
require_once "model/Distro.php";
require_once "model/DistroSummary.php";

$page = array();

$page["rootUrl"] = "http://localhost/distroada";