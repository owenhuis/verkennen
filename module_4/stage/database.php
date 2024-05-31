<?php
$servername = "db: 3306";
$username = "root";
$password = "mysql";
$dbname = "work";

function db_conection($servername, $username, $password,$dbname){
try {
    $connection = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}   catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  return $connection;
}

function getALLTasks(){
    $sql = 'SELECT *FROM tasks';
$statement = $GLOBALS['connection']->prepare($sql);
$statement->execute();
$tasks = $statement->fetchALL();

return $tasks;
}


function getTaskById($id){
    echo('task id = '.$id);
    $sql = 'SELECT *FROM tasks WHERE id = :id';
    $statement = $GLOBALS['connection']->prepare($sql);
    $statement->bindParam('id',$id);
    $statement->execute();
    $tasks = $statement->fetch();
    
    return $tasks;
}

$connection = db_conection($servername, $username, $password, $dbname);

?>