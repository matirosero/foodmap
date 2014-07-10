				<header id="sidepanel-header">
					<!-- Lo que va aquí dentro varía, pero seguirá este ejemplo -->
					<h2>India <span class="small">80 ingredientes</span></h2>
					<p>
						La gastronomía de la India se caracteriza por una <strong>gran variedad de estilos regionales y el uso sofisticado de hierbas y especias</strong>. Los alimentos básicos son elaborados con arroz (especialmente en el sur y el este) y trigo (predominantemente en el norte). Las especias como la pimienta negra, que ahora son consumidos en todo el mundo, son originalmente nativas al subcontinente indio. El pimiento, que fue introducido por los portugueses, también es muy utilizado en la cocina India.
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
					<ul class="blocks">

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
									<img src="images/cordero-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name">Cordero</h4>
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

