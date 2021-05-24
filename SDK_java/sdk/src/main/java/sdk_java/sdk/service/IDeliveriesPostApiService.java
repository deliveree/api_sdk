package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.model.domain.Delivery;

public interface IDeliveriesPostApiService {
	public ApiResponse<JSONObject> deliveriesPostWithHttpInfo(Delivery body, String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> deliveriesPostAsyncWithHttpInfo(Delivery body, String acceptLanguage) throws JSONException;

}
