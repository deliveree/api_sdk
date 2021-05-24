package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;

public interface IDeliveriesGetListApiService {
	public ApiResponse<JSONObject> deliveriesGetListWithHttpInfo(Integer page, Integer perPage, String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> deliveriesGetListAsyncWithHttpInfo(Integer page, Integer perPage, String acceptLanguage) throws JSONException;
}