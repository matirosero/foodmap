<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<title>FoodMap</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />




	<!-- CSS -->
	<link rel="stylesheet" href="normalize.css" type="text/css">
	<link rel="stylesheet" href="style.css" type="text/css">
	<link href="media-queries.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="ammap/ammap.css" type="text/css">


	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900|Merriweather:400,400italic,700,700italic' rel='stylesheet' type='text/css'>




	<!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->

</head>

<body>


	<!-- #page-header: encabezado de TODA la página -->
	<header id="page-header">

		<!-- #page-title: donde va el logo, titulo principal -->
		<h1 id="page-title">
			<a href="index.php">
				<!-- Este es el logo -->
				<?php include('includes/logo-header-foodmap.inc');?>
				<!-- Fin logo -->
			</a>
		</h1><!-- /#page-title -->

		<!-- #menu-top: menús arriba -->

		<a id="menu-toggle" href="#menu-main">
			<!-- Esto es el ícono del menu en móvil -->
			<?php include('includes/icon-menu-toggle.inc');?>
			<!-- Fin ícono menú -->
		</a>
		<nav id="menu-top">

			<div id="menu-main-container"><!-- #menu-main: menú principal -->
				<ul id="menu-main">
				<li>
					<a href="index.php">Mapa</a>
				</li>
				<li>
					<a href="index.php#foodtrips">FoodTrips</a>
				</li>

				<li>
					<a href="plans.php">Planes</a>
				</li>
			</ul>
			</div><!-- /#menu-main -->

			<ul id="menu-user"><!-- #menu-user: menú del usuari: login, etc -->
				<?php if ($page == 'foodtrip' || $page == 'user') { ?>
				<li>
					<a href="index.php">Logout</a>
				</li>
				<li>
					<a href="user.php">Mi perfil</a>
				</li>
				<?php } else { ?>
				<li>
					<a href="login.php">Login</a>
				</li>

				<?php } ?>
			</ul><!-- #menu-user -->
		</nav><!-- /#menu-top -->



	</header><!-- /#page-header -->

