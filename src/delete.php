<?php

require_once "setup.php";

if (isset($_GET["id"])) {

	$db->query("DELETE FROM distros WHERE id = " . $_GET["id"]);

}

// Redirect to the main view
$page["name"] = "main";
require_once VIEWS . "main.php";
