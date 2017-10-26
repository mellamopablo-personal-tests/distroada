<?php

require_once CONTROLLERS . "new.php";

function formField($name, $label)
{

	return "<div class='field'>

		<label for='$name'>$label</label>
		<input
			type='text'
			name='$name'
			id='$name' />
		
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

	<h2 class="title">Crear nueva distro</h2>

	<form
		action="new.php"
		class="distroForm"
		method="post">

		<?= formField(
			"name",
			"Distro name"
		) ?>
		<?= formField(
			"homePage",
			"Home Page"
		) ?>
		<?= formField(
			"mailingLists",
			"Mailing Lists"
		) ?>
		<?= formField(
			"userForums",
			"User Forums"
		) ?>
		<?= formField(
			"bugTracker",
			"Bug Tracker"
		) ?>

		<input type="submit" name="submit" />

	</form>

</div>

</body>
</html>
