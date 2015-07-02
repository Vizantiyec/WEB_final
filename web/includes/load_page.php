<?php

if(!$_POST['page']) die("0");

$page = (int)$_POST['page'];

if(file_exists('../portfolio/project'.$page.'.html'))
echo file_get_contents('../portfolio/project'.$page.'.html');

else echo 'There is no such page!';
?>
