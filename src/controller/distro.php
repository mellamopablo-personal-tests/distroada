<?php

if (!isset($_GET["id"])) {
	die("No se ha especificado un ID de distro");
}

$id = $_GET["id"];
$rows = $db->query("SELECT * FROM distros WHERE id = $id");

// TODO controlar 404s
$row = $rows->fetchAll(PDO::FETCH_ASSOC)[0];
$distro = new Distro($row["id"], $row["name"]);
$page["title"] = "$distro->name";
