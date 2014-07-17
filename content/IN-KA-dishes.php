<!--
	Ultimo cambio: 17/7 2:30 AM
	Por: Flor
-->


<!--
	Para los nombres de archivos:
	(CODIGO PAIS: IN o JP)-dishes.html
	(CODIGO PAIS: IN o JP)-inredients.html
-->

				<header id="sidepanel-header">
					<nav class="user-actions">
						<ul>
							<li>
								<span class="action-tooltip" data-user-action="dl-pdf">
									<span class="tooltip-msg">Tu PDF está descargando</span>
								</span>
								<a class="action" href="#">
									<?php include('../includes/icon-action-pdf.svg'); ?>
								</a>
							</li>
							<li>
								<span class="action-tooltip" data-user-action="share">
									<span class="tooltip-msg">Compartir</span>
									<ul>
										<li>
											<a href="#" data-user-action="share" data-user-action-target="fb">
												<?php include('../includes/icon-share-fb.svg');?>
											</a>
										</li>
										<li>
											<a href="#" data-user-action="share" data-user-action-target="twitter">
												<?php include('../includes/icon-share-twitter.svg');?>
											</a>
										</li>
										<li>
											<a href="#" data-user-action="share" data-user-action-target="email">
												<?php include('../includes/icon-share-email.svg');?>
											</a>
										</li>

									</ul>
								</span>
								<a class="action" href="#">
									<?php include('../includes/icon-action-share.svg'); ?>
								</a>
							</li>
						</ul>
					</nav>

					<!-- Nombre Pais -->
					<h2>Karnataka <span class="small">8 platos</span></h2>
					<p>
						<!-- Parrafo info -->
						<strong>La cocina Kannada es una de las más antiguas</strong> que sobrevive desde sus orígenes en el <strong>siglo XVI</strong>, y que incluye platos vegetarianos y no vegetarianos. Las variedades de la cocina de esta región <strong>han influenciado los estados vecinos de Tamil Nadu, Andhra pradesh, Kerala y Maharashtra.</strong>
				</header>

				<div id="sidepanel-results">
					<form id="sidepanel-filter-order">
						<fieldset class="order">
							<label for"orderby">Ordenar por</label>

							<select name="region">
								<option value="" class="popularity">Popularidad</option>
								<option value="" class="alphabetical">Orden alfabético</option>
							</select>
						</fieldset>
						<fieldset class="filter">
							<label for="filterby">Filtrar por </label>
							<select name="region">
								<option value="">Región</option>



								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="AN" data-menu-target="main" value="">Andaman and Nicobar Islands</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="AP" data-menu-target="main" value="">Andhra Pradesh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="AR" data-menu-target="main" value="">Arunachal Pradesh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="A" data-menu-target="main" value="">Assam</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="BR" data-menu-target="main" value="">Bihar</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="CH" data-menu-target="main" value="">Chandigarh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="CT" data-menu-target="main" value="">Chhattisgarh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="DD" data-menu-target="main" value="">Daman and Diu</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="DL" data-menu-target="main" value="">Delhi</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="DN" data-menu-target="main" value="">Dadra and Nagar Haveli</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="GA" data-menu-target="main" value="">Goa</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="GJ" data-region-code="HP" data-menu-target="main" value="">Gujarat</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="HP" data-menu-target="main" value="">Himachal Pradesh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="HR" data-menu-target="main" value="">Haryana</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="JH" data-menu-target="main" value="">Jharkhand</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="JK" data-menu-target="main" value="">Jammu and Kashmir</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="KA" data-menu-target="main" value="">Karnataka</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="KL" data-menu-target="main" value="">Kerala</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="LD" data-menu-target="main" value="">Lakshadweep</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="MH" data-menu-target="main" value="">Maharashtra</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="ML" data-menu-target="main" value="">Meghalaya</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="MN" data-menu-target="main" value="">Manipur</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="MP" data-menu-target="main" value="">Madhya Pradesh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="MZ" data-menu-target="main" value="">Mizoram</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="NL" data-menu-target="main" value="">Nagaland</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="OR" data-menu-target="main" value="">Odisha</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="PY" data-menu-target="main" value="">Puducherry</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="PB" data-menu-target="main" value="">Punjab</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="RJ" data-menu-target="main" value="">Rajasthan</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="SK" data-menu-target="main" value="">Sikkim</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="TN" data-menu-target="main" value="">Tamil Nadu</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="TR" data-menu-target="main" value="">Tripura</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="UP" data-menu-target="main" value="">Uttar Pradesh</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="UT" data-menu-target="main" value="">Uttarakhand</option>

								<option data-sidepanel-content="dishes" data-country-code="IN" data-region-code="WB" data-menu-target="main" value="">West Bengal</option>

							</select>

						</fieldset>

					</form>

					<ul class="blocks" data-sidepanel-item="bisi-bele-bath">


						<!-- Lo que hay que poner para cada ingrediente/plato -->

						<li>
							<a class="sidepanel-content" href="#IN-bhakri" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/bisi-bele-bath-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Bisi bele bath</h4>
							</a>
						</li>

						<!-- Fin ingrediente/plato -->
						<li>
							<a class="sidepanel-content" href="#IN-chapati" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/chapati-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Chapati</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-dosa" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/dosa-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Dosa</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-idli" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/idli-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Idli</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-sambar-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/sambar-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Sambar</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-rasam-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/rasam-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Rasam</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-bonda-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/bonda-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Bonda</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-payasam" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/payasam-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Payasam</h4>
							</a>
						</li>
					</ul>

				</div>


