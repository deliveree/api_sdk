package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;

public interface ICancelBookingApiService {
	public ApiResponse<JSONObject> cancelBookingWithHttpInfo(Integer id, String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> cancelBookingAsyncWithHttpInfo(Integer id, String acceptLanguage) throws JSONException;
}