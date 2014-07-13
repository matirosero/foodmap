	<!-- #main: contenido principal (o sea, lo que está abierto inicialmente) -->
	<div <?php if ($page == 'home' || $page == 'foodtrip') { echo 'id="main" '; } ?>class="maincontent">

	<?php

	if ($page == 'home') {
		include('blocks/map-content.php');
	} elseif ($page == 'foodtrip') {
		include('blocks/map-foodtrip.php');
	} elseif ($page == 'login') {
		include('blocks/login.php');
	} elseif ($page == 'register') {
		include('blocks/register.php');
	} elseif ($page == 'plans') {
		include('blocks/plans.php');
	} elseif ($page == 'user') {
		include('blocks/user.php');
	}

	?>

	</div><!-- /#main -->
