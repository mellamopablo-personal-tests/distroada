<?php

require_once CONTROLLERS . "main.php";

?>

<!DOCTYPE html>
<html>
<head>

	<?php require_once "head.php" ?>

</head>
<body>

<?php require_once "header.php" ?>

<div class="distroPanel">

	<h2 class="title">Lista de distros</h2>

	<div class="distroList">

		<?php foreach ($distroList as $distro): ?>

			<a class="distro" href="distro.php?id=<?= $distro->id ?>">

				<span class="id">#<?= $distro->id ?></span>
				<span class="name"><?= $distro->name ?></span>

			</a>

		<?php endforeach; ?>

	</div>

</div>

</body>
</html>
