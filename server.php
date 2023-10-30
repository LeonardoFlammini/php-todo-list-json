<?php

$toDoString = file_get_contents('data.json');
$toDoArray = json_decode($toDoString, true);

if(isset($_POST['newTask'] ) && !empty($_POST['newTask'])){
  $toDoArray[] = $_POST['newTask'];
  file_put_contents ('data.json', json_encode($toDoArray));
}else{
  // farà qualcosa
}
if(isset($_POST['indexToDelete'] ) && !empty($_POST['indexToDelete'])){
  array_splice($toDoArray,$_POST['indexToDelete'],1);
  file_put_contents ('data.json', json_encode($toDoArray));
}

//fa in modo che il file venga letto come json
header("Content-Type: application/json");
echo json_encode($toDoArray);