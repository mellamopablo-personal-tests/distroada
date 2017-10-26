<?php

require_once CONTROLLERS . "edit.php";

function formField($name, $label, $preFilledValue)
{

	return "<div class='field'>

		<label for='$name'>$label</label>
		<input
			type='text'
			name='$name'
			id='$name' 
			value='$preFilledValue' />
		
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

	<h2 class="title">Editar <?= $distro->name ?></h2>

	<form
		action="edit.php?id=<?= $distro->id ?>"
		class="distroForm"
		method="post">

		<?= formField(
			"name",
			"Distro name",
			$distro->name
		) ?>
		<?= formField(
			"homePage",
			"Home Page",
			$distro->homeUrl
		) ?>
		<?= formField(
			"mailingLists",
			"Mailing Lists",
			$distro->mailingListsUrl
		) ?>
		<?= formField(
			"userForums",
			"User Forums",
			$distro->userForumsUrl
		) ?>
		<?= formField(
			"bugTracker",
			"Bug Tracker",
			$distro->bugTrackerUrl
		) ?>

		<input type="submit" name="submit" />

	</form>

	<a href="distro.php?id=<?= $distro->id ?>">Volver</a>

</div>

</body>
</html>
