<?php
/**
 * @file
 * This file handles load metrics
 */
 
function drupalmonitor_connector_get_load_requestscount_300s() {
  //Total Requests
  $time_offset = REQUEST_TIME - 5*60;
  $query = "SELECT count(*) as anzahl FROM {drupalmonitor_log} WHERE dt > :time_offset";
  $val = db_query($query, array('time_offset' => $time_offset))->fetchField();
  return $val;
}

  //Requests per second in the last 300s
function drupalmonitor_connector_get_load_requestspersecondcount_300s() {
  $requests = drupalmonitor_connector_get_load_requestscount_300s();
  return $requests / (5*60);
}

//slow requests //more than 1000 milliseconds
function drupalmonitor_connector_get_load_slowrequestscount_300s() {
  $time_offset = REQUEST_TIME - 5*60;
  $query = 'SELECT count(*) as anzahl FROM {drupalmonitor_log} WHERE dt > :time_offset AND execution_time > :execution_time';
  $val = db_query($query, array(':time_offset' => $time_offset, ':execution_time' => 1000))->fetchField();
  return $val;
}

//slow requests //more than 1000 milliseconds
function drupalmonitor_connector_get_load_slowrequests_300s() {
  $time_offset = REQUEST_TIME - 5*60;
  $query = 'SELECT * FROM {drupalmonitor_log} WHERE dt > :time_offset  AND execution_time > :execution_time';
  $result = db_query($query, array(':time_offset' => $time_offset, ':execution_time' => 1000));
  
  $slowpages = array();
  foreach ($result as $record) {
    $slowpages[] = $record;
  }
  
  return $slowpages;
}

//memory
function drupalmonitor_connector_get_load_maxmemoryusage() {
  $time_offset = REQUEST_TIME - 5*60;
  $query = 'SELECT MAX(memory) as anzahl FROM {drupalmonitor_log} WHERE dt > :time_offset';
  $var = db_query($query, array(':time_offset' => $time_offset))->fetchField();
  return $var / 1000000;
}

// APC enabled?
function drupalmonitor_connector_load_apcenabled() {
  if (!function_exists('apc_cache_info')) {
    return 0;
  }
  return 1;
}