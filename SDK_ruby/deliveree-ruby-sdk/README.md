# Deliveree SDK guideline

Deliveree - The Ruby gem for the Deliveree SDK

With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

- API version: 1.0.0
- Package version: 1.0.0
## Installation

### Install the gem locally:
Please follow 2 step bellow.

1 . Adding SDK into Gemfile in your project follow command bellow.
```shell script
    # Require sdk into Gemfile
    gem 'deliveree_sdk', '~> 1.0.0'
```
2 . Run command install `deliveree_sdk` from your local directory. Make sure this SDK available in your computer.
```shell
    #Install sdk from local compute in to your project
    gem install ~/Local_path/deliveree_sdk-1.0.0.gem
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

### Application config
Adding the code bellow in your `Project/config/application.rb` file.
```ruby
# Load the gem in your application
require 'deliveree_sdk'

# setup authorization
Deliveree.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
end

```

# **1. Cancel booking**
> cancel_booking(id, opts)

### Example
```ruby

api_instance = Deliveree::DelivereeApi.new
id = 56 # Integer | ID of delivery

opts = { 
  accept_language: 'en' # String | 
}

begin
  api_instance.cancel_booking(id, opts)
rescue Deliveree::ApiError => e
  puts "Exception when calling DelivereeApi->cancel_booking: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of delivery | 
 **accept_language** | **String**| en

### Return type

nil (empty response body)

# **2. Deliveries get quote**
> ResponseWithData deliveries_get_quote(body, opts)

### Example
```ruby
api_instance = Deliveree::DelivereeApi.new

body = Deliveree::Quote.new # Quote | 

opts = { 
  accept_language: 'en' # String | 
}

begin
  @result = api_instance.deliveries_get_quote(body, opts)
  puts @result
rescue Deliveree::ApiError => e
  puts "Exception when calling DelivereeApi->deliveries_get_quote: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quote**](Quote.md)|  | 
 **accept_language** | **String**| en |


# **3. Create delivery booking**
> ResponseDefault deliveries_post(body, opts)

### Example
```ruby

api_instance = Deliveree::DelivereeApi.new

body = Deliveree::Delivery.new # Delivery | 

opts = { 
  accept_language: 'en' # String | 
}

begin
  @result = api_instance.deliveries_post(body, opts)
  puts @result
rescue Deliveree::ApiError => e
  puts "Exception when calling DelivereeApi->deliveries_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Delivery**](Delivery.md)|  | 
 **accept_language** | **String**|  |


## Documentation for API Endpoints

All URIs are relative to *https:api.sandbox.deliveree.com//public_api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Deliveree::DelivereeApi* | [**cancel_booking**](docs/DelivereeApi.md#cancel_booking) | **POST** /deliveries/{id}/cancel | 
*Deliveree::DelivereeApi* | [**deliveries_get_quote**](docs/DelivereeApi.md#deliveries_get_quote) | **POST** /deliveries/get_quote | 
*Deliveree::DelivereeApi* | [**deliveries_post**](docs/DelivereeApi.md#deliveries_post) | **POST** /deliveries | 


## Documentation for Models

 - [Deliveree::Delivery](docs/Delivery.md)
 - [Deliveree::Location](docs/Location.md)
 - [Deliveree::PositionTracking](docs/PositionTracking.md)
 - [Deliveree::Quote](docs/Quote.md)


## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

