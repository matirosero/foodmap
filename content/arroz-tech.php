<!--
	Ultimo cambio: 11/7 22:44 PM
	Por: Mati
-->

				<header id="sidepanel-header">
					<!-- Lo que va aquí dentro varía, pero seguir este ejemplo -->

					<nav class="user-actions">
						<ul>
							<li>
								<span class="action-tooltip" data-user-action="add-foodtrip">
									<span class="tooltip-msg">Agregar a mis FoodTrips</span>
									<ul>
										<li>
											<a href="#" data-user-action="totrip" data-user-action-target="trip">Postres para bloquear arterias<!-- O el nombre que querás ponerle --></a>
										</li>
										<li>
											<a href="#" class="add-new-foodtrip" data-user-action="totrip" data-user-action-target="new-trip">Crear un nuevo FoodTrip</a>
										</li>
									</ul>
								</span>
								<a href="#" class="action">

									<?php include('../includes/icon-action-totrip.svg'); ?>
								</a>
							</li>
							<li>
								<span class="action-tooltip" data-user-action="like">
									<span class="tooltip-msg">Me gusta!</span>
								</span>
								<a class="action" href="#">
									<?php include('../includes/icon-action-like.svg'); ?>
								</a>
							</li>
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

					<h2>Arroz</h2>
					<h6><span class="country">India</span> <span class="region">Karnataka</span></h6>

					<div class="item-pic">
						<img src="images/arroz-full.jpg" alt="Arroz" />
					</div>
				</header>

				<div class="sidepanel-txt">

					<h3>TÉCNICAS</h3>

						<h4>PRODUCTOS DERIVADOS</h4>
						<ul>
							<li>
								<a href="" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz-harina" data-country-code="IN" data-menu-target="sub">
									Harina de arroz
								</a>
							</li>
							<li>
								<a href="" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz-fideos" data-country-code="IN" data-menu-target="sub">
									 Fideos de arroz
								</a>
							</li>
							<li>
								<a href="" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz-vinos" data-country-code="IN" data-menu-target="sub">
									Vinos de arroz
								</a>
							</li>
							<li>
								<a href="" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz-vinos" data-country-code="IN" data-menu-target="sub">
									Leche de arroz
								</a>
							</li>
							<li>
								<a href="" data-sidepanel-content="generalinfo" data-sidepanel-item="arroz-vinos" data-country-code="IN" data-menu-target="sub">
								Vinagre de arroz
								</a>
							</li>
						</ul>
					<span class="more-link"><a href="#more">Saber más</a></span>

				</div>
				<!-- Fin de contenido variable -->

