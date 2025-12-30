<?php if (!defined('IN_GS')) { die('you cannot load this page directly.'); } ?>
<?php include('header.inc.php'); ?>

<section class="content">
	<div class="container">
		<div class="content-grid content-grid-nosidebar">
			<main class="content-main">

				<hgroup class="content-title">
					<h1><?php get_page_title(); ?></h1>
					<?php
					$page_slug = return_page_slug();
					if ($page_slug == 'dementia') {
						echo '<p class="subcard-question">How might we mitigate the impact dementia has on people? How might we prevent and cure dementia?</p>';
					} elseif ($page_slug == 'cancer') {
						echo '<p class="subcard-question">If we have a cure to cancer, why are people still dying? How might we mitigate the impact cancer has on our lives? What is the bottleneck for why our cancer prevention and treatment is not more effective?</p>';
					}
					?>
				</hgroup>

 
				<?php get_page_content(); ?>
			</main>
			<aside class="content-sidebar">
				<?php get_component('sidebar'); ?>
				<?php get_component('tagline'); ?>
			</aside>

		</div>
	</div>
</section>

<?php include('footer.inc.php'); ?>
