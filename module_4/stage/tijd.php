<?php
    date_default_timezone_set('America/Los_Angeles');
    $tijd_zone = date('H:i');
    $html_string = '';
    
    if ($tijd_zone >= '06:00' && $tijd_zone <= '12:00') {
        echo "<h1>Het is ochtend en het is nu $tijd_zone uur</h1>";
        $html_string = "background-image: url('morning.png');";
    }
    elseif ($tijd_zone >= '12:01' && $tijd_zone <= '18:00') {
        echo "<h1>Het is middag en het is nu $tijd_zone uur</h1>";
        $html_string = "background-image: url('afternoon.png');";
    }
    elseif ($tijd_zone >= '18:01' && $tijd_zone <= '24:00') {
        echo "<h1>Het is avond en het is nu $tijd_zone uur</h1>";
        $html_string = "background-image: url('evening.png');";
    }
    elseif ($tijd_zone >= '00:01' && $tijd_zone <= '05:59') {
        echo "<h1>Het is nacht en het is nu $tijd_zone uur</h1>";
        $html_string = "background-image: url('night.png');";
    }
?>




<!DOCTYPE html>
<html>
<head>
    <title>Prefab Response</title>
    <style>
        body {
            <?php echo $html_string; ?>
            background-size: cover
            background-repeat: no-repeat;
        }
    </style>
</head>
<body>

</body>
</html>
