	<!-- #main: contenido principal (o sea, lo que está abierto inicialmente) -->
	<div <?php if ($page == 'home') { echo 'id="main" '; } ?>class="maincontent">

	<?php

	if ($page == 'home') {
		include('blocks/map-content.php');
	} elseif ($page == 'login') {
		include('blocks/login.php');
	} elseif ($page == 'plans') {
		include('blocks/plans.php');
	}

	?>

	</div><!-- /#main -->