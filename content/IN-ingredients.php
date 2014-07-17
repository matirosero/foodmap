<!--
	Ultimo cambio: 11/7 22:43 PM
	Por: Mati
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

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="AN" data-menu-target="main" value="">Andaman and Nicobar Islands</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="AP" data-menu-target="main" value="">Andhra Pradesh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="AR" data-menu-target="main" value="">Arunachal Pradesh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="A" data-menu-target="main" value="">Assam</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="BR" data-menu-target="main" value="">Bihar</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="CH" data-menu-target="main" value="">Chandigarh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="CT" data-menu-target="main" value="">Chhattisgarh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="DD" data-menu-target="main" value="">Daman and Diu</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="DL" data-menu-target="main" value="">Delhi</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="DN" data-menu-target="main" value="">Dadra and Nagar Haveli</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="GA" data-menu-target="main" value="">Goa</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="GJ" data-menu-target="main" value="">Gujarat</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="HP" data-menu-target="main" value="">Himachal Pradesh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="HR" data-menu-target="main" value="">Haryana</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="JH" data-menu-target="main" value="">Jharkhand</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="JK" data-menu-target="main" value="">Jammu and Kashmir</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="KA" data-menu-target="main" value="">Karnataka</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="KL" data-menu-target="main" value="">Kerala</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="LD" data-menu-target="main" value="">Lakshadweep</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="MH" data-menu-target="main" value="">Maharashtra</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="ML" data-menu-target="main" value="">Meghalaya</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="MN" data-menu-target="main" value="">Manipur</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="MP" data-menu-target="main" value="">Madhya Pradesh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="MZ" data-menu-target="main" value="">Mizoram</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="NL" data-menu-target="main" value="">Nagaland</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="OR" data-menu-target="main" value="">Odisha</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="PY" data-menu-target="main" value="">Puducherry</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="PB" data-menu-target="main" value="">Punjab</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="RJ" data-menu-target="main" value="">Rajasthan</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="SK" data-menu-target="main" value="">Sikkim</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="TN" data-menu-target="main" value="">Tamil Nadu</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="TR" data-menu-target="main" value="">Tripura</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="UP" data-menu-target="main" value="">Uttar Pradesh</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="UT" data-menu-target="main" value="">Uttarakhand</option>

								<option data-sidepanel-content="ingredients" data-country-code="IN" data-region-code="WB" data-menu-target="main" value="">West Bengal</option>


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
							<a class="sidepanel-content" href="#IN-arroz" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/arroz-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Arroz</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-cordero" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/curry-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Curry</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-soja" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/soja-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Soja</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-jengibre" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/jengibre-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Jengibre</h4>
							</a>
						</li>

						<li>
							<a class="sidepanel-content" href="#IN-masoor" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/masoor-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Masoor</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-pepino" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/pepino-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Pepino</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-berenjena" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/berenjena-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Berenjena</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-ghee" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/ghee-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Ghee</h4>
							</a>
						</li>


						<li>
							<a class="sidepanel-content" href="#IN-aceite-soja" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/aceite-soja-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Aceite de soja</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-atta" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/atta-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Atta</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-bajra" data-sidepanel-content="generalinfo" data-sidepanel-item="bajra" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/bajra-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Bajra</h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-jeera" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz" data-country-code="IN" data-submenu="ingredient" data-menu-target="sub-ingredients">
								<div class="block-thumbnail">
									<img src="images/jeera-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Jeera</h4>
							</a>
						</li>
					</ul><!-- /.blocks -->

				</div>
				<!-- Fin de contenido variable -->

