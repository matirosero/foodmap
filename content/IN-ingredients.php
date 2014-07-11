<!--
	Ultimo cambio: 11/7 1:09 PM
	Por: Flor
-->

				<header id="sidepanel-header">
					<nav class="user-actions">
						<ul>
							<li>
								<span class="action-tooltip">
									<strong>Bajar PDF</strong>
								</span>
								<a class="action" href="#" data-user-action="dl-pdf">
									<?php include('../includes/icon-action-pdf.svg'); ?>
								</a>
							</li>
							<li>
								<span class="action-tooltip">
									<strong>Compartir</strong>
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
								<a class="action" href="#" data-user-action="share">
									<?php include('../includes/icon-action-share.svg'); ?>
								</a>
							</li>
						</ul>
					</nav>
					
					
		<!-- Lo que va aquí dentro varía, pero seguirá este ejemplo -->
		
					<h2>India <span class="small">12 ingredientes</span></h2>
					<p>
						La gastronomía de la India se caracteriza por una gran variedad de estilos regionales y el <strong>uso sofisticado de hierbas y especias</strong>. Los alimentos básicos son elaborados con <strong>arroz</strong> (especialmente en el sur y el este) y <strong>trigo</strong> (predominantemente en el norte). Las especias como la <strong>pimienta negra</strong>, que ahora son consumidos en todo el mundo, son originalmente nativas al subcontinente indio. Curiosamente, el <strong>pimiento</strong>, que fue introducido por los portugueses, también es muy utilizado en este tipo de gastronomía.
					</p>
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
								<option value="">Andhra Pradesh</option>
								<option value="">Arunachal Pradesh</option>
								<option value="">Assam</option>
								<option value="">Bihar</option>
								<option value="">Chhattisgarh</option>
								<option value="">Goa</option>
								<option value="">Guyarat</option>
								<option value="">Hariana</option>
							</select>
							<select name="world">
								<option value="">Mundo</option>
								<option value="">Animal</option>
								<option value="">Vegetal</option>
								<option value="">Mineral</option>
								<option value="">Micro-organismos</option>
							</select>
						</fieldset>

					</form>

					<!-- .blocks: clase generica para <ul>, para cada vez que queramos cuadritos -->
					<ul class="blocks" data-sidepanel-item="arroz">

						<!-- .foodresult: cuadrito que contendra la info de cada resultado -->
						<!-- .ingredient || .recipe : clase que se agregara de acuerdo a si es plato o ingrediente, colgarse de ella para los iconos -->

						<li>
							<a class="foodresult-link" href="#IN-arroz" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/arroz-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Arroz</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-cordero" data-sidepanel-content="generalinfo" data-sidepanel-item="cordero" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/curry-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Curry</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-soja" data-sidepanel-content="generalinfo" data-sidepanel-item="soja" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/soja-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Soja</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-jengibre" data-sidepanel-content="generalinfo" data-sidepanel-item="jengibre" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/jengibre-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Jengibre</h4>
							</a>
						</li>

						<li>
							<a class="foodresult-link" href="#IN-masoor" data-sidepanel-content="generalinfo" data-sidepanel-item="masoor" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/masoor-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Masoor</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-pepino" data-sidepanel-content="generalinfo" data-sidepanel-item="pepino" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/pepino-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Pepino</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-berenjena" data-sidepanel-content="generalinfo" data-sidepanel-item="berenjena" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/berenjena-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Berenjena</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-ghee" data-sidepanel-content="generalinfo" data-sidepanel-item="ghee" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/ghee-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Ghee</h4>
							</a>
						</li>


						<li>
							<a class="foodresult-link" href="#IN-aceite-soja" data-sidepanel-content="generalinfo" data-sidepanel-item="aceite-soja" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/aceite-soja-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Aceite de soja</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-atta" data-sidepanel-content="generalinfo" data-sidepanel-item="atta" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/atta-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Atta</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-bajra" data-sidepanel-content="generalinfo" data-sidepanel-item="bajra" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/bajra-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Bajra</h4>
							</a>
						</li>
						<li>
							<a class="foodresult-link" href="#IN-jeera" data-sidepanel-content="generalinfo" data-sidepanel-item="jeera" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub">
								<div class="block-thumbnail">
									<img src="images/jeera-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Jeera</h4>
							</a>
						</li>
					</ul><!-- /.blocks -->

				</div>
				<!-- Fin de contenido variable -->

