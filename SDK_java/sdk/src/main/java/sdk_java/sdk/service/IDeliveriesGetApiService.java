package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;

public interface IDeliveriesGetApiService {
	public ApiResponse<JSONObject> deliveriesGetWithHttpInfo(Integer id, String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> deliveriesGetAsyncWithHttpInfo(Integer id, String acceptLanguage) throws JSONException;
}