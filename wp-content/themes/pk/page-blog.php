<?php
/**
 * Blog Page
 *
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */


$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$blog_posts = array(
  'paged' => $paged,
  'post_type' => 'post',
  'posts_per_page' => 10
);

$context['categories'] = Timber::get_terms('category');
$context['blog_posts'] = Timber::get_posts($blog_posts);
Timber::render( array( 'page-' . $post->post_name . '.twig', 'page.twig' ), $context );

$context['spook'] = get_cat_ID('spooky');