<?php

    foreach($_POST as $key => $value){
        // echo $value;
        if ($value == ""){
            echo "je hebt het $key veld niet ingevuld";
        }
    }
    // var_dump(); 
    // if ($_POST["naam"] != ""){
    //     echo " je hebt de naamveld ingevuld";
    // }
    // else{
    //     echo " je hebt de naamveld niet ingevuld";
    // }
    // if ($_POST["leeftijd"] != ""){
    //     echo " je hebt de leeftijdveld ingevuld";
    // }
    // else{
    //     echo " je hebt de leeftijdveld niet ingevuld";
    // }
    // if ($_POST["wachtwoord"] != ""){
    //     echo " je hebt de wahctwoordveld ingevuld";
    // }
    // else{
    //     echo " je hebt de wachtwoordveld niet ingevuld";
    // }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <h1>hello world</h1>
        

        <form method="post" action="index.php">
            <label for="naam">vul hier je naam in</label>
            <input id="naam" name="naam" type="text">

            <br>
            <label for="leeftijd">vul hier je leeftijd in</label>
            <input id="leeftijd" name="leeftijd" type="number">
            <br>
            <label for="wachtwoord">vul hier je wachtwoord in</label>
            <input id="wachtwoord" name="wachtwoord" type="password">
            <br>

            <input type="submit" value="verstuur">
        </form>
        <script src="" async defer></script>
    </body>
</html>