package sdk_java.sdk.service.impl;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.BaseWebservice;
import sdk_java.sdk.model.domain.ApiException;
import sdk_java.sdk.model.domain.Delivery;
import sdk_java.sdk.model.domain.Quote;
import sdk_java.sdk.service.IDeliveriesGetApiService;
import sdk_java.sdk.service.IDeliveriesGetListApiService;
import sdk_java.sdk.service.IVehicleTypesGetApiService;
import sdk_java.sdk.util.Helper;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service("iVehicleTypesGetApiService")
public class VehicleTypesGetApiServiceImpl extends BaseWebservice implements IVehicleTypesGetApiService {

	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>
	
	@Override
	public ApiResponse<JSONObject> vehicleTypesGetWithHttpInfo(String acceptLanguage) throws JSONException {
		JSONObject ret = null;
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
				String url = "/vehicle_types";
				List<NameValuePair> localVarQueryParams = new ArrayList<>();
				List<NameValuePair> localVarPathParams = new ArrayList<>();

				if (acceptLanguage != null) {
					localVarQueryParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doGet(url, null, null, localVarPathParams);

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "error "+ ex.getMessage() +"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>
	
	@Override
	synchronized public ApiResponse<JSONObject> VehicleTypesGetAsyncWithHttpInfo(String acceptLanguage) throws JSONException {
		JSONObject ret = null;
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
				String url = "/vehicle_types";
				List<NameValuePair> localVarQueryParams = new ArrayList<>();
				List<NameValuePair> localVarPathParams = new ArrayList<>();

				if (acceptLanguage != null) {
					localVarQueryParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doGet(url, null, null, localVarPathParams);

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "error "+ ex.getMessage() +"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}
}