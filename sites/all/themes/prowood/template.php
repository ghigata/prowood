<?php
/**
* function for pulling out the necessary variables in the search results to display thumbnails images alongside the search results
*/
function prowood_preprocess_search_result(&$vars, $hook) {
  $n = node_load($vars['result']['node']->nid);
  $n && ($vars['node'] = $n);

}
function prowood_preprocess_search_results(&$vars, $hook) {
	pager_default_initialize(count($vars['results']), 5);
	$vars['pager'] = theme('pager', array ('quantity' => 5));
}