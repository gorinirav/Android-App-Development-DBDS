<?php

header("Access-Control-Allow-Origin: *");

$method = $_GET['method'];

$obj = new backend();

if ($method == 'getdata') {
    $obj->getdata();
}  else {
    echo 'why are you here';
}
class backend
{
    public function __construct()
    {
    }

    public function getdata()
    {
        set_time_limit(300);
        $query = isset($_POST['query']) ? $_POST['query'] : "Select * from cat_id";
        include 'db_config.php';
        $result = mysqli_query($link, $query);
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        echo json_encode($data);
    }
}
