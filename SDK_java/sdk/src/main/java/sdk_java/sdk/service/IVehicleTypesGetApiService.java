package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;

public interface IVehicleTypesGetApiService {
	public ApiResponse<JSONObject> vehicleTypesGetWithHttpInfo(String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> VehicleTypesGetAsyncWithHttpInfo(String acceptLanguage) throws JSONException;
}