<?php

/**
 * @file
 * This file handles metric management for the Drupal file management
 */

function drupalmonitor_connector_get_files_filescount() {
  $query = "SELECT count(*) FROM {file_managed}";
  return db_query($query)->fetchField();
}

function drupalmonitor_connector_get_files_filesfoldersize() {
  $query = "SELECT sum(filesize) FROM {file_managed}";
  return db_query($query)->fetchField();
}