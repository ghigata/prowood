<?php
/**
 * @file
 * This file handles node metrics
 */
 
function drupalmonitor_node_contenttypes() {
  $result = db_query("SELECT count(*) as counter, n.type FROM {node} n GROUP BY n.type");
  foreach ($result as $record) {
    $data[$record->type] = $record->counter;
  }
  return $data;
}