<?php

if (isset($_POST["submit"])) {

	// TODO validar los atributos

	$name = $_POST['name'];
	$homePage = $_POST['homePage'];
	$mailingLists = $_POST['mailingLists'];
	$userForums = $_POST['userForums'];
	$bugTracker = $_POST['bugTracker'];

	$db->query("
		INSERT INTO
			distros
			(
				name,
				home_url, 
				mailing_lists_url,
				user_forums_url,
				bug_tracker_url
		   )
		VALUES 
			(
				'$name',
				'$homePage',
				'$mailingLists', 
				'$userForums',
				'$bugTracker'
			)
	");

	$id = $db->lastInsertId();

	die("<meta http-equiv='refresh' content='0; url=distro.php?id=$id' />");

}

$page["title"] = "Crear nueva distro";
