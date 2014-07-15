			<!-- #searchbox -->
			<div id="searchbox">

				<span>
					<form method="post" action="#" class="searchbox">
						<input type="text" name="search" class='searchbox-input' placeholder="¿Sabes lo que buscas?" onkeyup="buttonUp();" required />
						<button type="submit" class="searchbox-submit">
							<?php include('includes/icon-search.inc');?>
						</button>
						<span class="searchbox-icon">
							<?php include('includes/icon-search.inc');?>
						</span>
					</form>
				</span>
<!--
				<div id="searchresults">Search results :</div>
				<ul id="results" class="update">
				</ul>
				<a href="" id="clear">clear</a>
-->
			</div>
