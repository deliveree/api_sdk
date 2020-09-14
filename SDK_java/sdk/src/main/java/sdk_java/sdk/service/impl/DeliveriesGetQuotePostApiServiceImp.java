package sdk_java.sdk.service.impl;

import sdk_java.sdk.configApi.ApiResponse;

import com.google.gson.Gson;
import sdk_java.sdk.configApi.BaseWebservice;
import sdk_java.sdk.model.domain.ApiException;
import sdk_java.sdk.model.domain.Delivery;
import sdk_java.sdk.model.domain.Quote;
import sdk_java.sdk.service.IDeliveriesGetQuotePostApi;
import sdk_java.sdk.service.IDeliveriesPostApiService;
import sdk_java.sdk.util.Helper;

import org.apache.http.NameValuePair;
import org.apache.http.entity.StringEntity;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service("iDeliveriesGetQuotePostApiService")
public class DeliveriesGetQuotePostApiServiceImp extends BaseWebservice implements IDeliveriesGetQuotePostApi {

	// <input body
	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>

	@Override
	public ApiResponse<JSONObject> deliveriesGetQuotePostWithHttpInfo(Quote body, String acceptLanguage)
			throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(body);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/get_quote";
				List<NameValuePair> listParams = new ArrayList<>();

				if (acceptLanguage != null) {
					listParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				Gson gson = new Gson();
				String str = gson.toJson(body);
				StringEntity entity = new StringEntity(str, HTTP.UTF_8);
				// make the HTTP request
				return doPost(url, listHeaders, listParams, null, entity);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "\"" + ex.getMessage() + "\"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	// <input body
	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>

	@Override
	synchronized public ApiResponse<JSONObject> deliveriesGetQuotePostAsyncWithHttpInfo(Quote body, String acceptLanguage)
			throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(body);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/get_quote";
				List<NameValuePair> listParams = new ArrayList<>();

				if (acceptLanguage != null) {
					listParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				Gson gson = new Gson();
				String str = gson.toJson(body);
				StringEntity entity = new StringEntity(str, HTTP.UTF_8);
				// make the HTTP request
				return doPost(url, listHeaders, listParams, null, entity);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "\"" + ex.getMessage() + "\"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	private ApiException validateInput(Quote body) {
		// verify the required parameter 'body' is set
		if (body == null)
			return new ApiException(400,
					"Missing required parameter Quote is when calling DelivereeApi -> DeliveriesGetQuotePost");
		return new ApiException(200, "");
	}
}