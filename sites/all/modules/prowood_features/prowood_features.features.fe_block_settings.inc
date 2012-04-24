<?php
/**
 * @file
 * prowood_features.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function prowood_features_default_fe_block_settings() {
  $export = array();

  // bartik
  $theme = array();

  $theme['block-online_support'] = array(
    'module' => 'block',
    'theme' => 'bartik',
    'status' => 0,
    'weight' => '0',
    'region' => '',
    'custom' => '0',
    'visibility' => '0',
    'pages' => '<front>',
    'title' => 'Online support',
    'cache' => -1,
    'i18n_mode' => '1',
    'machine_name' => 'online_support',
  );

  $export['bartik'] = $theme;

  // prowood
  $theme = array();

  $theme['block-online_support'] = array(
    'module' => 'block',
    'theme' => 'prowood',
    'status' => '1',
    'weight' => '0',
    'region' => 'sidebar_first',
    'custom' => '0',
    'visibility' => '0',
    'pages' => '<front>',
    'title' => 'Online support',
    'cache' => -1,
    'i18n_mode' => '1',
    'machine_name' => 'online_support',
  );

  $export['prowood'] = $theme;

  // seven
  $theme = array();

  $theme['block-online_support'] = array(
    'module' => 'block',
    'theme' => 'seven',
    'status' => 0,
    'weight' => '0',
    'region' => '',
    'custom' => '0',
    'visibility' => '0',
    'pages' => '<front>',
    'title' => 'Online support',
    'cache' => -1,
    'i18n_mode' => '1',
    'machine_name' => 'online_support',
  );

  $export['seven'] = $theme;

  $theme_default = variable_get('theme_default', 'garland');
  $themes = list_themes();
  foreach ($export as $theme_key => $settings) {
    if ($theme_key != $theme_default && empty($themes[$theme_key]->status)) {
      unset($export[$theme_key]);
    }
  }
  return $export;
}
