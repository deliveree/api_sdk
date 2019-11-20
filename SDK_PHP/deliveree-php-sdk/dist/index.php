<?php 
    require_once('./sample.php');
    use ApiSample\Sample;
    $apiInstance = new Sample();


    $apiData = $apiInstance ->getQuotes();

    $delivery = $apiInstance->addDelivery();

    $cancelResult = $apiInstance->cancelBooking(null);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Deliveree PHP SDK</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>
<body class="container">
    <div class="row">
        <div class="col-lg-12" >
            <div style="height: 50px">
                <!-- Blank-->
            </div>
            <h1 class="header"> Welcome to Deliveree SDK Example.</h1>
            <div class="alert alert-success" role="alert">
                This is an example to use SDK manual require.
                <br>
                The APIs automatically call to server
            </div>
        </div>
        <div class="col-lg-12">
            <h3>1. Cancel Booking Result</h3>
            <div>
                <p>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Show request params
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <pre>
                            <code>
                                -- Parameter require
                                id * 	integer	ID of Delivery.

                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong><?= $cancelResult?></strong>
            </div>
        </div> 
        <div class="col-lg-12">
            <h3>2. Get Quote API</h3>
            <div>
                <p>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#get_quote" aria-expanded="false" aria-controls="collapseExample">
                        Show request params
                    </button>
                </p>
                <div class="collapse" id="get_quote">
                    <div class="card card-body">
                        <pre>
                            <code>
                                -- Parameter require
                                --data '{
                                              "time_type": "now",
                                              "locations": [
                                                {
                                                  "address": "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                                                  "latitude": -6.2608232,
                                                  "longitude": 106.7884168
                                                },
                                                {
                                                  "address": "Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                                                  "latitude": -6.2608232,
                                                  "longitude": 106.7884168,
                                                  "need_cod": true,
                                                  "cod_invoice_fees": 5000,
                                                  "need_pod":true
                                                }
                                              ]
                                            }'

                                -- Response Data

                                HTTP/1.1 200 OK
                                Content-Type: application/json

                                {
                                    "data": [
                                        {
                                            "vehicle_type_id": 1,
                                            "vehicle_type_name": "Motorcycle",
                                            "total_fees": 500,
                                            "currency": "Rp"
                                        },
                                        {
                                            "vehicle_type_id": 2,
                                            "vehicle_type_name": "City Car",
                                            "total_fees": 800,
                                            "currency": "Rp"
                                        }
                                    ]
                                }
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <table class="table">
                <tr>
                    <td>Vehicle type id</td>
                    <td>Vehicle type name</td>
                    <td>Total Fees</td>
                    <td>Currency</td>
                </tr>

                <?php
                    foreach ($apiData['data'] as $item)  {
                ?>
                    <tr>
                        <td class=""><?= $item -> vehicle_type_id?></td>
                        <td><?= $item -> vehicle_type_name?></td>
                        <td><?= $item -> total_fees?></td>
                        <td><?= $item -> currency?></td>
                    </tr>
                 <?php } ?>
            </table>
        </div>
        <div class="col-lg-12">
                    <!--Add delivery-->
        <div class="row">
            <h3>3.Add delivery Data Result</h3>

            <div class="col-lg-12">
                <p>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#delivey" aria-expanded="false" aria-controls="collapseExample">
                        Show request params
                    </button>
                </p>
                <div class="collapse" id="delivey">
                    <div class="card card-body">
                        <pre>
                            <code>
                                -- Parameter require
                                   --data '{
                                      "vehicle_type_id": 1,
                                      "note": "Fragile item that needs good care.",
                                      "time_type": "schedule",
                                      "pickup_time": "2016-05-13T09:51:16+07:00",
                                      "job_order_number": "66666",
                                      "locations": [
                                        {
                                          "address": "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                                          "latitude": -6.2608232,
                                          "longitude": 106.7884168,
                                          "recipient_name": "Duke",
                                          "recipient_phone": "+84903398399",
                                          "note": "Second floor, room 609"
                                        },
                                        {
                                          "address": "Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                                          "latitude": -6.2608232,
                                          "longitude": 106.7884168,
                                          "recipient_name": "Nam",
                                          "recipient_phone": "+84903856534",
                                          "note": "First floor, right room.",
                                          "need_cod": true,
                                          "cod_note": "You need to get money from Nam",
                                          "cod_invoice_fees": 5000,
                                          "need_pod":true,
                                          "pod_note": "You need to ..."
                                        }
                                      ]
                                    }'
                                -- Response data
                                {
                                    "id": 100,
                                    "customer_id": 22,
                                    "driver_id": 403,
                                    "vehicle_type_id": 1,
                                    "company_id": 33,
                                    "time_type": "now",
                                    "status": "delivery_in_progress",
                                    "note": "Just a note",
                                    "total_fees": 500,
                                    "currency": "Rp",
                                    "tracking_url": "https://webapp.deliveree.com/...",
                                    "created_at": "2016-01-29T01:35:08Z",
                                    "eta_from_driver_to_pickup": 1800,
                                    "distance_from_driver_to_pickup": 10.5
                                }

                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <table class="table">
                <tr>
                    <td>ID</td>
                    <td>Customer ID</td>
                    <td>Vehicle type ID</td>
                    <td>Company ID</td>
                    <td>Time Type</td>
                    <td>Status</td>
                </tr>
                <tr>
                    <td>
                        <?=$delivery["id"]?></td>
                    <td><?=$delivery["customer_id"]?></td>
                    <td><?=$delivery["vehicle_type_id"] ?></td>
                    <td><?=$delivery["company_id"]?></td>
                    <td><?=$delivery["time_type"]?></td>
                    <td><?=$delivery["status"]?></td>
                </tr>
            </table>
        </div>
        </div>      
    </div>
</body>
</html>
  


