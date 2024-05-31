<?php
 require_once 'database.php'
?>
<h1>taakjes voor mij</h1>
<tables>
<?php

$tasks= getALLTasks();

// var_dump($tasks);
foreach ($tasks as $task) {
    echo('<tr>');
    echo('<td>'.$task['id'].'</td>');
    echo(' ');
    echo('<td>'.$task['description'].'</td>');
    echo(' ');
    echo('<td>'.$task['remarks'].'</td>');
    echo(' ');
    echo('<td>'.$task['state'].'</td>');
    echo(', ');
    echo('<td>'.'<a href="view.php?task='. $task['id'].'">view</a>'.'</td>');
    echo('</tr>'."\n");
}
?>
</table>