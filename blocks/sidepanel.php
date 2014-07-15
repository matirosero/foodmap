	<!-- #sidepanel: panel que entra por el lado -->
	<div id="sidepanel">

		<nav id="sidepanel-navigation">
			<ul class="sidepanel-menu">
				<li class="">
					<a href="#" id="close-sidepanel" class="close">
						<?php include('includes/icon-closepanel.inc');?>
					</a>
				</li>
				<li class="">
					<a class="sidepanel-content" href="#" data-sidepanel-content="info" data-menu-target="main">
						<?php include('includes/icon-side-menu-info.inc');?>
						<span class="menu-txt">Información</span>
					</a>
					<span></span>
				</li>
				<li class="">
					<a class="sidepanel-content" href="" data-sidepanel-content="dishes" data-menu-target="main">
						<?php include('includes/icon-side-menu-dish.inc');?>
						<span class="menu-txt">Platos</span>
					</a>

					<ul class="sidepanel-submenu dishes">
						<li class="">
							<a class="sidepanel-content current" href="" data-sidepanel-content="generalinfo" data-menu-target="sub" data-sidepanel-item="bisi-bele-bath">
								<?php include('includes/icon-side-submenu-generalinfo.inc'); ?>
								<span class="menu-txt">Información general</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="" data-sidepanel-content="ingredients" data-menu-target="sub" data-sidepanel-item="bisi-bele-bath">
								<?php include('includes/icon-side-submenu-ingredient.inc'); ?>
								<span class="menu-txt">Ingredientes</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="#" data-sidepanel-content="prep" data-menu-target="sub" data-sidepanel-item="bisi-bele-bath">
								<?php include('includes/icon-side-submenu-prep.inc'); ?>
								<span class="menu-txt">Elaboración</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="" data-sidepanel-content="tech" data-menu-target="sub" data-sidepanel-item="bisi-bele-bath">
								<?php include('includes/icon-side-submenu-tech.inc'); ?>
								<span class="menu-txt">Técnicas</span>
							</a>
						</li>
					</ul>


				</li>
				<li class="">
					<a class="sidepanel-content" href="" data-sidepanel-content="ingredients" data-menu-target="main">
						<?php include('includes/icon-side-menu-ingredient.inc');?>
						<span class="menu-txt">Ingredientes</span>
					</a>

					<ul class="sidepanel-submenu ingredients">
						<li class="">
							<a class="sidepanel-content current" href="" data-sidepanel-content="generalinfo" data-menu-target="sub" data-sidepanel-item="arroz">
								<?php include('includes/icon-side-submenu-generalinfo.inc');?>
								<span class="menu-txt">Información general</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="" data-sidepanel-content="dishes" data-menu-target="sub" data-sidepanel-item="arroz">
								<?php include('includes/icon-side-submenu-dish.inc');?>
								<span class="menu-txt">Platos</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="#" data-sidepanel-content="types" data-menu-target="sub" data-sidepanel-item="arroz">
								<?php include('includes/icon-side-submenu-types.inc');?>
								<span class="menu-txt">Variedades</span>
							</a>
						</li>
						<li class="">
							<a class="sidepanel-content" href="" data-sidepanel-content="tech" data-menu-target="sub" data-sidepanel-item="arroz">
								<?php include('includes/icon-side-submenu-tech.inc');?>
								<span class="menu-txt">Técnicas</span>
							</a>
						</li>
					</ul>


				</li>
			</ul>
					</nav>

		<div id="sidepanel-main">
			<!-- #sidepanel-content: aquí va el contenido de al lado -->
			<article id="sidepanel-content">

			</article><!-- /#sidepanel-content -->
		</div>

	</div><!-- /#sidepanel -->