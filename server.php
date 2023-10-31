<?php

$toDoString = file_get_contents('data.json');
$toDoArray = json_decode($toDoString, true);

class task {
  public $text;
  public $done;
}

if(isset($_POST['newTask'] ) && !empty($_POST['newTask'])){
  $newTask = new task();
  $newTask->text = $_POST['newTask'];
  $newTask->done = false;
  $toDoArray[] = $newTask;
  file_put_contents ('data.json', json_encode($toDoArray));
}


if(isset($_POST['indexToDelete'] )){
  array_splice($toDoArray,$_POST['indexToDelete'],1);
  file_put_contents ('data.json', json_encode($toDoArray));
}

if(isset($_POST['indexToToggle'] )){
  $index = $_POST['indexToToggle'];
  $taskSelected = $toDoArray[$index];
  $taskSelected->done = !$taskSelected->done;
  var_dump($toDoArray);
  file_put_contents ('data.json', json_encode($toDoArray));
}

//fa in modo che il file venga letto come json
header("Content-Type: application/json");
echo json_encode($toDoArray);