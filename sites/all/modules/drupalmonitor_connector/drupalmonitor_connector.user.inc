<?php

/**
 * @file
 * This file handles user metrics
 */
 
function drupalmonitor_connector_get_user_usercount() {
  $query = "SELECT count(*) FROM {users}";
  return db_query($query)->fetchField();
}

function drupalmonitor_connector_get_user_activesessioncount_300s() {
  $query = "SELECT count(*) FROM {users} u WHERE NOW()-300 > u.access";
  return db_query($query)->fetchField();
}

function drupalmonitor_connector_get_user_loggedinsessioncount_300s() {
  $query = "SELECT count(*) FROM {users} u WHERE NOW()-300 > u.access AND u.uid > 0";
  return db_query($query)->fetchField();
}