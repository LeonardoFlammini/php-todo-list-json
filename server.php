<?php

$toDoString = file_get_contents('data.json');
$toDoArray = json_decode($toDoString, true);

//fa in modo che il file venga letto come json
header("Content-Type: application/json");
echo json_encode($toDoArray);