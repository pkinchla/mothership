<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package special
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="//gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
  <a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'special' ); ?></a>

  <header id="masthead" class="site-header wrapper">
    <div class="site-header__banner">
      <a class="site-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
        <svg id="ptok" class="logo" viewBox="0 0 152.521 55.061" aria-labelledby="title desc">
          <title id="title">logo type</title>
          <desc id="desc">Paul Kinchla</desc>
          <g id="draw">
            <path class="the-d" d="M21.062,54.971H2.873c-0.552-0.002-1.268-0.063-1.923-0.53c-0.601-0.415-0.975-1.184-0.948-1.953 C0,52.465,0,52.391,0.015,52.265c0.119-1.58,1.562-3.294,3.182-3.682c2.324-0.557,6.89-0.36,16.997-0.48 c0.466-0.006,0.748-0.009,0.788-0.011c4.113-0.261,6.982-1.859,9.018-5.03c2.106-3.307,3.173-8.379,3.168-15.073l0.004-0.205 c-0.02-6.657-1.096-11.762-3.201-15.141c-2.066-3.289-4.934-4.938-9.022-5.187c-0.137,0.002-4.054,0.031-8.14,0.031 c-4.549-0.007-7.834,0.18-9.56-0.212C1.621,6.906,0.055,5.087,0.004,3.434C-0.021,2.65,0.357,1.866,0.968,1.437 c0.679-0.486,1.454-0.546,1.978-0.548H20.97c7.484,0,13.169,2.328,16.949,6.919c3.771,4.578,5.606,11.16,5.61,20.12 c-0.004,8.964-1.836,15.546-5.601,20.124C34.159,52.643,28.484,54.971,21.062,54.971z"/>
          </g>
          <g id="name">
            <path d="M56.204,23.472l2.915-22.169h4.278c2.76,0,4.899,0,6.729,1.457c1.457,1.147,2.232,2.884,2.232,4.93 c0,2.48-0.93,4.465-2.604,5.768c-1.798,1.396-3.969,1.55-6.729,1.55h-1.054l-1.116,8.465H56.204z M63.18,11.225 c2.977,0,4.527-0.527,4.527-3.349c0-2.419-1.333-2.791-3.907-2.791h-0.527l-0.806,6.14H63.18z"/><path d="M82.958,23.44l0.248-1.612c-0.992,1.458-2.512,2.232-4.527,2.232c-3.783,0-6.015-2.573-6.015-7.069 c0-5.24,3.069-8.867,7.162-8.867c2.016,0,3.69,0.775,4.837,2.573l0.248-2.077h4.279l-1.954,14.82H82.958z M80.819,11.534 c-2.387,0-3.969,1.86-3.969,5.147c0,2.14,1.333,3.565,3.566,3.565c2.263,0,3.814-1.953,3.814-5.023 C84.23,12.898,82.927,11.534,80.819,11.534z"/><path d="M95.419,14.821c-0.155,1.146-0.31,2.016-0.31,2.697c0,1.799,0.961,2.76,2.667,2.76c2.729,0,3.411-1.799,3.938-5.705 l0.775-5.953h4.279l-0.868,6.48c-0.403,3.069-0.837,5.302-2.418,6.883c-1.333,1.364-3.287,2.077-5.798,2.077 c-4.31,0-6.883-2.232-6.883-5.487c0-0.869,0.155-2.357,0.434-4.527l0.713-5.426h4.279L95.419,14.821z"/><path d="M111.011,0h4.279l-3.07,23.472h-4.279L111.011,0z"/><path d="M55.119,32.303h4.65l-1.333,9.983l8.65-9.983h5.488l-9.457,10.635l6.667,11.534h-5.209l-6.263-11.193l-1.457,11.193h-4.651 L55.119,32.303z"/><path d="M73.656,39.62h4.279l-1.922,14.852h-4.279L73.656,39.62z M76.508,31.372c1.396,0,2.512,1.116,2.512,2.512 s-1.116,2.512-2.512,2.512c-1.426,0-2.512-1.116-2.512-2.512S75.082,31.372,76.508,31.372z"/> <path d="M81.096,39.62h3.969l-0.341,2.325c1.768-1.892,3.473-2.821,5.52-2.821c3.225,0,5.085,1.674,5.085,4.465 c0,0.93-0.155,1.922-0.311,3.038l-1.023,7.845h-4.279l1.085-8.278c0.062-0.589,0.093-1.023,0.093-1.303 c0-1.396-0.806-2.201-2.263-2.201c-2.512,0-3.845,1.457-4.248,4.496l-0.961,7.286h-4.279L81.096,39.62z"/><path d="M105.834,42.906c-2.76,0-4.589,1.923-4.589,4.806c0,2.232,1.426,3.598,3.783,3.598c1.333,0,2.667-0.435,4.186-1.21 l-0.713,4.093c-1.24,0.59-2.574,0.868-4.093,0.868c-4.651,0-7.535-2.884-7.535-7.317c0-5.054,3.597-8.619,8.527-8.619 c2.078,0,3.721,0.589,5.116,1.612l-1.023,3.689C108.253,43.402,107.106,42.906,105.834,42.906z"/><path d="M113.769,31h4.248l-1.147,8.774c-0.093,0.651-0.217,1.334-0.496,2.047c1.706-1.829,3.38-2.697,5.396-2.697 c3.225,0,5.085,1.674,5.085,4.465c0,0.93-0.156,1.922-0.311,3.038l-1.023,7.845h-4.279l1.085-8.278 c0.062-0.589,0.093-1.023,0.093-1.303c0-1.396-0.806-2.201-2.263-2.201c-2.512,0-3.845,1.457-4.248,4.496l-0.961,7.286h-4.279 L113.769,31z"/><path d="M131.687,31h4.279l-3.069,23.472h-4.278L131.687,31z"/><path d="M146.288,54.44l0.248-1.612c-0.992,1.458-2.51,2.232-4.525,2.232c-3.783,0-6.016-2.573-6.016-7.069 c0-5.24,3.07-8.867,7.162-8.867c2.016,0,3.689,0.775,4.838,2.573l0.248-2.077h4.277l-1.953,14.82H146.288z M144.149,42.534 c-2.387,0-3.969,1.86-3.969,5.147c0,2.14,1.334,3.565,3.566,3.565c2.264,0,3.812-1.953,3.812-5.023 C147.56,43.898,146.259,42.534,144.149,42.534z"/>
          </g>
        </svg>
      </a>
      <nav id="site-navigation" class="main-navigation site-header__navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
      </nav><!-- #site-navigation -->
    </div>
  </header><!-- #masthead -->

  <div id="content" class="site-content">
