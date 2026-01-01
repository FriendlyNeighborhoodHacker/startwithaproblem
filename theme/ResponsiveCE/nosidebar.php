<?php if (!defined('IN_GS')) { die('you cannot load this page directly.'); } ?>
<?php include('header.inc.php'); ?>

<section class="content">
	<div class="container">
		<div class="content-grid content-grid-nosidebar">
			<main class="content-main">

				<hgroup class="content-title">
					<?php
					$page_slug = return_page_slug();
					
					// Define category mappings
					$health_pages = array('dementia', 'cancer', 'cavities', 'malaria');
					$energy_pages = array('clean-energy');
					$society_pages = array('unsafe-drinking-water', 'homelessness');
					$climate_pages = array('sustainable-farming');
					
					// Display category label with link back to homepage section
					if (in_array($page_slug, $health_pages)) {
						echo '<p style="font-size: 24px; margin-bottom: 0; margin-top: 0;"><a href="index.php#health-subcards" style="color: var(--primary); text-decoration: none;">/Health</a></p>';
					} elseif (in_array($page_slug, $energy_pages)) {
						echo '<p style="font-size: 24px; margin-bottom: 0; margin-top: 0;"><a href="index.php#energy-subcards" style="color: var(--primary); text-decoration: none;">/Energy</a></p>';
					} elseif (in_array($page_slug, $society_pages)) {
						echo '<p style="font-size: 24px; margin-bottom: 0; margin-top: 0;"><a href="index.php#society-subcards" style="color: var(--primary); text-decoration: none;">/Society</a></p>';
					} elseif (in_array($page_slug, $climate_pages)) {
						echo '<p style="font-size: 24px; margin-bottom: 0; margin-top: 0;"><a href="index.php#climate-subcards" style="color: var(--primary); text-decoration: none;">/Climate</a></p>';
					}
					?>
					<h1><?php get_page_title(); ?></h1>
					<?php get_subcard_question(); ?>
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
