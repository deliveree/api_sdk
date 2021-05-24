package sdk_java.sdk.service.impl;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.BaseWebservice;
import sdk_java.sdk.model.domain.ApiException;
import sdk_java.sdk.model.domain.Delivery;
import sdk_java.sdk.model.domain.Quote;
import sdk_java.sdk.service.IDeliveriesGetListApiService;
import sdk_java.sdk.util.Helper;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service("iDeliveriesGetListApiService")
public class DeliveriesGetListApiServiceImpl extends BaseWebservice implements IDeliveriesGetListApiService {

	// <input page
	// <input perPage
	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>

	@Override
	public ApiResponse<JSONObject> deliveriesGetListWithHttpInfo(Integer page, Integer perPage,
			String acceptLanguage) throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(page, perPage);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/";
				Integer IntPage = page;
				Integer IntPerPage = perPage;
				List<NameValuePair> localVarQueryParams = new ArrayList<>();
				localVarQueryParams.add(new BasicNameValuePair("page", IntPage.toString()));
				localVarQueryParams.add(new BasicNameValuePair("per_page", IntPerPage.toString()));

				if (acceptLanguage != null) {
					localVarQueryParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doGet(url, listHeaders, localVarQueryParams, null);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "\"" + ex.getMessage() + "\"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	// <input page
	// <input perPage
	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>

	@Override
	synchronized public ApiResponse<JSONObject> deliveriesGetListAsyncWithHttpInfo(Integer page, Integer perPage,
			String acceptLanguage) throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(page, perPage);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/";
				Integer IntPage = page;
				Integer IntPerPage = perPage;
				List<NameValuePair> localVarQueryParams = new ArrayList<>();
				localVarQueryParams.add(new BasicNameValuePair("page", IntPage.toString()));
				localVarQueryParams.add(new BasicNameValuePair("per_page", IntPerPage.toString()));

				if (acceptLanguage != null) {
					localVarQueryParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doGet(url, listHeaders, localVarQueryParams, null);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "\"" + ex.getMessage() + "\"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	private ApiException validateInput(Integer page, Integer perPage) {
		// verify the required parameter 'page' is set
		if (page == null)
			return new ApiException(400,
					"Missing required parameter page when calling DelivereeApi -> DeliveriesGetList");
		else if (page < 1)
			return new ApiException(400, "Out of Range parameter page when calling DelivereeApi -> DeliveriesGetList");
		// verify the required parameter 'perPage' is set
		if (perPage == null)
			return new ApiException(400,
					"Missing required parameter perPage when calling DelivereeApi -> DeliveriesGetList");
		else if (perPage < 1 || perPage > 100)
			return new ApiException(400,
					"Out of Range parameter perPage when calling DelivereeApi -> DeliveriesGetList");
		return new ApiException(200, "");
	}
}