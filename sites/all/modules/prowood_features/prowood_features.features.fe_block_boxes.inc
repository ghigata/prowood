<?php
/**
 * @file
 * prowood_features.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function prowood_features_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass;
  $fe_block_boxes->info = 'Online support';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'online_support';
  $fe_block_boxes->body = '<a href="ymsgr:sendim?trunghaiy">
<img src="http://opi.yahoo.com/online?u=techcruser&amp;m=g&amp;t=2" border="0"></a>
<script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
<a href="skype:trunghaiy?chat"><img src="http://mystatus.skype.com/smallclassic/trunghaiy" style="border: none;" width="114" height="20" alt="My status" /></a>
';

  $export['online_support'] = $fe_block_boxes;

  return $export;
}
