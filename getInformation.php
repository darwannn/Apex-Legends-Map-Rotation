<?php
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,"https://api.mozambiquehe.re/maprotation?version=2&auth=53dd0511e9087cff4738ce682dceedc0");
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    echo curl_exec($ch);
?>