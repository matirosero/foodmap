	<!-- #sidepanel: panel que entra por el lado -->
	<div id="sidepanel">

		<!--
			#close-sidepanel: cerrar panel
			.close: usar esta clase para generalidades de TODOS los botones de cerrar
		-->
		<!-- <a href="#" id="close-sidepanel" class="close">X</a> -->


		<nav id="sidepanel-navigation">
			<ul class="sidepanel-menu">
				<li class="">
					<a href="#" id="close-sidepanel" class="close">
						<?php include('includes/icon-closepanel.inc');?>
					</a>
				</li>
				<li class="">
					<a href="#" data-sidepanel-content="info" data-menu-target="main">
						<?php include('includes/icon-side-menu-info.inc');?>
						<span class="menu-txt">Información</span>
					</a>
					<span></span>
				</li>
				<li class="">
					<a href="" data-sidepanel-content="dishes" data-menu-target="main">
						<?php include('includes/icon-side-menu-dish.inc');?>
						<span class="menu-txt">Platos</span>
					</a>
					<span class="submenu-container"></span>
				</li>
				<li class="">
					<a href="" data-sidepanel-content="ingredients" data-menu-target="main">
						<?php include('includes/icon-side-menu-ingredient.inc');?>
						<span class="menu-txt">Ingredientes</span>
					</a>
					<span class="submenu-container"></span>
				</li>
			</ul>
					</nav>

		<div id="sidepanel-main">
			<!-- #sidepanel-content: aquí va el contenido de al lado -->
			<article id="sidepanel-content">

			</article><!-- /#sidepanel-content -->
		</div>

	</div><!-- /#sidepanel -->