			<!-- #showinfo: div flotante donde aparece info básica del país -->
			<div id="showinfo" class="modal" style="display: block; opacity: 1;">

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
						<a class="clickme link-ingredients" href="#about">
							<?php include('includes/icon-ingredient.inc');?>

							<span class="ingredients">80 Ingredientes</span>
						</a>
					</span>
<!--
*******************************************
	Add span to js, change all recipe to dish
*******************************************
-->
					<span class="right">

						<a class="clickme link-recipes" href="#about">
							<?php include('includes/icon-dish.inc');?>

							<span class="recipe">24 Platos</span>
						</a>
					</span>
				</div><!-- /#content -->

				<!-- #content -->
				<div id="content">

				</div><!-- /#content -->

			</div><!-- /#showinfo -->