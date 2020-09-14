package sdk_java.sdk.service.impl;

import sdk_java.sdk.configApi.ApiResponse;
import sdk_java.sdk.configApi.BaseWebservice;
import sdk_java.sdk.model.domain.ApiException;
import sdk_java.sdk.service.ICancelBookingApiService;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service("iCancelBookingApiService")
public class CancelBookingApiServiceImpl extends BaseWebservice implements ICancelBookingApiService {

	// <input page
	// <input perPage
	// <input acceptLanguage (optional)
	// exception ApiException Thrown when fails to make API call
	// returns ApiResponse<JSONObject>
	@Override
	public ApiResponse<JSONObject> cancelBookingWithHttpInfo(Integer id, String acceptLanguage)
			throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(id);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/{id}/cancel";
				Integer IntPage = id;
				List<NameValuePair> listParams = new ArrayList<>();
				listParams.add(new BasicNameValuePair("id", IntPage.toString()));

				if (acceptLanguage != null) {
					listParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doPost(url, listHeaders, listParams, null, null);
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
	synchronized public ApiResponse<JSONObject> cancelBookingAsyncWithHttpInfo(Integer id, String acceptLanguage)
			throws JSONException {
		JSONObject ret = null;
		ApiException checkException = validateInput(id);
		List<NameValuePair> listHeaders = new ArrayList<>();
		try {
			if (checkException.getErrorCode() == 400) {
				throw new Exception(checkException.getErrorContent());
			} else {
				String url = "/deliveries/{id}/cancel";
				Integer IntPage = id;
				List<NameValuePair> listParams = new ArrayList<>();
				listParams.add(new BasicNameValuePair("id", IntPage.toString()));

				if (acceptLanguage != null) {
					listParams.add(new BasicNameValuePair("Accept-Language", acceptLanguage));
				}
				// make the HTTP request
				return doPost(url, listHeaders, listParams, null, null);
			}

		} catch (Exception ex) {
			ret = new JSONObject("{\"message\":" + "\"" + ex.getMessage() + "\"}");
			return new ApiResponse<JSONObject>(400, listHeaders, ret);
		}
	}

	private ApiException validateInput(Integer id) {
		// verify the required parameter 'id' is set
		if (id == null)
			return new ApiException(400, "Missing required parameter id when calling DelivereeApi -> CancelBooking");
		return new ApiException(200, "");
	}
}