package sdk_java.sdk.api;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.Configuration;
import sdk_java.sdk.model.domain.Delivery;
import sdk_java.sdk.model.domain.Quote;
import sdk_java.sdk.service.ICancelBookingApiService;
import sdk_java.sdk.service.IDeliveriesGetApiService;
import sdk_java.sdk.service.IDeliveriesGetListApiService;
import sdk_java.sdk.service.IDeliveriesGetQuotePostApi;
import sdk_java.sdk.service.IDeliveriesPostApiService;
import sdk_java.sdk.service.IVehicleTypesGetApiService;
import sdk_java.sdk.service.impl.CancelBookingApiServiceImpl;
import sdk_java.sdk.service.impl.DeliveriesGetApiServiceImpl;
import sdk_java.sdk.service.impl.DeliveriesGetListApiServiceImpl;
import sdk_java.sdk.service.impl.DeliveriesGetQuotePostApiServiceImp;
import sdk_java.sdk.service.impl.DeliveriesPostApiServiceImp;
import sdk_java.sdk.service.impl.VehicleTypesGetApiServiceImpl;

public class DelivereeApi {

	public ICancelBookingApiService iCancelBookingApiService = new CancelBookingApiServiceImpl();
	public IDeliveriesPostApiService iDeliveriesPostApiService = new DeliveriesPostApiServiceImp();
	public IDeliveriesGetApiService iDeliveriesGetApiService = new DeliveriesGetApiServiceImpl();
	public IDeliveriesGetListApiService iDeliveriesGetListApiService = new DeliveriesGetListApiServiceImpl();
	public IDeliveriesGetQuotePostApi iDeliveriesGetQuotePostApi = new DeliveriesGetQuotePostApiServiceImp();
	public IVehicleTypesGetApiService iVehicleTypesGetApiService = new VehicleTypesGetApiServiceImpl();

	public ApiResponse<JSONObject> cancelBooking(Integer id, String acceptLanguage) throws JSONException {
		return iCancelBookingApiService.cancelBookingWithHttpInfo(id, acceptLanguage);
	}

	public ApiResponse<JSONObject> createdDelivery(Delivery body, String acceptLanguage) throws JSONException {
		return iDeliveriesPostApiService.deliveriesPostWithHttpInfo(body, acceptLanguage);
	}

	public ApiResponse<JSONObject> createdDeliveryAsync(Delivery body, String acceptLanguage) throws JSONException {
		return iDeliveriesPostApiService.deliveriesPostAsyncWithHttpInfo(body, acceptLanguage);
	}
	
	public ApiResponse<JSONObject> getDetailDelivery(Integer id, String acceptLanguage) throws JSONException {
		return iDeliveriesGetApiService.deliveriesGetWithHttpInfo(id, acceptLanguage);
	}

	public ApiResponse<JSONObject> getDetailDeliveryAsync(Integer id, String acceptLanguage) throws JSONException {
		return iDeliveriesGetApiService.deliveriesGetAsyncWithHttpInfo(id, acceptLanguage);
	}
	
	public ApiResponse<JSONObject> getListDelivery(Integer page, Integer perPage, String acceptLanguage)
			throws JSONException {
		return iDeliveriesGetListApiService.deliveriesGetListWithHttpInfo(page, perPage, acceptLanguage);
	}
	
	public ApiResponse<JSONObject> getListDeliveryAsync(Integer page, Integer perPage, String acceptLanguage)
			throws JSONException {
		return iDeliveriesGetListApiService.deliveriesGetListAsyncWithHttpInfo(page, perPage, acceptLanguage);
	}

	public ApiResponse<JSONObject> createdQuote(Quote body, String acceptLanguage) throws JSONException {
		return iDeliveriesGetQuotePostApi.deliveriesGetQuotePostWithHttpInfo(body, acceptLanguage);
	}

	public ApiResponse<JSONObject> createdQuoteAsync(Quote body, String acceptLanguage) throws JSONException {
		return iDeliveriesGetQuotePostApi.deliveriesGetQuotePostAsyncWithHttpInfo(body, acceptLanguage);
	}
	
	public ApiResponse<JSONObject> getListVehicleTypes(String acceptLanguage) throws JSONException {
		return iVehicleTypesGetApiService.vehicleTypesGetWithHttpInfo(acceptLanguage);
	}

	public ApiResponse<JSONObject> getListVehicleTypesAsync(String acceptLanguage) throws JSONException {
		return iVehicleTypesGetApiService.VehicleTypesGetAsyncWithHttpInfo(acceptLanguage);
	}
	
	public static void main(String[] args) throws JSONException {
		Configuration.ApiKeyPrefix.put("Authorization", "YOUR_KEY_HERE");
		DelivereeApi delivery = new DelivereeApi();
		ApiResponse<JSONObject> result = delivery.getListVehicleTypesAsync(null);
		System.out.print(result.getData().toString());
	};
}
