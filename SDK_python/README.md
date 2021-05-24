# Deliveree SDK guideline

Deliveree - The Python library for the Deliveree SDK

With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

- API version: 1.0.0
- Package version: 1.0.0

## Getting Started
Please follow 3 steps bellow.

1 . Clone the repo from GitHub

2 . Import the SDK into your code
```shell
    >>> from sdk_python import SdkPython
    >>> deliveree_sdk = SdkPython()
```

3 . Check out the configurations under SDK_python/src/conf for each of 6 available APIs. Get your API keys and example data from duke@deliveree.com and update config files accordingly.


## Available APIs:
After getting API key and example data from duke@deliveree.com, you can start testing the integration with 6 APIS below. 
### 1. Get quote
```shell
    >>> SdkPython().get_quote(
            api_key,
            time_type,
            vehicle_type_id,
            packs,
            locations
        )
```

### 2. Get Vehicle Types
```shell
    >>> SdkPython().get_vehicle_types(api_key)
```

### 3. Get List of Bookings
```shell
    >>> SdkPython().get_list_dlvr(api_key)
```

### 4. Get Booking by ID
```shell
    >>> SdkPython().get_dlvr(id)
```

### 5. Create Booking
```shell
    >>> SdkPython().create_dlvr(
            api_key,
            vehicle_type_id,
            note,
            time_type,
            pickup_time,
            job_order_number,
            locations
    )
```

### 6. Cancel Booking by ID
```shell
    >>> SdkPython().cancel_dlvr(id)
```
