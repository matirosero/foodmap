<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<title>FoodMap</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">



	<!-- CSS -->
	<link rel="stylesheet" href="http://necolas.github.io/normalize.css/3.0.1/normalize.css" type="text/css">
	<link rel="stylesheet" href="style.css" type="text/css">
	<link rel="stylesheet" href="sidepanel.css" type="text/css">
	<link href="media-queries.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="ammap/ammap.css" type="text/css">
	<!-- <link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" /> -->


	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900|Merriweather:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

	<!-- External scripts -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<!-- <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script> -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script>

	<!-- AM Map scripts -->
	<script src="ammap/ammap.js" type="text/javascript"></script>
	<!-- map file should be included after ammap.js -->
	<script src="ammap/maps/js/worldLow.js" type="text/javascript"></script>
	<script src="ammap/maps/js/indiaLow.js" type="text/javascript"></script>



	<!-- Custom scripts -->
	<script type="text/javascript" src="js/foodmap-theme.js"></script>
	<script src="js/foodmap.js" type="text/javascript"></script>


	<!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->

</head>

<body>


	<!-- #page-header: encabezado de TODA la página -->
	<header id="page-header">

		<!-- #page-title: donde va el logo, titulo principal -->
		<h1 id="page-title">
			<a href="">
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
					<a href="planes.php">Planes</a>
				</li>
			</ul>
			</div><!-- /#menu-main -->

			<ul id="menu-user"><!-- #menu-user: menú del usuari: login, etc -->
				<?php if ($page == 'foodtrip' || $page == 'user') { ?>
				<li>
					<a href="index.php">Logout</a>
				</li>
				<li>
					<a href="usuario.php">Mi perfil</a>
				</li>
				<?php } else { ?>
				<li>
					<a href="login.php">Login</a>
				</li>

				<?php } ?>
			</ul><!-- #menu-user -->
		</nav><!-- /#menu-top -->



	</header><!-- /#page-header -->

