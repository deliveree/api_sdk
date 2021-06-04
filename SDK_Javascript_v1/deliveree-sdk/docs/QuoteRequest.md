# DelivereeApi.QuoteRequest

## Properties

| Name                | Type                | Description                 | Notes      |
| ------------------- | ------------------- | --------------------------- | ---------- |
| **time_type**       | **String**          | Only accept now or schedule | [required] |
| **pickup_time**     | **Date**            |                             | [optional] |
| **vehicle_type_id** | **Number**          |                             | [optional] |
| **packs**           | **[Pack]**          |                             | [optional] |
| **locations**       | **[ShortLocation]** |                             | [optional] |

# DelivereeApi.Pack

## Properties

| Name           | Type         | Description                                    | Notes      |
| -------------- | ------------ | ---------------------------------------------- | ---------- |
| **dimensions** | **[Number]** | Array [length, width, height] of pack by Meter | [required] |
| **weight**     | [**Number**] |                                                | [required] |
| **quantity**   | [**Number**] |                                                | [required] |

# DelivereeApi.ShortLocation

## Properties

| Name                 | Type        | Description | Notes      |
| -------------------- | ----------- | ----------- | ---------- |
| **address**          | **String**  |             | [required] |
| **latitude**         | **Number**  |             | [required] |
| **longitude**        | **Number**  |             | [required] |
| **need_cod**         | **Boolean** |             | [optional] |
| **cod_invoice_fees** | **Number**  |             | [optional] |
| **need_pod**         | **Boolean** |             | [optional] |
