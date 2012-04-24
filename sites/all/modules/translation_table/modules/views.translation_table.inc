<?php
// $Id: views.translation_table.inc,v 1.1.2.1 2009/09/29 02:12:36 pasqualle Exp $

/**
 * @file
 * Translation table for the views module.
 */

/**
 * Implementation of hook_translation_table_data().
 */
function views_translation_table_data() {
  $items['views'] = array(
    'title' => 'Views',
    'description' => 'Edit views translations',
    'form' => 'views_translation_table_views_form',
    'file' => 'modules/views.translation_table.inc',
  );

  return $items;
}

/**
 * Menu callback; Admin form for views translation.
 */
function views_translation_table_views_form(&$form_state) {
  $languages_selected = isset($_SESSION['translation_table']['languages_selected']) ? $_SESSION['translation_table']['languages_selected'] : locale_language_list('name', FALSE);

  $form['filter'] = views_translation_table_views_filter($languages_selected);
  $form['filtered_form'] = views_translation_table_views_filtered_form($languages_selected);
  $form['#submit'][] = 'views_translation_table_views_form_submit';
  $form['#submit'][] = 'translation_table_submit_translations';
  return $form;
}

/**
 * views filter.
 */
function views_translation_table_views_filter($languages_selected) {
  $form['languages_selected'] = array(
    '#type' => 'select',
    '#title' => t('Languages'),
    '#description' => t('Select the languages to display.'),
    '#options' => locale_language_list('name', TRUE),
    '#default_value' => array_keys($languages_selected),
    '#multiple' => TRUE,
  );

  $form['filter'] = array(
    '#type' => 'submit',
    '#value' => t('Filter'),
  );

  $form['#theme'] = 'translation_table_filter';
  return $form;
}

/**
 * Form for views translation.
 * Note: If the views string is not in the locales_source table, then it won't be
 * displayed.
 *
 * @param $languages
 *   languages to translate to
 */
function views_translation_table_views_filtered_form($languages) {
  $header = _translation_table_get_header($languages);

  $sql = "SELECT ls.lid, ls.source, ls.location FROM {locales_source} ls WHERE ls.textgroup = 'views'";
  $sql .= tablesort_sql($header);

  $form['strings']['#tree'] = TRUE;
  $form['#cache'] = TRUE;

  $form['header'] = array(
    '#type' => 'value',
    '#value' => $header,
  );
  $result = pager_query($sql, 50, 0);

  while ($source = db_fetch_object($result)) {
    if (strlen(trim($source->source)) > 0) {
      $form['strings'][$source->lid] = _translation_table_row($source, $languages);
    }
  }

  $form['languages'] = array(
    '#type' => 'value',
    '#value' => $languages,
  );
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );

  $form['pager'] = array('#value' => theme('pager', NULL, 50, 0));
  $form['#theme'] = 'translation_table';
  return $form;
}

/**
 * Submit handler for the views translation form.
 */
function views_translation_table_views_form_submit($form, &$form_state) {
  switch ($form_state['clicked_button']['#id']) {
    case 'edit-filter':
    case 'edit-submit':
      $_SESSION['translation_table']['languages_selected'] = array_intersect_key(locale_language_list('name', TRUE), $form_state['values']['languages_selected']);
      break;
  }
}

