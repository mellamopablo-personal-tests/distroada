<?php

if (!isset($_GET["id"])) {
	die("No se ha especificado un ID de distro");
}

$id = $_GET["id"];
$rows = $db->query("SELECT * FROM distros WHERE id = $id");

// TODO controlar 404s
$row = $rows->fetchAll(PDO::FETCH_ASSOC)[0];
$distro = new Distro(
	$row["id"],
	$row["name"],
	$row["home_url"],
	$row["mailing_lists_url"],
	$row["user_forums_url"],
	$row["bug_tracker_url"]
);
$page["title"] = "$distro->name";
