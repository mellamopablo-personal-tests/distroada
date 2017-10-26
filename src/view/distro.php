<?php

require_once CONTROLLERS . "distro.php";

function processValue($attr) {

	if (is_null($attr)) {

		return "Not specified";

	} else {

		return $attr;

	}

}

function pair($key, $value) {

	$processedValue = processValue($value);

	return "<div class='pair'>

		<div class='key'>$key</div>

		<div class='value'>$processedValue</div>

	</div>";

}

?>

<!DOCTYPE html>
<html>
<head>

	<?php require_once "head.php" ?>

</head>
<body>

<?php require_once "header.php" ?>

<div class="distroPanel">

	<h2 class="title"><?= $distro->name ?></h2>

	<div class="distroInfo">

		<?= pair("Home Page", $distro->homeUrl) ?>
		<?= pair("Mailing Lists", $distro->mailingListsUrl) ?>
		<?= pair("User Forums", $distro->userForumsUrl) ?>
		<?= pair("Bug Tracker", $distro->bugTrackerUrl) ?>

	</div>

	<div class="actions">

		<h3 class="subTitle">Actions</h3>

		<div class="actionList">

			<a
				class="actionButton"
				href="edit.php?id=<?= $distro->id ?>">Editar</a>

			<a
				class="actionButton"
				href="delete.php?id=<?= $distro->id ?>">Eliminar</a>

		</div>

	</div>

</div>

</body>
</html>
