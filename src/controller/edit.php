<?php

if (!isset($_GET["id"])) {
	die("No se ha especificado un ID de distro");
}

if (isset($_POST["submit"])) {

	// TODO validar los atributos

	$id = $_GET["id"];
	$name = $_POST['name'];
	$homePage = $_POST['homePage'];
	$mailingLists = $_POST['mailingLists'];
	$userForums = $_POST['userForums'];
	$bugTracker = $_POST['bugTracker'];

	$db->query("
		UPDATE distros
		SET
			name = '$name',
			home_url = '$homePage',
			mailing_lists_url = '$mailingLists',
			user_forums_url = '$userForums',
			bug_tracker_url = '$bugTracker'
		WHERE
			id = $id;
	");

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
$page["title"] = "Editar $distro->name";
