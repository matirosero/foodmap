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
											<a class="sidepanel-content" href="#" data-user-action="share" data-user-action-target="fb">
												<?php include('../includes/icon-share-fb.svg');?>
											</a>
										</li>
										<li>
											<a class="sidepanel-content" href="#" data-user-action="share" data-user-action-target="twitter">
												<?php include('../includes/icon-share-twitter.svg');?>
											</a>
										</li>
										<li>
											<a class="sidepanel-content" href="#" data-user-action="share" data-user-action-target="email">
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
					<h2>India <span class="small">28 platos</span></h2>
					<p>
						<!-- Parrafo info -->
						<strong>La gastronomía de la India es muy variada y surge como resultado de su diversidad de poblaciones y culturas</strong>. A causa de las colonizaciones realizadas durante varios siglos se fueron incorporando diferentes prácticas culinarias. Aquí puedes explorar y descubrir los <strong>platos más auténticos y característicos de las diferentes regiones</strong> del país!
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
							<select name="region" data-sidepanel-content="dishes">
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
							<!-- Esto de aqui es CODIGO PAIS y nombre del ingrediente/plato, exactamente así -->
							<a class="sidepanel-content" href="#IN-bhakri" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-menu-target="sub-dishes">
								<div class="block-thumbnail">

									<!--
										Sigamos esta convención para nombres de archivos, tanto de productos como de lugares:
											NOMBRE-thumbnail.jpg - cuadrito para listado
									-->
									<img src="images/bhakri-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Bhakri</span></h4>
							</a>
						</li>
						<!-- Fin ingrediente/plato -->

						<li>
							<a class="sidepanel-content" href="#IN-bhakri" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/bisi-bele-bath-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Bisi bele bath</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-kadhahi-paneer" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/kadhahi-paneer-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Kadhahi Paneer</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-naan" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/naan-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Naan</span></h4>
							</a>
						</li>

						<li>
							<a class="sidepanel-content" href="#IN-shahi-paneer" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/shahi-paneer-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Shahi paneer</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-chapati" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/chapati-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Chapati</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-dum-gosht" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/dum-gosht-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Dum gosht</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-pollo-tandoori" data-sidepanel-content="generalinfo" data-sidepanel-item="pollo-tandoori" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/pollo-tandoori-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Pollo tandoori</span></h4>
							</a>
						</li>


						<li>
							<a class="sidepanel-content" href="#IN-biryani" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/biryani-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Biryani</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-samosa" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/samosa-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Samosa</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-paneer" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/paneer-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Paneer</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-pescado-tandoori" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/pescado-tandoori-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Pescado tandoori</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-pakora" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/pakora-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Pakora</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-gulab-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/gulab-jamun-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Gulab jamun</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-chaat" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/chaat-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Chaat</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-baati" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/baati-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Baati</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-gulab-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/gulab-jamun-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Gulab jamun</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-dosa" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/dosa-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Dosa</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-idli" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/idli-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Idli</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-rava-upma" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/rava-upma-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Rava upma</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-sambar-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/sambar-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Sambar</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-rasam-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/rasam-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Rasam</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-bonda-jamun" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/bonda-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Bonda</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-batata-vada" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/batata-vada-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Batata Vada</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-puttu" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/puttu-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Puttu</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-uttapam" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/uttapam-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Uttapam</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-payasam" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/payasam-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Payasam</span></h4>
							</a>
						</li>
						<li>
							<a class="sidepanel-content" href="#IN-kanji" data-sidepanel-content="generalinfo" data-sidepanel-item="bisi-bele-bath" data-country-code="IN" data-submenu="dish" data-menu-target="sub-dishes">
								<div class="block-thumbnail">
									<img src="images/kanji-thumb.jpg" alt="" />
									</div>

								<h4 class="block-name"><span>Kanji</span></h4>
							</a>
						</li>
					</ul>

				</div>


