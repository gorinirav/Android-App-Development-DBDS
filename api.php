<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");

$method = $_GET['method'];

$obj = new backend();

if ($method == 'getdata') {
    $obj->getdata();
}
else if ($method == 'getrdsdata') {
    $obj->getrdsdata();
} else {
    echo 'why are you here';
}
class backend
{
    public function __construct()
    {
    }

    public function getdata()
    {
        $query = isset($_POST['query']) ? $_POST['query'] : "";
        $req = isset($_POST['req']) ? $_POST['req'] : "";
        include 'db_config.php';
        $result = mysqli_query($link, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            echo json_encode($data);
    }

    public function getrdsdata()
    {
        $query = isset($_POST['query']) ? $_POST['query'] : "";
        $req = isset($_POST['req']) ? $_POST['req'] : "";
        include 'rds_db_config.php';
        $RecordSet = odbc_exec($ODBCConnection, $query);

        while (odbc_fetch_row($RecordSet)) {
            $result = odbc_result_all($RecordSet, "class='table'");
        }
    }
}
