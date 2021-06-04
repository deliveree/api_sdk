# DelivereeApi.CreateDeliveryRequest

## Properties

| Name                        | Type                          | Description | Notes      |
| --------------------------- | ----------------------------- | ----------- | ---------- |
| **vehicle_type_id**         | **Number**                    |             | [required] |
| **note**                    | **String**                    |             | [optional] |
| **time_type**               | **String**                    |             | [required] |
| **pickup_time**             | **Date** (ISO Time)           |             | [optional] |
| **job_order_number**        | **String**                    |             | [optional] |
| **allow_parking_fees**      | **Boolean**                   |             | [optional] |
| **allow_tolls_fees**        | **Boolean**                   |             | [optional] |
| **allow_waiting_time_fees** | **Boolean**                   |             | [optional] |
| **optimize_route**          | **Boolean**                   |             | [optional] |
| **send_first_to_favorite**  | **Boolean**                   |             | [optional] |
| **locations**               | [**[Location]**](Location.md) |             | [required] |
| **require_signatures**      | **Boolean**                   |             | [optional] |
