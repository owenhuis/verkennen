<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="">
    </head>
    <body>
        <script src="" async defer></script>
    </body>
    <h1>dit is een prefab response van de server</h1>
    <?php


        $getal1 = $get_in['tafel'];
        // if ($getal1 == false){
        // $getal1 = 5;}
        echo "<h2> de tafel is: $getal1 </h2>";
        for ($getal2 = 0; $getal2 <= 10; $getal2++) {

        $uitkomst = $getal1 * $getal2;
        echo "<h2>  $getal2 * $getal1 = $uitkomst </h2>";
        }
        
        
        
        
        ?>

</html>



