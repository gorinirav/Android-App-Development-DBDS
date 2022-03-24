<?php
    $user = "awsuser"; 
    $password = "Admin_123";
    $ODBCConnection = odbc_connect("DRIVER={Amazon Redshift (x64)};Server=redshift-cluster-2.cxvy49d1d6bq.us-east-1.redshift.amazonaws.com; Database=dev;UID=awsuser;PWD=Admin_123;Port=5439", $user, $password);
    