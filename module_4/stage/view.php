<?php
    require_once "database.php";
 $task = getTaskById($_GET['task']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>id: <?php echo $task['id']; ?></p>
    <p>description: <?php echo $task['description']; ?></p>
    <p>remarks: <?php echo $task['remarks']; ?></p>
    <p>state: <?php echo $task['state']; ?></p>
</body>
</html>