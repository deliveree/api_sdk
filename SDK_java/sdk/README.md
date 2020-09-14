# Deliveree - the Java library for the Deliveree SDK
Maven build project sdk : 
```
clean compile assembly:single
```

With Deliveree SDK, developers can integrate our on-demand local delivery platform into their applications. The SDK is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.

- SDK version: 1.0.0-SNAPSHOT

<a name="frameworks-supported"></a>
## Frameworks supported
- Java 1.8 or later
- Spring Boot Framework  1.5.9 or later

<a name="dependencies"></a>
## Dependencies
- [ANDROID-JSON](https://mvnrepository.com/artifact/com.vaadin.external.google/android-json/0.0.20131108.vaadin1) - 0.0.20131108.vaadin1 or later

## Config for sample project 
    # Add SDK in your project 
        Project/edit References...
        Then browse to Deliveree sdk files:
            - sdk-delivery.jar

<p align='center'>            
    <img src='./add_references.PNG' width="500"></img>
</p>


## Getting Started

## Cancel Booking
```java
package test;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.configApi.ApiResponse;

public class test {
	public static void main(String a[]) throws Exception {
        // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		int id = 56; // int? | ID of delivery
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		DelivereeApi delivery = new DelivereeApi();
		try {
			ApiResponse<JSONObject> result delivery.cancelBooking(id, acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```

## Getting Add Booking
```java
package test;

import org.json.JSONObject;

import com.google.gson.Gson;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.model.domain.Delivery;

public class test {
	public static void main(String a[]) throws Exception {
		 // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		// new delivery in body 
		Delivery body = new Delivery(
                // Add Deliveries body 
                // Locations = new List<Location>{
                    // Add you Location
                  //}
                )
		DelivereeApi delivery = new DelivereeApi();
		try {
			 ApiResponse<JSONObject> result = delivery.createdDelivery(body, acceptLanguage);
//			 ApiResponse<JSONObject> resultAsync = delivery.createdDeliveryAsync(body, acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```

## Get Delivery Detail
```java
package test;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.Configuration;

public class test {
	public static void main(String a[]) throws Exception {
        // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		int id = 21778; // int? | ID of delivery
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		DelivereeApi delivery = new DelivereeApi();
		try {
			ApiResponse<JSONObject> result = delivery.getDetailDelivery(id, acceptLanguage);
			ApiResponse<JSONObject> resultAsync = delivery.getDetailDeliveryAsync(id, acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```

## Get Deliveries List
```java
package test;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.configApi.ApiResponse;

public class test {
	public static void main(String a[]) throws Exception {
        // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		int page = 1; // The page parameter can be used to specify further pages or offsets
		int per_page	= 20; // integer	The per_page can be used for custom page sizes up to 100
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		DelivereeApi delivery = new DelivereeApi();
		try {
			ApiResponse<JSONObject> result = getListDelivery(page, per_page, acceptLanguage);
			ApiResponse<JSONObject> resultAsync = getListDeliveryAsync(page, per_page, acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```
## GetQuotes
```java
package test;

import org.json.JSONObject;

import com.google.gson.Gson;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.model.domain.Quote;

public class test {
	public static void main(String a[]) throws Exception {
		 // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		// new delivery in body 
		Quote body = new Quote(
                //{
                   // TimeType = "now", // now or schedule
                   // Locations = new List<Location>
                //{
                  //  new Location
                  //  {
                    // location
                 //   }
                //}
        )
		DelivereeApi delivery = new DelivereeApi();
		try {
			 ApiResponse<JSONObject> result = delivery.createdQuote(body, acceptLanguage);
//			 ApiResponse<JSONObject> resultAsync = delivery.createdQuoteAsync(body, acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```

## Get Vehicle Types
```java
package test;

import org.json.JSONObject;

import com.google.gson.Gson;

import sdk_java.sdk.api.DelivereeApi;
import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.model.domain.Quote;

public class test {
	public static void main(String a[]) throws Exception {
		 // Configure API key authorization: ApiKeyAuth
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_API_KEY");
		String acceptLanguage = "acceptLanguage_example"; // string | (optional)
		// new delivery in body 
		DelivereeApi delivery = new DelivereeApi();
		try {
			 ApiResponse<JSONObject> result = delivery.getListVehicleTypes(acceptLanguage);
//			 ApiResponse<JSONObject> resultAsync = delivery.getListVehicleTypesAsync(acceptLanguage);
		} catch (Exception ex) {
			System.out.print(ex);
		}
	}
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.deliveree.com/public_api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DelivereeApi* | **CancelBooking** | **POST** /deliveries/{id}/cancel | 
*DelivereeApi* | **CreatedQuote** | **POST** /deliveries/get_quote | 
*DelivereeApi* | **CreatedDelivery** | **POST** /deliveries | 
*DelivereeApi* | **GetDetailDelivery** | **GET** /deliveries/{id} | 
*DelivereeApi* | **GetListDelivery** | **GET** /deliveries | 
*DelivereeApi* | **GetListVehicleTypes** | **GET** /vehicle_types | 

<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.Delivery](docs/Delivery.md)
 - [Model.Location](docs/Location.md)
 - [Model.PositionTracking](docs/PositionTracking.md)
 - [Model.Quote](docs/Quote.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **acceptLanguage**: HTTP header - optional

