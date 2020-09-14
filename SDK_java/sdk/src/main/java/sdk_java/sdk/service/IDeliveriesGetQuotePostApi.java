package sdk_java.sdk.service;

import org.json.JSONException;
import org.json.JSONObject;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.model.domain.Quote;

public interface IDeliveriesGetQuotePostApi {
	public ApiResponse<JSONObject> deliveriesGetQuotePostWithHttpInfo(Quote body, String acceptLanguage) throws JSONException;
	public ApiResponse<JSONObject> deliveriesGetQuotePostAsyncWithHttpInfo(Quote body, String acceptLanguage) throws JSONException;

}
