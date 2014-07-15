			<!-- #showinfo: div flotante donde aparece info básica del país -->
			<div id="showinfo" class="modal">

				<a class="close-this close">
					<?php include('includes/icon-close.inc');?>

				</a>

				<div class="modal-header">
					<h4>Japón</h4>
				</div>
				<!-- #content -->
				<div class="modal-content">
<!--
*******************************************
	Add span to js
*******************************************
-->
					<span class="left">
						<a class="clickme link-ingredients" href="#about" data-menu-target="main">

							<span class="ingredients">80 Ingredientes</span>
							<?php include('includes/icon-ingredient.inc');?>
						</a>
					</span>
<!--
*******************************************
	Add span to js, change all dish to dish
*******************************************
-->
					<span class="right">

						<a class="clickme link-dishes" href="#about" data-menu-target="main">

							<span class="dish">24 Platos</span>
							<?php include('includes/icon-dish.inc');?>
						</a>
					</span>
				</div><!-- /#content -->

				<!-- #content -->
				<div id="content">

				</div><!-- /#content -->

			</div><!-- /#showinfo -->