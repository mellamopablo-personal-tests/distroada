<?php

$page["title"] = "Página principal";

$distroList = array();

foreach ($db->query("SELECT * FROM distros") as $row) {

	$distroList[] = new DistroSummary($row["id"], $row["name"]);

}
