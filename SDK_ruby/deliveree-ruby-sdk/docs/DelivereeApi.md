# Deliveree::DelivereeApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_booking**](DelivereeApi.md#cancel_booking) | **POST** /deliveries/{id}/cancel | 
[**deliveries_get_quote**](DelivereeApi.md#deliveries_get_quote) | **POST** /deliveries/get_quote | 
[**deliveries_post**](DelivereeApi.md#deliveries_post) | **POST** /deliveries | 


# **cancel_booking**
> cancel_booking(id, opts)


### Example
```ruby
# load the gem
require 'deliveree_sdk'
# setup authorization
Deliveree.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
end

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
 **accept_language** | **String**|  | [optional] [default to en]

### Return type

nil (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **deliveries_get_quote**
> ResponseWithData deliveries_get_quote(body, opts)



### Example
```ruby
# load the gem
require 'deliveree_sdk'
# setup authorization
Deliveree.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
end

api_instance = Deliveree::DelivereeApi.new

body = Deliveree::Quote.new # Quote | 

opts = { 
  accept_language: 'en' # String | 
}

begin
  result = api_instance.deliveries_get_quote(body, opts)
  p result
rescue Deliveree::ApiError => e
  puts "Exception when calling DelivereeApi->deliveries_get_quote: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quote**](Quote.md)|  | 
 **accept_language** | **String**|  | [optional] [default to en]

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# **deliveries_post**
> ResponseDefault deliveries_post(body, opts)


### Example
```ruby
# load the gem
require 'deliveree_sdk'
# setup authorization
Deliveree.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
end

api_instance = Deliveree::DelivereeApi.new

body = Deliveree::Delivery.new # Delivery | 

opts = { 
  accept_language: 'en' # String | 
}

begin
  result = api_instance.deliveries_post(body, opts)
  p result
rescue Deliveree::ApiError => e
  puts "Exception when calling DelivereeApi->deliveries_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Delivery**](Delivery.md)|  | 
 **accept_language** | **String**|  | [optional] [default to en]


### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



